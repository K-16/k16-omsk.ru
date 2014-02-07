/*
 * 
 * tools.js
 * ========
 * Различные вспомогательные (и не только) штуки.
 *  - names. Массив преобразований имён для упрощения url адреса.
 *  - templates. html исходники для шаблонизатора.
 *  - regExp. Массив регулярных выражений.
 *  - compileText(). Возвращает скомпилированный шаблонизатором текст.
 *  - getCurrentPage(). Возвращает текущую страницу.
 *  - inherit(). Системная функция для работы необязательных аргументов.
 *  - getVkUserNameById(). Возвращает имя юзера ВК по id.
 *
*/

var names =
{
  '': '01',
  'news': '02',
  'history': '03',
  'education': '04',
    'program': '02',
    'projects': '03',
    'nou': '04',
    'achievements': '05',
  'activity': '05',
    'beginner': '02',
    'dedication': '03',
    'night': '04',
    'sogra': '05',
    'summerhouse': '06',
    'adler': '07',
  'people': '06',
    'teacher': '02',
    'children': '03',
    'graduates': '04',
    'parents': '04',
  'about': '07',
  'photo': '08'
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

  'galleryLink': '<a onclick="gallery.getPhotosByAlbum({\'id\': {{id}}, \'title\': \'{{title}}\' });">{{title}}</a>, фотографий: <b>{{size}}</b><br>',

  'firstMenuPart': '<a class="item" href="/{{url}}">{{name}}</a>',
  'secondMenuPart': '<a href="/{{parent}}/{{url}}/">{{name}}</a>',

  'script': '<script type="text/javascript" src={{src}}></script>',
  'css': '<link href="../client/style/css/{{src}}" rel="stylesheet">'
};

var regExp = 
{
  year: /\|\s[0-9]+$/i,
  word: /[^A-Za-zА-Яа-я]+$/i,
  link: /((http|https):\/\/)/i,
};

function loadScripts()
{
  var scripts;

  switch (getCurrentPage())
  {
    case 'news':
      scripts = ['news'];
      break;
    case 'about':
      scripts = ['map', 'widgets'];
      break;
    case 'photo':
      $('.content').append(compileText(templates['css'], {'src': 'lib/fotorama.css'}))
      scripts = ['lib/fotorama', 'gallery'];
      break;
  };

  for (var i in scripts) 
  {
    $.getScript(JS_URL + scripts[i] + '.js');
  };
};

function compileText(source, data)
{
  var template = Handlebars.compile(source);
  return template(data);
};

function getCurrentPage()
{
  return location.pathname.substr(1);
};

function inherit(p)
{
  function f() {};
  f.prototype = p;
  return new f;
};

function generateSecondMenu()
{
  $.getJSON('/client/js/menuItems.json', function(a)
  {
    var data,
        b;

    for (var i = a.items.length - 1; i >= 0; i--)
    {
      data = 
      {
        'url': a.items[i]['url'],
        'name': a.items[i]['name']
      };

      if (a.items[i]['url'] == getCurrentPage()) 
      {
        $('.content').prepend('<h2>' + a.items[i]['name'] + '</h2>');

        if (a.items[i]['menu'])
        {
          for (var n = a.items[i]['menu'].length - 1; n >= 0; n--)
          {
            b = 
            {
              'parent': a.items[i]['url'],

              'url': a.items[i]['menu'][n]['url'],
              'name': a.items[i]['menu'][n]['name']
            };

            $('h2').after(compileText(templates['secondMenuPart'], b) + '<br>');
          };
        }; // O
      };  //   /
    };   // O
    Parser.setTitle();
  });
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

      log('Имя/фамилия юзера ВК с id ' + data.response[0]['uid'] + ': ' + data.response[0]['first_name'] + ' ' + data.response[0]['last_name']);
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