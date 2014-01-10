/*
 *
 * debug.js
 * ========
 * Функции дебага
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