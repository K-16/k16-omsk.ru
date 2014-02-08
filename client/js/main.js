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
  generateFirstMenu();
  loadPage(getCurrentPage(), false);
});