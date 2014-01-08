var groupId = '1088622';

function getAlbums(parameters)
{
//  var ownerId = parameters.ownerId || groupId; // не уверен, что это надо
  var offset  = parameters.offset || 0;
  var count   = parameters.count  || 0;
  var fields  = parameters.fields || ['aid', 'title', 'size'];

  $.ajax(
  { 
    url: 'https://api.vk.com/method/photos.getAlbums?owner_id=-' + groupId + '&offset=' + offset + '&count=' + count, 
    dataType: 'jsonp', 
    success: function(data)
    {
      var result = [];

      for (var i = data.response.length - 1; i >= 0; i--) 
      {
        result[i] = data.response[i];
        
        $('h2').after('<a target="_blank" href="https://vk.com/album-' + groupId + '_' + result[i]['aid'] + '">' + result[i]['title'] + '</a>, фотографий: <b>' + result[i]['size'] + '</b><br>');
      };
    } 
  });  
};

getAlbums({});