/*
 * 
 * start.js
 * =======
 *  - Файл инициализации
 *
*/

'use strict';

var startTime = (new Date()).getTime(),
    stopTime;

$(function() 
{
  menu.generate.first();
  loadPage(getCurrentPage(), false);
});