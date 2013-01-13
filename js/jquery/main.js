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
 
 $('#gback, .back').click(function() {$.scrollTo(0, 500, {axis:'x'});});
 
 $('.dback').click(function() {$.scrollTo('#l-4', 500, {axis:'x'});});
  
 $('.g').fotorama();


// Dropdown

 $('.down').hide();

 $('.downHover').mouseenter(function() {$('.down').slideDown('fast').show('fast');});
 $('.down').mouseleave(function()      {$('.down').slideUp('fast').hide('fast');});

// Dropdown array

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


// Gallery preview array

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

// Smoothly animate array

 $('.gpa, .back, #gback, .fback, .ctrl, #gototop, .down A, .dback').removeAttr('href');
 
//Hide menu for button 'Back' in galleries

 $(function () 
 {
	$(window).scroll(function () 
  {
	 if ($(this).scrollLeft() > 500 ) 
   {
		$('#left').fadeOut(0);
	 } 
   else 
    {
		 $('#left').fadeIn(0);
		}
	});  
 });

});


fotoramaDefaults = 
{
  fullscreen: true,
  preload: 1,
}