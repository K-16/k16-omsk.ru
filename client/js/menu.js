/*
 * 
 * menu.js
 * ========
 * Генерация основного меню уровня.
 *
*/

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

  Parser.convertLinksToAjax();
  Parser.setMenuItemActive();
});