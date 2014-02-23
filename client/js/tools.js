/*
 * 
 * tools.js
 * ========
 * Различные вспомогательные (и не только) штуки
 *  - regExp. Массив регулярных выражений
 *  - nav(way). Краткий ajax вариант функции loadPage()
 *  - loadPage(way, ajax). Загружает и выводит в блок .content нужную страницу
 *  - loadScripts(). Загружает скрипты в зависимости от страницы
 *  - compileText(source, data). Возвращает скомпилированный шаблонизатором текст
 *  - getCurrentPage(). Возвращает текущую страницу
 *  - inherit(p). Системная функция для работы необязательных аргументов
 *  - generateSecondMenu(). Генерирует меню второго уровня
 *  - getVkUserNameById(id, to). Возвращает имя юзера ВК по id
 *
*/

var regExp = 
{
  year: /\|\s[0-9]+$/i,
  word: /[^A-Za-zА-Яа-я]+$/i,
  link: /((http|https|mailto):)/i,
};

function nav(way)
{
  loadPage(way, true);
};

function loadPage(way, ajax)
{
  var page,
      a = way.split('/');

  if (way == getCurrentPage() && ajax) return;

  if (!way)
  {
    page = TEXT_URL + 'main/main.html';
  }
  else if (a[1])
  {
    page = TEXT_URL + a[0] + '/' + a[1] + '.html';
  }
  else
  {
    page = TEXT_URL + way + '/' + way + '.html';
  };

  $('.content').load(page, function()
  {
    generateSecondMenu();

    if (ajax) history.pushState(null, null, way);
    
    loadScripts();
    
    parser.init();
    elements.init();

    log('Загрузил страницу: ' + way);
  });
};

function loadScripts()
{
  var scripts;

  switch (getCurrentPage())
  {
    case 'news':
      scripts = ['pages/news'];
      break;
    case 'contacts':
      scripts = ['pages/map', 'pages/widgets'];
      break;
    case 'photo':
      $('.content').append(compileText(templates['css'], {'src': 'lib/fotorama-4.4.9.css'}))
      scripts = ['lib/fotorama-4.4.9', 'pages/gallery'];
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