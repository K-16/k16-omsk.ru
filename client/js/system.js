/*
 * 
 * system.js
 * ========
 * Основные системные функции
 *
*/

function nav(url)
{
  loadPage(url, true);
};

function loadPage(url, ajax)
{
  var m = menu.get(),
      page;

  if (url == getCurrentPage() && ajax) return;

  m.success(function(a)
  {
    for (var i in a.items)
    {
      var b = a.items[i];

      if (b['url'] == url.split('/')[0])
      {
        if (b['menu'])
        {
          if (url.split('/')[1])
          {
            for (var n in b['menu'])
            {
              if (b['menu'][n]['url'] == url.split('/')[1])
              {
                page = b['url'] + '/' + b['menu'][n]['url'] + '.html';
              };
            };
          }
          else
          {
            page = b['url'] + '/' + b['url'] + '.html';
          };
        }
        else if (!url.split('/')[1])
        {
          page = b['url'] + '.html';
        };
      };
    };

    if (url == '') page = 'main.html';

    if (!page)
    {
      loadErrorPage();

      return;
    };

    $('.content').load(TEXT_URL + page, function()
    {
      if (ajax) history.pushState(null, null, url);

      menu.generate.second();
      
      loadScripts();
      
      parser.init();
      elements.init();

      log('Загрузил страницу: ' + url);
    });
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