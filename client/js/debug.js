/*
 * 
 * debug.js
 * ========
 * Функции для дебага и разработки
 *  - debugLog(message, type). Более короткая и удобная функция для записи в консоль.
 *
*/

function debugLog(message, type)
{
  var message = '[Debug] ' + message;

  switch (type)
  {
  	case 'info':
      console.info(message);
      break;
    case 'warn':
      console.warn(message);
      break;
    case 'error':
      console.error(message);
      break;
    default:
      console.log(message);
      break;    
  };
}