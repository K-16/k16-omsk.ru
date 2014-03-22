var gallery =
{
  albums:
  {
    get: function(parameters)
    {
      var p = inherit(parameters);

      var offset = p.offset || 0,
          count  = p.count  || 0,
          covers = p.covers || 1; // bool, 0 === false, 1 === true

      var result = [];

      var request = 'photos.getAlbums?owner_id=' + config['groupId'] + '&need_covers=' + covers + '&offset=' + offset + '&count=' + count;

      ajaxVK(request, true);

      var json = JSON.parse(localStorage.getItem(request));

      for (var i in json.response)
      {
        var j = json.response[i];

        result.push([j['aid'],
                     j['title'],
                     j['thumb_src']]);
      };

      return result;
    },

    sort: function(albums, method)
    {
      var key,
          keys   = [],
          sorted = {};

      // Сортируем ключи

      for (var i in albums)
      {
        key = albums[i][1].split(' | ')[gallery.albums.sortMethod(method)];

        if (albums[i][1].match(/\|/)) keys.push(key);
      };

      keys = unique(keys);

      // Сортируем альбомы

      for (var a in keys)
      {
        sorted[keys[a]] = [];

        for (var b in albums)
        {
          key = albums[b][1].split(' | ')[gallery.albums.sortMethod(method)];

          if (key == keys[a])
          {
            sorted[keys[a]].push(albums[b]);
          };
        };
      };

      return sorted;
    },

    sortMethod: function(method)
    {
      switch (method)
      {
        case 'year':
          return 1; // я не поленился 2-а раза написать 'return'
        case 'name':
          return 0; // и тут тоже
      };
    },

    show: function(method)
    {
      $('.tabs nav, .tabs figure').empty();
      $('.dotted').removeClass('active');

      $('.dotted:eq(' + ((method == 'year') ? 0 : 1) + ')').addClass('active');

      var albums = gallery.albums.sort(gallery.albums.get(), method);

      for (var a in albums)
      {
        $('.tabs nav').append('<a>' + a + '</a>');

        $('.tabs figure').append('<div></div>');

        for (var b in albums[a])
        {
          $('.tabs figure div:last').append(compileText(templates['galleryAlbumLink'],
          {
            'id': albums[a][b][0],
            'title': albums[a][b][1].split(' | ')[(gallery.albums.sortMethod(method) == 1) ? 0 : 1],
            'fullTitle': albums[a][b][1],
            'img': albums[a][b][2]
          }));
        };
      };

      $('.tabs').tabs();
    }
  },
  photos:
  {
    showByAlbum: function(parameters)
    {
      var p = inherit(parameters);

      var id    = p.id,
          title = p.title || '',
          rev   = p.rev   || 0;

      $.ajax(
      { 
        url: 'https://api.vk.com/method/photos.get?owner_id=' + config['groupId'] + '&album_id=' + id + '&rev=' + rev, 
        dataType: 'jsonp',
        success: function(data)
        {
          gallery.close('fast');

          $('body').append(compileText(templates['gallery'],
          {
            'title': title
          }));

          for (var i in data.response)
          {
            var src = data.response[i]['src_xxbig']; // есть идеи, как по другому эту проверку реализовать?
            if (!data.response[i]['src_xxbig'])
            {
              var src = data.response[i]['src_xbig'];
              if (!data.response[i]['src_xbig']) 
              {
                var src = data.response[i]['src_big'];
                if (!data.response[i]['src_big']) 
                {
                  var src = data.response[i]['src'];
                };
              };
            };

            $('.gallery.photo').append('<img src="' + src + '">');
          };

          $('.gallery.photo').fotorama();

          log('Фотографий в album-' + id + ': ' + ++i);
        }
      });
    }
  },
  close: function(speed)
  {
    $('.gallery, .fotorama--hidden').fadeOut(speed, function() {$(this).remove()});

    log('Закрыл галерею');
  },
};

gallery.albums.show('year');