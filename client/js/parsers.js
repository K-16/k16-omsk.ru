/*
 * 
 * parsers.js
 * =========
 * Парсеры
 *  - createAuthor(). Обработка и вставка авторов цитат и их лиц.
 *  - setBoxEmbedWidth(). Установка заданного значения ширины у .box.embed'ов.
 *  - convertLinksToAjax(). Конвертирует ссылки для навигации по сайту (на Ajax'е).
 *  - setMenuItemActive(). Устанавливает активный пункт меню, в зависимости от адреса.
 *  - setTitle(). Устанавливает title страницы.
 *  - init(). Активирует все парсеры.
 *
*/

var Parser =
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
      else {
        result = compileText(templates['quoteAuthorWithoutImg'], {'author': author});
      };

      $(this).after(result);
      
      log('<' + this.nodeName.toLowerCase() + '>: ' + author);
    });
  },

  setBoxEmbedWidth: function()
  {
    $('.box.embed').each(function()
    {
      $(this).width($(this).attr('data-width'));
    });
  },
  
  convertLinksToAjax: function()
  {
    $('a').each(function(i)
    {
      var link     = $(this).attr('href'),
          template = 1;

      if (link && !link.match(regExp['externalLink'])) 
      {
        $(this).removeAttr('href').attr('onclick', 'nav(\'' + link.substr(template) + '\');');

        log('Cконвертировал аттрибут href у <' + this.nodeName.toLowerCase() + '> из \'' + link + '\' в \'' + link.substr(template) + '\'');        
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

      if (link == getCurrentPage())
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
    $('title').text($('h2').html() + ' | ' + config['siteName']);

    log('Заменил title страницы на ' + $('h2').html());
  },

  init: function()
  {
    this.createAuthor();
    this.setBoxEmbedWidth();
    this.convertLinksToAjax();
    this.setMenuItemActive();
    this.setTitle();

    log('Парсеры инициализированы');
  }
};