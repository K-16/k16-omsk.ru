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
 *  - ajax(request). Возвращает json с полученный от API ВК
 *
*/

var regExp = 
{
  'externalLink': /((http|https|mailto):)/i,
  'funcNavValue': /'[a-z]+'/i,
  'newsVKProfileLink': /\[id(\d+)\|(\W+)\s(\W+)\]/g, /** @example [id000|Name Surname] */
  'textExternalLink': /((http|https):\/\/[\w\d\/.?=%\-_&;]+)/g // ; — O_o
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

  if (ajax) history.pushState(null, null, way);

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

  $('.content').load(page, function(response, status, xhr)
  {
    if (response.match(/\<base href=\"\/\"\>/))
    {
      loadErrorPage();

      return;
    };

    menu.generate.second();
    
    loadScripts();
    
    parser.init();
    elements.init();

    log('Загрузил страницу: ' + way);
  });
};

function loadErrorPage()
{
  $('.content').load(TEXT_URL + 'error.html', function()
  {    
    parser.convertLinksToAjax();

    $('title').text('Ошибка | ' + config['siteName']);

    log('Загрузил страницу с ошибкой :(');
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

function unique(arr)
{
  var obj = {};

  for (var i = 0; i < arr.length; i++)
  {
    var str = arr[i];

    obj[str] = true;
  }
 
  return Object.keys(obj);
};

function sortAlbumMethod(method)
{
  switch (method)
  {
    case 'year':
      return 1; // я не поленился 2-а раза написать 'return'
    case 'name':
      return 0; // и тут тоже
  };
};

function ajaxVK(request, async)
{
  $.ajax(
  {
    async: async,
    url: SERVER_URL + 'ajaxVK.php?request=' + encodeURIComponent(request),
    dataType: 'json',
    success: function(data)
    {
      if (localStorage.getItem(request) == data) return;
      if (localStorage.getItem(request) != data && localStorage.getItem(request) != null) localStorage.removeItem(request);

      localStorage.setItem(request, JSON.stringify(data));
    }
  });
};

function getVKName(id)
{
  var request = 'users.get?user_ids=' + id;
  ajaxVK(request, true);

  var json = JSON.parse(localStorage.getItem(request));

  return json.response[0]['first_name'] + ' ' + json.response[0]['last_name']
};

/**
  @deprecated
 */

function convertTextToLinks(str) 
{
  var reg = str.match(regExp['externalLink']);

  for (key in reg)
  {
    str = str.replace(reg[key],'<a href="' + reg[key] + '" target="_blank">' + reg[key] + '</a>')
  }

  return str;  
};