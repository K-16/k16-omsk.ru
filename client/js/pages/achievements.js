var achievements =
{
  category:
  {
    get: function(parameters)
    {
      var p = inherit(parameters);

      var offset = p.offset || 0;

      var result = [];

      var request = 'photos.get?owner_id=' + config['vk']['groupId'] +
                              '&album_id=' + config['vk']['achievementsAlbumId'] +
                              '&offset=' + offset;

      ajaxVK(request);

      var json = JSON.parse(localStorage.getItem(request));

      for (var i in json.response.items)
      {
        var j = json.response.items[i];

        var a = [];

        for (var b in j)
          if (b.match(/photo_/)) a.push(b.replace(/photo_/, ''));

        var photo = j['photo_' + a[a.length - 1]];

        result.push([j['text'], photo]);
      };

      return result;
    },

    sort: function(ach, method)
    {
      var key,
          keys   = [],
          sorted = {};

      // Сортируем ключи

      for (var i in ach)
        keys.push(ach[i][0].split(' | ')[achievements.category.sortMethod(method)].replace(regExp['achievementsCategory'], ''));

      keys = unique(keys);

      // Сортируем категории

      for (var a in keys)
      {
        sorted[keys[a]] = [];

        for (var b in ach)
        {
          key = ach[b][0].split(' | ')[achievements.category.sortMethod(method)].replace(regExp['achievementsCategory'], '');

          if (key == keys[a])
            sorted[keys[a]].push(ach[b]);
        };
      };

      return sorted;
    },

    sortMethod: function(method)
    {
      switch (method)
      {
        case 'activity':
          return 0;
        case 'year':
          return 1;
        case 'level':
          return 2;
      };
    },

    show: function(method)
    {
      $('.tabs nav, .tabs figure').empty();
      $('.dotted').removeClass('active');

      $('.dotted:eq(' + achievements.category.sortMethod(method) + ')').addClass('active');

      var ach = achievements.category.sort(achievements.category.get(), method);

      for (var a in ach)
      {
        var img = [];

        for (var b = ach[a].length - 1; b >= 0; b--)
          img.push('\'' + ach[a][b][1] + '\'');

        $('.tabs nav').append('<a onclick="achievements.show(this, ' + img.join(', ') + ');">' + a + '</a>');
      };

      eval($('.tabs nav a:first').attr('onclick')); // Знаю я, бла-бла-бла, eval() — зло и всё такое
      $('.tabs nav a:first').addClass('active');
    }
  },

  show: function(o)
  {
    $('.tabs figure div, .tabs figure style').remove();
    $('.tabs nav a').removeClass('active');

    $(o).addClass('active');

    $('.tabs figure').append('<div><div class="fotorama"></div></div>');

    for (var i = 1; i <= arguments.length - 1; i++)
      $('.fotorama').append('<img src="' + arguments[i] + '">');

    $('.fotorama').fotorama({'height': '70%'});
  }
};

achievements.category.show('activity');
