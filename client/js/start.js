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
  Menu.Generate.First();
  loadPage(getCurrentPage(), false);
});