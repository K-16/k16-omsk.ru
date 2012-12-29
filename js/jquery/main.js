$(document).ready(function()
{

// Menu array

 $('#gototop').click(function()   {$('.ctrl').css(ctrlUnCheck); $('#ctrl-1').css(ctrlCheck); $('title').text('Главная | К16'); $.scrollTo(0, 500);});
 
 $('#ctrl-1').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-1').css(ctrlCheck); $.scrollTo('#panel-1', 500, {axis:'y'}); $('title').text('Главная | К16');});
 $('#ctrl-2').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-2').css(ctrlCheck); $.scrollTo('#panel-2', 500, {axis:'y'}); $('title').text('История | К16');});
 $('#ctrl-3').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-3').css(ctrlCheck); $.scrollTo('#panel-3', 500, {axis:'y'}); $('title').text('Учёба | К16');});
 $('#ctrl-4').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-4').css(ctrlCheck); $.scrollTo('#panel-4', 500, {axis:'y'}); $('title').text('Мероприятия | К16');});
 $('#ctrl-5').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-5').css(ctrlCheck); $.scrollTo('#panel-5', 500, {axis:'y'}); $('title').text('Люди | К16');});
 $('#ctrl-6').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-6').css(ctrlCheck); $.scrollTo('#panel-6', 500, {axis:'y'}); $('title').text('Ссылки | К16');});
 $('#ctrl-7').click(function() {$('.ctrl').css(ctrlUnCheck); $('#ctrl-7').css(ctrlCheck); $.scrollTo('#panel-7', 500, {axis:'y'}); $('title').text('Галерея | К16');});
 
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

 $('#fpc').click(function() {$.scrollTo('#fp', 500, {axis:'x'});});
 $('#vpc').click(function() {$.scrollTo('#vp', 500, {axis:'x'});});
 
 $('.back').click(function() {$.scrollTo(0, 500, {axis:'x'});});
 
 $('#fback').click(function() {$.scrollTo('#f', 500, {axis:'x'});});
  
 $('.g').fotorama();


// Smoothly animate array

 $('.gpa, .back, #fback, .ctrl, #gototop').removeAttr('href');
 
//Hide menu for button 'Back' in galleries
 $(function () 
 {
	$(window).scroll(function () 
  {
	 if ($(this).scrollLeft() > 500 ) 
   {
		$('#left').fadeOut(1);
	 } 
   else 
    {
		 $('#left').fadeIn(1);
		}
	});  
 });

 
});


fotoramaDefaults = 
{
  fullscreen: true,
  preload: 1,
}