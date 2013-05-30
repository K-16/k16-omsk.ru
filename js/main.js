$(document).ready(function()
{

//2120394803767527873
/*function handleResponse(response) 
{
  document.getElementById("news").innerHTML += "<h1>" + response.title + "</h1>" + response.content;
}*/

// Динамическое добавление

//  $('.panel + *').prepend('<DIV class="content"></DIV>'); 
  $('.panel').append('<DIV class="content"></DIV>'); 
  $('.u, .m, .l, .s').append('<DIV class="contentNoMenu"></DIV>'); 

// Объявление кнопок "Назад"

  $('#gback, .back').click(function() {$.scrollTo(0, 500, {axis:'x'});});
   
  $('.dback').click(function() {$.scrollTo('#l-4', 500, {axis:'x'});});
   
// Объявление галерей

  $('.g').fotorama();

// Выпадающее меню

  $('.down').hide();

  $('.downHover').mouseenter(function() {$('.down').slideDown('fast').show('fast');});
  $('.down').mouseleave(function()      {$('.down').slideUp('fast').hide('fast');});

// Вращение смайлика

  $('#smile').mouseenter(function() {$('#smile').css(beginRotate);});
  $('#smile').mouseleave(function() {$('#smile').css(endRotate);});  
  
  var beginRotate = 
  {
    '-webkit-transform' : 'rotate(36000deg)',
    '-moz-transform' : 'rotate(36000deg)',
    '-ms-transform' : 'rotate(36000deg)',
    '-o-transform' : 'rotate(36000deg)',
    'transform' : 'rotate(36000deg)'
  }

  var endRotate = 
  {
    '-webkit-transform' : 'rotate(-36000deg)',
    '-moz-transform' : 'rotate(-36000deg)',
    '-ms-transform' : 'rotate(-36000deg)',
    '-o-transform' : 'rotate(-36000deg)',
    'transform' : 'rotate(-36000deg)'
  }

/* for (var i = 1; i < 13; i++)
 {
   var galleryI = '#gp-' + i;
   var galleryClickI = '#gpc-' + i;
   $(galleryClickI).click(function() {$.scrollTo(galleryI, 500, {axis:'x'});});  
 }
*/

// Делаем плавную анимацию у ряда элементов (убираем аттрибут href)
// Проблема: не можем кликать средней кнопкой.

  $('.gpa, .back, #gback, .fback, .ctrl, #goToTop, .down A, .dback').removeAttr('href');
 
// Делаем разметку для двух столбиков в превью галерей

  $('.gp > H2').after('<DIV class="columnGallery">');

  for (var i = 1; i < 13; i++)
  {
   gp = '#gp-' + i;
//   alert($(gp + '> .gpa').size());
  }


// Скрываем кнопку "Назад", в галереях показываем

  $(window).scroll(function () 
  {
	  if ($(this).scrollLeft() > 500) 
    {
	    $('#left').fadeOut(0);
	  } 
    else 
    {
	    $('#left').fadeIn(0);
	  }
	});  

});

// Стандартные настройки Фоторамы

fotoramaDefaults = 
{
  fullscreen: true,
  preload: 1,
}