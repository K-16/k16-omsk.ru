/*
 * 
 * tools.js
 * ========
 * Различные вспомогательные (и не только) штуки.
 *  - names. Массив преобразований имён для упрощения url адреса.
 *  - templates. html исходники для шаблонизатора.
 *  - regExp. Массив регулярных выражений.
 *  - compileText(). Компилирование текста шаблонизатором.
 *  - getCurrentPage(). Возвращает текущую страницу.
 *  - getVkUserNameById(). Возвращает имя юзера ВК по id.
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

var templates =
{
  'news': '<article>\
             <time><i class="icon date"></i> {{day}}.{{month}}.{{year}}</time>\
             <address id="id{{id}}"><i class="icon author"></i> </address>\
             <span><i class="icon like"></i> {{likes}}</span>\
             <span><i class="icon repost"></i> {{reposts}}</span>\
             <span><i class="icon comment"></i> {{comments}}</span>\
             <br> {{{text}}}\
           </article>',
  'gallery': '<div class="gallery background"></div>\
              <div class="gallery title">{{title}}</div>\
              <div class="gallery close" onclick="gallery.closeGallery();">{{closeSymbol}}</div>\
              <div class="gallery photo"></div>',
  'galleryLink': '<a onclick="gallery.getPhotosByAlbum({\'id\': {{id}}, \'title\': \'{{title}}\' });">{{title}}</a>, фотографий: <b>{{size}}</b><br>'
};

var regExp = 
{
  year: /\|\s[0-9]+$/i,
  word: /[^A-Za-zА-Яа-я]+$/i,
  link: /((http|https):\/\/)/i,
};

function compileText(source, data)
{
  var template = Handlebars.compile(source);
  return template(data);
};

function getCurrentPage()
{
  return location.search.substr(4); // При переходе на mod_rewrite поправить
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

/**
  @deprecated
 */

function convertTextToLinks(str) 
{
  var reg = str.match(regExp['link']);

  for (key in reg)
  {
    str = str.replace(reg[key],'<a href="' + reg[key] + '" target="_blank">' + reg[key] + '</a>')
  }

  return str;  
};