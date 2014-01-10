var groupId = '1088622';

// Решение с несколькими ajax запросами -- временное, пока я не найду более оптимального решения.
// Скорее всего буду выносить в глобальный массив и проч.

function getAlbumsList(parameters) 
{
  var offset  = parameters.offset || 0,
      count   = parameters.count  || 0,
      fields  = parameters.fields || ['aid', 'title', 'size'];

  $.ajax(
  { 
    url: 'https://api.vk.com/method/photos.getAlbums?owner_id=-' + groupId + '&offset=' + offset + '&count=' + count, 
    dataType: 'jsonp',
    success: function(data)
    {
      for (var i = data.response.length - 1; i >= 0; i--) 
      {
        $('h2').after('<a onclick="getPhotosByAlbum({\'id\': ' + data.response[i]['aid'] + '});">' + data.response[i]['title'] + '</a>, фотографий: <b>' + data.response[i]['size'] + '</b><br>');
      };
    }
  });
};

function getPhotosByAlbum(parameters) 
{
  var id  = parameters.id,
      rev = parameters.rev || 1;

  $.ajax(
  { 
    url: 'https://api.vk.com/method/photos.get?owner_id=-' + groupId + '&album_id=' + id + '&rev=' + rev, 
    dataType: 'jsonp',
    success: function(data)
    {
      for (var i = data.response.length - 1; i >= 0; i--) 
      {
        $('#gallery').append('<img src="' + data.response[i]['src_xxbig'] + '">');
      };

      $('#gallery').fotorama(
      {
        'nav': 'thumbs',
        'keyboard': true,
      });
    }
  });
};

getAlbumsList({});

//getPhotosByAlbum({});