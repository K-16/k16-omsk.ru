/*
 *
 * debug.js
 * ========
 * Функции дебага.
 *  - debug(). Выполняет код, только если переменная config['debug'] активна.
 *  - log(). Выводит инфу в лог, только если переменная config['debug'] активна. Так же выводит время, прошедшее со времение загрузки страницы.
 *
*/

function debug(code) 
{
  if (config['debug'] == true && code) 
  {
    code();
  }
  else {
    return;
  };
}

function log(text)
{
  if (config['debug'] == true) 
  {
    stopTime = (new Date()).getTime() - startTime;

    switch (config['debugTime'])
    {
      case 'ms':
        stopTime = '[' + stopTime + ' ms] ';
        break;
      case 's':
        stopTime = '[' + stopTime / 1000 + ' s] ';
        break;
    };

    console.log('[K16] ' + stopTime + text);
  }
  else {
    return;
  };
}