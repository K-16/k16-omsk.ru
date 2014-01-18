var news = 
{
  getNews: function(parameters) 
  {
    var filter = parameters.filter || 'owner',
        offset = parameters.offset || 0,
        count  = parameters.count  || 100;

    $.ajax(
    { 
      url: 'https://api.vk.com/method/wall.get?owner_id=' + config['groupId'] + '&filter=' + filter + '&offset=' + offset + '&count=' + count, 
      dataType: 'jsonp',
      success: function(data)
      {
        var time,
            likes,
            reposts,
            comments,
            author,
            text,
            images,
            result;

        for (var i in data.response) 
        {
          if (data.response[i]['text']) 
          {
            time = new Date(data.response[i]['date']);
            time.setTime(data.response[i]['date'] * 1000);

            time.day   = time.getDate();
            time.month = time.getMonth() + 1;
            time.year  = time.getFullYear();

            likes    = data.response[i]['likes']['count'];
            reposts  = data.response[i]['reposts']['count'];
            comments = data.response[i]['comments']['count'];
            
            author = (data.response[i]['signer_id']) ? getVkUserNameById(data.response[i]['signer_id'], '#id' + i + ' address') : config['defaultAdmin'];
            
            (!author) ? author = '' : '';
/*
            for (var a in data.response[i]['attachments']) 
            {
              images = '<img style="float: left;" src="' + data.response[i]['attachments'][a]['photo']['src'] + '">';
            };
*/
            text = data.response[i]['text'];

            var result = '<article id="id' + i + '">' +
                         '<time>Дата: ' + time.day + '.' + time.month + '.' + time.year + '</time> ' + 
                         '<address>Автор: ' + author + '</address>' +
                         '<span>Лайков: ' + likes + '</span>' + 
                         '<span>Репостов: ' + reposts + '</span>' + 
                         '<span>Комментов: ' + comments + '</span>' + 
                         '<br>' + text + 
//                         '<br>' + convertTextToLinks(text) + 
//                         '<br>' + images +
//                         '<br>' + data.response[i]['signer_id'] + ', ' + data.response[i]['to_id'] + 
                         '</article>';

            $('#news').append(result);              
          };
        };

        log('News loaded: ' + i);
      }
    });
  }
};

news.getNews({});