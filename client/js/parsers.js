/*
 * 
 * parsers.js
 * =========
 * Парсеры
 *  - createAuthor(). Обработка и вставка авторов цитат и их лиц.
 *  - setBoxEmbedWidth(). Установка заданного значения ширины у .box.embed'ов.
 *  - convertLinks(). Конвертирует ссылки для навигации по сайту (на Ajax'е).
 *  - setMenuItemActive(). Устанавливает активный пункт меню, в зависимости от адреса.
 *  - setTitle(). Устанавливает title страницы.
 *  - init(). Активирует все парсеры.
 *
*/

var parser =
{
  createAuthor: function()
  {
    $('cite, blockquote, q').each(function()
    {
      var author = $(this).attr('data-author'),
          img    = $(this).attr('data-img');

      var result;

      if (img) 
      {
        result = compileText(templates['quoteAuthorWithImg'], {'author': author, 'img': img});
      } 
      else
      {
        result = compileText(templates['quoteAuthorWithoutImg'], {'author': author});
      };

      $(this).after(result);
    });
  },

  quotes: function()
  {
    $('.quotes').each(function()
    {
      $(this).prepend('«').append('»');
    });
  },

  tags: function()
  {
    $('code.tag').each(function()
    {
      $(this).prepend('<').append('>');
    });
  },

  setBoxEmbedWidth: function()
  {
    $('.box.embed').each(function()
    {
      $(this).width($(this).attr('data-width'));
    });
  },
  
  convertLinks: function()
  {
    $('a').each(function()
    {
      var link     = $(this).attr('href'),
          template = 1;

      if (link && !link.match(regExp['externalLink'])) 
      {
        $(this).removeAttr('href').attr('onclick', 'nav(\'' + link.substr(template) + '\');');
      }
      else if (!$(this).attr('onclick'))
      {
        $(this).attr('target', '_blank');
      };
    });
  },

  setMenuItemActive: function()
  {
    $('.menu .item').each(function()
    {
      var link = $(this).attr('onclick');

      if (link == 'nav(\'\');')
      {
        link = '';
      }
      else
      {
        link = link.match(regExp['funcNavValue'])
                   .toString()
                   .substr(1)
                   .substring(-1, link.length - 8); // 8? Почему 8?  
      };

      if (link == getCurrentPage().split('/')[0])
      {
        $(this).addClass('active');

        log('Пункт меню \'' + link + '\' активирован');
      }
      else
      {
        $(this).removeClass('active');      
      };
    });
  },

  setTitle: function()
  {
    var m = menu.get(),
        name;

    m.success(function(a) 
    {
      for (var i = a.items.length - 1; i >= 0; i--)
      {
        if (a.items[i]['url'] == getCurrentPage().split('/')[0])
        {
          name = a.items[i]['name'];

          if (a.items[i]['menu'])
          {
            for (var b = a.items[i]['menu'].length - 1; b >= 0; b--)
            {
              if (a.items[i]['url'] + '/' + a.items[i]['menu'][b]['url'] == getCurrentPage())
              {
                name = a.items[i]['menu'][b]['name'] + ' | ' + a.items[i]['name'];
              };
            };
          };
        };
      };

      $('title').text(name + ' | ' + config['siteName']);

      log('Заменил <title> страницы на ' + name);
    });
  },

  newsText: function(text)
  {
    return text.replace(regExp['textExternalLink'], '<a href="$1">$1</a>')
               .replace(regExp['newsVKProfileLink'], '<a href="http://vk.com/id$1">$2 $3</a>');
  },

  init: function()
  {
    this.createAuthor();
    this.quotes();
    this.tags();
    this.setBoxEmbedWidth();
    this.convertLinks();
    this.setMenuItemActive();
    this.setTitle();

    log('Парсеры инициализированы');
  }
};