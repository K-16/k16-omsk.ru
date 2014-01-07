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
    console.log('[K16] ' + text);
  }
  else {
    return;
  };
}