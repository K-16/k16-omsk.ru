/*
 * 
 * parsers.js
 * =========
 * Парсеры
 *  - Конструктор
 *  - Деструктор
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

/*
$(function()
{

  (function onLoadParser() 
  {
    $('*').each(function(index)
    {
      var author = $(this).attr('data-author');
      var panel = $(this.panel);
      if (author) insert('<em class="author italic">' + author + '</em>', this, 'after'); 
//      insert('<div class="content"></div>', panel, 'append');
    });
  })();

});
*/