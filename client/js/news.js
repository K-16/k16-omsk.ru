var news =
{
  getNews: function(parameters)
  {
    var p = inherit(parameters);

    var filter = p.filter || 'owner',
        offset = p.offset || 0,
        count  = p.count  || 100;

    $.ajax(
    { 
      url: 'https://api.vk.com/method/wall.get?owner_id=' + config['groupId'] + '&filter=' + filter + '&offset=' + offset + '&count=' + count, 
      dataType: 'jsonp',
      success: function(a)
      {
        var time,
            data,
            result;

        var authors = [];

        for (var i in a.response)
        {
          if (a.response[i]['text'])
          {
            time = new Date(a.response[i]['date']);
            time.setTime(a.response[i]['date'] * 1000);

            authors.push((a.response[i]['signer_id']) ? a.response[i]['signer_id'] : 1);

            data = 
            {
              'id': i - 1,
              'day': time.getDate(),
              'month': time.getMonth() + 1,
              'year': time.getFullYear(),
              'likes': a.response[i]['likes']['count'],
              'reposts': a.response[i]['reposts']['count'],
              'comments': a.response[i]['comments']['count'],
              'text': a.response[i]['text']
            };

            result = compileText(templates['news'], data);

            $('#news').append(result);
          };
        };

        for (var b = 0; b <= authors.length - 1; b++) 
        {
          if (authors[b] == 1)
          {
            $('#news #id' + b).append(config['defaultAdmin']);
          }
          else
          {
            getVkUserNameById(authors[b], '#id' + b);
          };

          $('#news address:last').html('<i class="icon author"></i> ' + config['defaultAdmin']); // временное решение
        };


        log('News loaded: ' + i);
      }
    });
  }
};

news.getNews();