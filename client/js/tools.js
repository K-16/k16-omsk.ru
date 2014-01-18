/*
 * 
 * tools.js
 * ========
 * Различные штуки, не вписывающиеся в другие файлы. Название не окончательное.
 *  - names. Массив преобразований имён для упрощения url адреса.
 *  - regExp. Массив регулярных выражений.
 *
*/

var names = 
{
  '01': 'main',
  '02': 'news',
  '03': 'history',
  '04': 'education',
  '05': 'activity',
  '06': 'people',
  '07': 'link',
  '08': 'photo'
};

var regExp = 
{
  year: /\|\s[0-9]+$/i,
  word: /[^A-Za-zА-Яа-я]+$/i,
  link: /((http|https):\/\/(www\.)?[a-zа-я0-9-]+\.[a-zа-я0-9-]{2,6})/i,
};

function getVkUserNameById(id, to) 
{
  $.ajax(
  { 
    url: 'https://api.vk.com/method/users.get?user_ids=' + id, 
    dataType: 'jsonp',
    success: function(data)
    {
      $(to).append(data.response[0]['first_name'] + ' ' + data.response[0]['last_name']);

      log('VK user\'s name with id ' + data.response[0]['uid'] + ' is: ' + data.response[0]['first_name'] + ' ' + data.response[0]['last_name']);
    }
  });
};

function convertTextToLinks(str) 
{
  var reg = str.match(regExp['link']);

  for (key in reg)
  {
    str = str.replace(reg[key],'<a href="' + reg[key] + '" target="_blank">' + reg[key] + '</a>')
  }

  return str;  
};