var main =
{
  get: function(parameters)
  {
    var p = inherit(parameters);

    var offset = p.offset || 0;

    var result = [];

    var request = 'photos.get?owner_id=' + config['vk']['groupId'] +
                            '&album_id=' + config['vk']['mainAlbumId'] +
                            '&offset=' + offset;

    ajaxVK(request);

    var json = JSON.parse(localStorage.getItem(request));

    for (var i in json.response.items)
    {
      var j = json.response.items[i];
      result.push(j.sizes[j.sizes.length - 1].url);
    };

    return result;
  },

  show: function()
  {
    var photos = main.get();

    for (var i = 0; i <= photos.length - 1; i++)
      $('.fotorama').append('<img src="' + photos[i] + '">');

    $('.fotorama').fotorama();
  }
};

main.show();
