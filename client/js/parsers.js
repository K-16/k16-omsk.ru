/*
 * 
 * parsers.js
 * =========
 * Парсеры
 *  - insertTag(). Вставка различных тегов при загрузке страницы.
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
        var author = $(this).attr('data-author');
        $(this).after('<em class="author italic">' + author + '</em>');
        console.log('[K16] ' + this + ' : ' + author);
      });
    });
  })()
};