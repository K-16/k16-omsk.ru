var news =
{
  get: function(parameters)
  {
    var p = inherit(parameters);

    var filter = p.filter || 'owner',
        offset = p.offset || 0,
        count  = p.count  || 100;

    var result = [];

    var request = 'wall.get?owner_id=' + config['groupId'] + '&filter=' + filter + '&offset=' + offset + '&count=' + count;

    ajaxVK(request, true);

    var json = JSON.parse(localStorage.getItem(request));

    for (var i = 1; i <= json.response.length - 1; i++)
    {
      var j = json.response[i];

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
        result = []
        authors = [];

    for (var i in n)
    {
      authors.push((n[i][0]) ? n[i][0] : 1);

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
        'attachments': news.getAttachments(n[i][6])
      }));
    };

    $('#news').append(result);

    $('.photo').fotorama({'height': '70%'});

    news.showAuthors(authors);

    elements.newsInfo();
    parser.convertLinks();
  },

  showAuthors: function(authors)
  {
    for (var i in authors) 
    {
      if (authors[i] == 1)
      {
        $('#news #' + i).append(config['defaultAdmin']);
      }
      else
      {
        author = getVKName(authors[i]);

        if (author == 'Libli Kun') author = 'Катя Крылова';

        $('#news #' + i).append(author);
      };
    };
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
          result.push('<img src="' + a['photo']['src_big'] + '">');
      };
    };

    return result;
  }
};

news.show();