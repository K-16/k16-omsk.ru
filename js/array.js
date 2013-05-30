$(document).ready(function()
{

// Массив меню

  $('#goToTop').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-1').css(ctrlCheck); $('title').text('Главная | К16'); $.scrollTo(0, 500);});
   
  $('#ctrl-1').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-1').css(ctrlCheck); $.scrollTo('#panel-1', 500, {axis:'y'}); $('title').text('Главная | К16');});
  $('#ctrl-2').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-2').css(ctrlCheck); $.scrollTo('#panel-2', 500, {axis:'y'}); $('title').text('История | К16');});
  $('#ctrl-3').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-3').css(ctrlCheck); $.scrollTo('#panel-3', 500, {axis:'y'}); $('title').text('Учёба | К16');});
  $('#ctrl-4').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-4').css(ctrlCheck); $.scrollTo('#panel-4', 500, {axis:'y'}); $('title').text('Мероприятия | К16');});
  $('#ctrl-5').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-5').css(ctrlCheck); $.scrollTo('#panel-5', 500, {axis:'y'}); $('title').text('Люди | К16');});
  $('#ctrl-6').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-6').css(ctrlCheck); $.scrollTo('#panel-6', 500, {axis:'y'}); $('title').text('Ссылки | К16');});
  $('#ctrl-7').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-7').css(ctrlCheck); $.scrollTo('#panel-7', 500, {axis:'y'}); $('title').text('Фото | К16');});
   
  var ctrlCheck = 
  {
    'background-color' : '#FFFFFF',
    'color' : '#1a4780',
    'text-shadow' : '0px 0px 1px #1a4780',
  }

  var ctrlUnCheck =
  {
    'background-color' : '#4682b4',
    'color' : '#fff',
    'text-shadow' : '0px 0px 1px #fff',
  }

  $('#ctrl-1').css(ctrlCheck);

// Массив выпадающего меню

  $('#uc-1').click(function() {$.scrollTo('#u-1', 500, {axis:'x'});});
  $('#uc-2').click(function() {$.scrollTo('#u-2', 500, {axis:'x'});});
  $('#uc-3').click(function() {$.scrollTo('#u-3', 500, {axis:'x'});});
  $('#uc-4').click(function() {$.scrollTo('#u-4', 500, {axis:'x'});});

  $('#mc-1').click(function() {$.scrollTo('#m-1', 500, {axis:'x'});});
  $('#mc-2').click(function() {$.scrollTo('#m-2', 500, {axis:'x'});});
  $('#mc-3').click(function() {$.scrollTo('#m-3', 500, {axis:'x'});});
  $('#mc-4').click(function() {$.scrollTo('#m-4', 500, {axis:'x'});});
  $('#mc-5').click(function() {$.scrollTo('#m-5', 500, {axis:'x'});});

  $('#lc-1').click(function() {$.scrollTo('#l-1', 500, {axis:'x'});});
  $('#lc-2').click(function() {$.scrollTo('#l-2', 500, {axis:'x'});});
  $('#lc-3').click(function() {$.scrollTo('#l-3', 500, {axis:'x'});});
  $('#lc-4').click(function() {$.scrollTo('#l-4', 500, {axis:'x'});});
 
 
  $('#ldc-1').click(function() {$.scrollTo('#ld-1', 500, {axis:'x'});});
  $('#ldc-2').click(function() {$.scrollTo('#ld-2', 500, {axis:'x'});});
  $('#ldc-3').click(function() {$.scrollTo('#ld-3', 500, {axis:'x'});});
  $('#ldc-4').click(function() {$.scrollTo('#ld-4', 500, {axis:'x'});});
  $('#ldc-5').click(function() {$.scrollTo('#ld-5', 500, {axis:'x'});});

// Массив с превью галерей

  $('#gpc-1').click(function() {$.scrollTo('#gp-1', 500, {axis:'x'});});
  $('#gpc-2').click(function() {$.scrollTo('#gp-2', 500, {axis:'x'});});
  $('#gpc-3').click(function() {$.scrollTo('#gp-3', 500, {axis:'x'});});
  $('#gpc-4').click(function() {$.scrollTo('#gp-4', 500, {axis:'x'});});
  $('#gpc-5').click(function() {$.scrollTo('#gp-5', 500, {axis:'x'});});
  $('#gpc-6').click(function() {$.scrollTo('#gp-6', 500, {axis:'x'});});
  $('#gpc-7').click(function() {$.scrollTo('#gp-7', 500, {axis:'x'});});
  $('#gpc-8').click(function() {$.scrollTo('#gp-8', 500, {axis:'x'});});
  $('#gpc-9').click(function() {$.scrollTo('#gp-9', 500, {axis:'x'});});
  $('#gpc-10').click(function() {$.scrollTo('#gp-10', 500, {axis:'x'});});
  $('#gpc-11').click(function() {$.scrollTo('#gp-11', 500, {axis:'x'});});
  $('#gpc-12').click(function() {$.scrollTo('#gp-12', 500, {axis:'x'});});

// Массив с текстом

  $('#panel-1 > .content').load('../txt/01/0101.htm');

  $('#panel-2 > .content').load('../txt/02/0201.htm'); 

  $('#panel-3 > .content').load('../txt/03/0301.htm');
  $('#u-1 > .contentNoMenu').load('../txt/03/0302.htm');
  $('#u-2 > .contentNoMenu').load('../txt/03/0303.htm');
  $('#u-3 > .contentNoMenu').load('../txt/03/0304.htm');
  $('#u-4 > .contentNoMenu').load('../txt/03/0305.htm');


});