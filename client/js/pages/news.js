var news =
{
  get: function(parameters)
  {
    var p = inherit(parameters);

    var filter = p.filter || 'owner',
        offset = p.offset || 0,
        count  = p.count  || 100;

    var result = [];

    var request = 'wall.get?owner_id=' + config['vk']['groupId'] + '&filter=' + filter + '&offset=' + offset + '&count=' + count;

    ajaxVK(request, false);

    var json = JSON.parse(localStorage.getItem(request));

    for (var i in json.response.items)
    {
      var j = json.response.items[i];

      result.push([j['signer_id'],
                   j['date'],
                   j['text'],
                   j['likes']['count'],
                   j['reposts']['count'],
                   j['comments']['count'],
                   j['attachments']]);
    };

    return result;
  },

  show: function()
  {
    var n = news.get(),
        time,
        result = [];

    for (var i in n)
    {
      time = new Date(n[i][1]);
      time.setTime(n[i][1] * 1000);

      result.push(compileText(templates['news'],
      {
        'id': i,
        'day': time.getDate(),
        'month': time.getMonth() + 1,
        'year': time.getFullYear(),
        'likes': n[i][3],
        'reposts': n[i][4],
        'comments': n[i][5],
        'text': parser.newsText(n[i][2]),
        'attachments': news.getAttachments(n[i][6]),
        'authorID': (n[i][0]) ? n[i][0] : 1
      }));
    };

    $('#news').append(result);

    $('.photo').fotorama({'height': '70%'});

    elements.newsInfo();
    parser.convertLinks();
  },

  showAuthors: function()
  {
    var ids = [],
        names = [];

    $('article address span').each(function()
    {
      ids.push($(this).text());
    });

    ids = unique(ids);

    var request = 'users.get?user_ids=' + ids.toString();
    ajaxVK(request, false);

    var json = JSON.parse(localStorage.getItem(request));

    for (var i in json.response)
    {
      var j = json.response[i],
          name = j['first_name'] + ' ' + j['last_name'];

      switch (name)
      {
        case 'Libli Kun':
          name = 'Катя Крылова';
          break;
        case 'Павел Дуров':
          name = config['defaultAdmin'];
          break;
      };

      names.push([ids[i], name]);
    };

    $('article address span').each(function()
    {
      var id = $(this).text();

      for (var i in names)
      {
        if (names[i][0] == id) $(this).text(names[i][1]);
      };
    });
  },

  getAttachments: function(attachments)
  {
    var result = [];

    for (var i in attachments)
    {
      var a = attachments[i];

      switch (a['type'])
      {
        case 'photo':
          result.push('<img src="' + checkFotoSize(a['photo']) + '">');
      };
    };

    return result;
  }
};

news.show();
news.showAuthors();