/*
 * 
 * main.js
 * =======
 *  - Файл инициализации
 *
*/

'use strict';

var startTime = (new Date()).getTime(),
    stopTime;

$(function() 
{
  generateFirstMenu();
  loadPage(getCurrentPage(), false);
});