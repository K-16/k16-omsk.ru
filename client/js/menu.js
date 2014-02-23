/*
 * 
 * menu.js
 * ========
 * Генерация основного меню.
 *
*/

function generateFirstMenu()
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

      $('.menu .logo').after(compileText(templates['firstMenuPart'], data));
    };

    parser.convertLinksToAjax();
    parser.setMenuItemActive();
  });
};

function generateSecondMenu()
{
  $.getJSON('/client/js/menuItems.json', function(a)
  {
    var data;

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

        parser.setTitle();

        if (a.items[i]['menu'])
        {
          $('h2').append(templates['secondMenuContainer']);

          for (var n = a.items[i]['menu'].length - 1; n >= 0; n--)
          {
            $('.menu-2').append(compileText(templates['secondMenuPart'],
            {
              'parent': a.items[i]['url'],
              'url': a.items[i]['menu'][n]['url'],
              'name': a.items[i]['menu'][n]['name']
            }));
          };
        }; // O
      };  //   /
    };   // O

    parser.convertLinksToAjax();
    elements.secondMenu();
  });
};