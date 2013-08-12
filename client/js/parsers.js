/*
 * 
 * parsers.js
 * =========
 * Различные парсеры
 *  - insertTag(). Вставка различных тегов при загрузке страницы.
 *
*/

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