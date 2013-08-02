/*
 * 
 * parser.js
 * =========
 * Различные парсеры
 *  - insertAuthorTag(). Преобразование автора из атрибута в тег. Вызывается при загрузке страницы
 *
*/

$(function()
{

  (function insertAuthorTag()
  {
    $('*').each(function(index)
    {
      var author = $(this).attr('data-author');
      if (author) 
      {
      	$(this).after('<em class="author italic">' + author + '</em>');
      };
    });
  })();

});