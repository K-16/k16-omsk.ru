$(document).ready(function()
{

 $('#logo').click(function()      {$.scrollTo(0, 500);});
 
 $('.control-1').click(function() {$.scrollTo('#panel-1', 500, {axis:'y'});});
// {$('title').text('...');}
 $('.control-2').click(function() {$.scrollTo('#panel-2', 500, {axis:'y'});});
 $('.control-3').click(function() {$.scrollTo('#panel-3', 500, {axis:'y'});});
 $('.control-4').click(function() {$.scrollTo('#panel-4', 500, {axis:'y'});});
 $('.control-5').click(function() {$.scrollTo('#panel-5', 500, {axis:'y'});});
 
 $('#fpc').click(function() {$.scrollTo('#fp', 500, {axis:'x'});});
 $('#vpc').click(function() {$.scrollTo('#vp', 500, {axis:'x'});});

 $('#gc-1').click(function() {$.scrollTo('#g-1', 500, {axis:'x'});});
 
 $('#fback').click(function() {$.scrollTo('#f', 500, {axis:'x'});});

 
  
 $('.g').fotorama();
 
});


 fotoramaDefaults = 
 {
    width: '100%',
    minHeight: 400,
    maxHeight: 900
 }
 
$(document).ready(function()
{
//	$('#left').hide();
		$(function () 
    {
			$(window).scroll(function () 
      {
				if ($(this).scrollLeft() > 500 ) 
        {
					$('#left').fadeOut('fast');
				} 
        else 
        {
					$('#left').fadeIn('fast');
				}
		});  
    });
});
