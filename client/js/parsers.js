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

Parser = function()
{
  this.afterLoad = $(function(code)
  {
    $('*').each(function(i)
    {
      code;
    });
  });
};

insertAuthor = new Parser;
insertAuthor.afterLoad = Parser.afterLoad(function() 
{
  var author = $(this).attr('data-author');
  if (author) insert('<em class="author italic">' + author + '</em>', this, 'after'); 
});

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