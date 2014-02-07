/*
 * 
 * main.js
 * =======
 *  - Файл инициализации
 *
*/

'use strict';

var CLIENT_URL = '../client/',
    TEXT_URL   = CLIENT_URL + 'txt/',
    IMG_URL    = CLIENT_URL + 'img/',
    JS_URL     = CLIENT_URL + 'js/',
    STYLE_URL  = CLIENT_URL + 'style/',
    CSS_URL    = CLIENT_URL + STYLE_URL + 'css/',
    LESS_URL   = CLIENT_URL + STYLE_URL + 'less/';

var startTime = (new Date()).getTime(),
    stopTime;

$(function() 
{
  var url  = getCurrentPage(),
      a    = url.split('/'),
      page;

  if (!url)
  {
    page = TEXT_URL + 'main/main.html';
  }
  else if (a[1])
  {
    page = TEXT_URL + a[0] + '/' + a[1] + '.html';
  }
  else
  {
    page = TEXT_URL + url + '/' + url + '.html';
  };

  $('.content').load(page, function()
  {
    generateSecondMenu();
    loadScripts();    
    Parser.init();
  });
});