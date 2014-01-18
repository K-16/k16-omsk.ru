// Решение с несколькими ajax запросами -- временное, пока я не найду более оптимального решения.
// Скорее всего буду выносить в глобальный массив и проч.

var gallery = 
{
  getAlbumsList: function(parameters)
  {
    var offset  = parameters.offset || 0,
        count   = parameters.count  || 0,
        fields  = parameters.fields || ['aid', 'title', 'size'];

    $.ajax(
    { 
      url: 'https://api.vk.com/method/photos.getAlbums?owner_id=' + config['groupId'] + '&offset=' + offset + '&count=' + count, 
      dataType: 'jsonp',
      success: function(data)
      {
        for (var i in data.response) 
        {
          $('h2').after('<a onclick="gallery.getPhotosByAlbum({\'id\': ' + data.response[i]['aid'] + '});">' + data.response[i]['title'] + '</a>, фотографий: <b>' + data.response[i]['size'] + '</b><br>');
        };

        log('Albums loaded: ' + i);
      }
    });
  },

  getPhotosByAlbum: function(parameters)
  {
    var id  = parameters.id,
        rev = parameters.rev || 0;

    $.ajax(
    { 
      url: 'https://api.vk.com/method/photos.get?owner_id=' + config['groupId'] + '&album_id=' + id + '&rev=' + rev, 
      dataType: 'jsonp',
      success: function(data)
      {
        gallery.closeGallery('fast');

        $('body').append('<div class="gallery background"></div>' + 
                         '<div class="gallery close" onclick="gallery.closeGallery();">' + config['galleryCloseSymbol'] + '</div>' + 
                         '<div class="gallery photo"></div>');

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

        $('.gallery.photo').fotorama(
        {
          'nav'     : 'thumbs',
          'keyboard': true,
          'shadows' : false,
          'width'   : '100%',
          'height'  : '100%',
        });

        log('Photos in album-' + id + ' loaded: ' + ++i);
      }
    });
  },
  closeGallery: function(speed)
  {
    $('.gallery, .fotorama--hidden').fadeOut(speed, function() {$(this).remove()});   
  },
};

gallery.getAlbumsList({});