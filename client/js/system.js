/*
 * 
 * system.js
 * ========
 * Основные системные функции
 *
*/

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
    parser.convertLinks();

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