// Решение с несколькими ajax запросами -- временное, пока я не найду более оптимального решения.
// Скорее всего буду выносить в глобальный массив и проч.

var gallery = 
{
  getAlbumsList: function(parameters)
  {
    var p = inherit(parameters);

    var offset  = p.offset || 0,
        count   = p.count  || 0,
        fields  = p.fields || ['aid', 'title', 'size'];

    $.ajax(
    { 
      url: 'https://api.vk.com/method/photos.getAlbums?owner_id=' + config['groupId'] + '&offset=' + offset + '&count=' + count, 
      dataType: 'jsonp',
      success: function(data)
      {
        for (var i in data.response) 
        {
          var a =
          {
            'id': data.response[i]['aid'],
            'title': data.response[i]['title'],
            'size': data.response[i]['size']
          };

          $('h2').after(compileText(templates['galleryLink'], a));
        };

        log('Albums loaded: ' + i);
      }
    });
  },

  getPhotosByAlbum: function(parameters)
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
        gallery.closeGallery('fast');

        var a = 
        {
          'title': title,
          'closeSymbol': config['galleryCloseSymbol']
        };

        $('body').append(compileText(templates['gallery'], a));

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

        log('Photos in album-' + id + ' loaded: ' + ++i);
      }
    });
  },
  closeGallery: function(speed)
  {
    $('.gallery, .fotorama--hidden').fadeOut(speed, function() {$(this).remove()});   
  },
};

gallery.getAlbumsList();