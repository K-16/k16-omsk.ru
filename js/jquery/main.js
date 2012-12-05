$(document).ready(function()
{

 $('#logo').click(function()      {$('title').text('Типографика | К16'); $.scrollTo(0, 500);});
 
 $('.control-1').click(function() {$('title').text('Типографика | К16'); $.scrollTo('#panel-1', 500, {axis:'y'});});
 $('.control-2').click(function() {$('title').text('Секстант | К16'); $.scrollTo('#panel-2', 500, {axis:'y'});});
 $('.control-3').click(function() {$('title').text('Конфликт | К16'); $.scrollTo('#panel-3', 500, {axis:'y'});});
 $('.control-4').click(function() {$('title').text('Поясность | К16'); $.scrollTo('#panel-4', 500, {axis:'y'});});
 $('.control-5').click(function() {$('title').text('Галерея | К16'); $.scrollTo('#panel-5', 500, {axis:'y'});});
 
 $('#fpc').click(function() {$.scrollTo('#fp', 500, {axis:'x'});});
 $('#vpc').click(function() {$.scrollTo('#vp', 500, {axis:'x'});});

 $('#gc-1').click(function() {$.scrollTo('#g-1', 500, {axis:'x'});});
 $('#gc-2').click(function() {$.scrollTo('#g-2', 500, {axis:'x'});});
 $('#gc-3').click(function() {$.scrollTo('#g-3', 500, {axis:'x'});});
 
 $('.gback').click(function() {$.scrollTo(0, 500, {axis:'x'});});
 
 $('#fback').click(function() {$.scrollTo('#f', 500, {axis:'x'});});
 
 
  
 $('.g').fotorama();
 
//Hide menu for button "Back" in galleries
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
  preload: 1
}
 

