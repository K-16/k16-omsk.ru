/*
 * 
 * start.js
 * =======
 *  - Файл инициализации
 *
*/

'use strict';

$(function()
{
  menu.generate.first();
  loadPage(getCurrentPage(), false);
});