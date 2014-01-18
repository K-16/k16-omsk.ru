/*
 * 
 * parsers.js
 * =========
 * Парсеры
 *  - createQuoteAuthor(). Обработка и вставка авторов цитат и их лиц.
 *  - convertLinksToAjax(). Конвертирует ссылки для навигации по сайту (на Ajax'е).
 *  - setMenuItemActive(). Устанавливает активный пункт меню, в зависимости от адреса.
 *  - setTitle(). Устанавливает title страницы.
 *  - init(). Активирует все парсеры.
 *
*/

var Parser = 
{
  createQuoteAuthor: function()
  {
    $('cite, blockquote, q').each(function(i)
    {
      var author    = $(this).attr('data-author'),
          authorImg = $(this).attr('data-author-img');

      var result;

      if (authorImg) 
      {
        result = '<em class="author italic">' + author + '<img src="../client/img/author/' + authorImg + '.png">' + '</em>';
      } 
      else {
        result = '<em class="author italic">' + author + '</em>';
      };

      $(this).after(result);
      
      log('<' + this.nodeName.toLowerCase() + '>: ' + author);
    });
  },
  
  convertLinksToAjax: function()
  {
    $('a').each(function(i)
    {
      var link     = $(this).attr('href'),
          template = 4;

      if (link && !link.match(regExp['link'])) 
      {
        $(this).removeAttr('href').attr('onclick', 'nav(\'' + link.substr(template) + '\');');

        log('<' + this.nodeName.toLowerCase() + '> attr href: convert \'' + link + '\' to \'' + link.substr(template) + '\'');        
      };
    });
  },

  setMenuItemActive: function()
  {
    $('.menu .item').each(function(i)
    {
      var link = $(this).attr('onclick');

      var charBefore = 5,
          charAfter  = 3;

      link = link.substr(charBefore);
      link = link.substr(0, link.length - charAfter);

      if (link == getCurrentPage()) 
      {
        $(this).addClass('active');

        log('Menu item \'' + link + '\' state: active');
      }
      else {
        $(this).removeClass('active');      
      };
    });
  },

  setTitle: function() 
  {
    $('title').text($('h2').html() + ' | К16');

    log('Replace page\'s title on: ' + $('h2').html());
  },

  init: function()
  {
    this.createQuoteAuthor();
    this.convertLinksToAjax();
    this.setMenuItemActive();
    this.setTitle();
  }
};