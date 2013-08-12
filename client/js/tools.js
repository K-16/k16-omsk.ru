/*
 * 
 * tools.js
 * =========
 * Различные функции, не вписывающиеся в другие файлы
 *  - insert(). Вставка содержимого.
 *
*/

function insert(content, object, type)
{
  switch (type) // prepend и append заменяют элемент
  {
    case 'prepend':
      $(object).prepend(content);
      break;        
    case 'append':
      $(object).append(content);
      break;
    case 'before':
      $(object).before(content);
      break;
    case 'after':
      $(object).after(content);
      break;
  }
};
