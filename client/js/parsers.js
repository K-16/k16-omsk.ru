/*
 * 
 * parsers.js
 * =========
 * Парсеры
 *  - author. Обработка и вставка авторов цитат и их лиц.
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
      
      log('[K16] <' + this.nodeName.toLowerCase() + '> : ' + author);
    });
  },
  
  convertLinksToAjax: function()
  {
    $('a').each(function(i)
    {
      var link     = $(this).attr('href'),
          template = 4;

      if (link) 
      {
        $(this).removeAttr('href').attr('onclick', 'nav(\'' + link.substr(template) + '\');');

        log('[K16] <' + this.nodeName.toLowerCase() + '> attr href : convert \'' + link + '\' to \'' + link.substr(template) + '\'');        
      };
    });
  },

  setMenuItemActive: function()
  {
    $('.menu .item').each(function(i)
    {
      var itemLink = $(this).attr('onclick'),
          pageLink = location.search; // После перевода на mod_rewrite исправить
      
      var itemLinkCharBefore = 5,
          itemLinkCharAfter  = 3,
          pageLinkCharBefore = 4;

      itemLink = itemLink.substr(itemLinkCharBefore);
      itemLink = itemLink.substr(0, itemLink.length - itemLinkCharAfter);
      
      pageLink = pageLink.substr(pageLinkCharBefore);

      if (itemLink == pageLink) 
      {
        $(this).addClass('active');

        log('[K16] Menu item \'' + itemLink + '\' state : active');
      }
      else {
        $(this).removeClass('active');      
      };
    });
  },

  init: function()
  {
    this.createQuoteAuthor();
    this.convertLinksToAjax();
    this.setMenuItemActive();
  }
};