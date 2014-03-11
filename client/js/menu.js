/*
 * 
 * menu.js
 * ========
 * Класс меню.
 *  - Get(). Возвращает меню.
 *  - Generate.First(). Генерирует меню первого уровня.
 *  - Generate.Second(). Генерирует меню второго уровня.
 *
*/

var Menu =
{
  Get: function()
  {
    return $.getJSON('menu.json');
  },
  Generate:
  {
    First: function()
    {
      var menu = Menu.Get();

      menu.success(function(a)
      {
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
      var menu = Menu.Get();

      menu.success(function(a)
      {
        for (var i = a.items.length - 1; i >= 0; i--)
        {
          if (a.items[i]['url'] == getCurrentPage().split('/')[0] && a.items[i]['menu'])
          {
            for (var n = a.items[i]['menu'].length - 1; n >= 0; n--)
            {
              if (n == a.items[i]['menu'].length - 1)
              {
                $('.content').prepend('<h2>' + a.items[i]['name'] + '</h2>');
                $('h2').append(templates['secondMenuContainer']);

                Parser.setTitle();
              };

              if (a.items[i]['url'] + '/' + a.items[i]['menu'][n]['url'] == getCurrentPage())
              {
                $('h2 > span').text(a.items[i]['menu'][n]['name']);

                Parser.setTitle();
              }
              else
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
          else if (a.items[i]['url'] == getCurrentPage())
          {
            $('.content').prepend('<h2>' + a.items[i]['name'] + '</h2>');

            Parser.setTitle();
          };
        };

        Parser.convertLinksToAjax();
        Elements.secondMenu();
      });
    }
  }
};