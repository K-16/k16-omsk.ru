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
  if (config['debug']['enable'] == true && code) 
  {
    code();
  }
  else
  {
    return;
  };
}

function log(text)
{
  if (config['debug']['enable'] == true) 
  {
    stopTime = (new Date()).getTime() - startTime;

    switch (config['debug']['time'])
    {
      case 'ms':
        stopTime = '[' + stopTime + ' ms] ';
        break;
      case 's':
        stopTime = '[' + stopTime / 1000 + ' s] ';
        break;
    };

    console.log('[' + config['siteName'] + '] ' + stopTime + text);
  }
  else
  {
    return;
  };
}