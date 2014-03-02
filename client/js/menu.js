/*
 * 
 * menu.js
 * ========
 * Генерация основного меню.
 *
*/

var Menu =
{
  Generate:
  {
    First: function()
    {
      $.getJSON('/client/js/menuItems.json', function(a)
      {
        var data;

        for (var i = a.items.length - 1; i >= 0; i--)
        {
          $('.menu .logo').after(compileText(templates['firstMenuPart'],
          {
            'url': a.items[i]['url'],
            'name': a.items[i]['name']
          }));
        };

        Parser.convertLinksToAjax();
        Parser.setMenuItemActive();
      });
    },

    Second: function()
    {
      $.getJSON('/client/js/menuItems.json', function(a) ///////////////////////// Проверка на существование подменю, а там второй цикл
      {
        for (var i = a.items.length - 1; i >= 0; i--)
        {
          if (a.items[i]['url'] == getCurrentPage()) 
          {
            $('.content').prepend('<h2>' + a.items[i]['name'] + '</h2>');

            Parser.setTitle();

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
            };
          }
        };

        Parser.convertLinksToAjax();
        Elements.secondMenu();
      });
    }
  }
};