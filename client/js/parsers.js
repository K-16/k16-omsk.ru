/*
 * 
 * parsers.js
 * =========
 * Парсеры
 *  - author. Обработка и вставка авторов цитат и их лиц.
 *
*/

'use strict'; // Включаем строгий режим

var Parser = 
{
  author: (function()
  {
    $(function()
    {
      $('cite, blockquote').each(function(i)
      {
        var author = $(this).attr('data-author'),
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
        
        console.log('[K16] ' + this + ' : ' + author);
      });
    });
  })()
};