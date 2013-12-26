function nav(way)
{
  var result = 'to=' + way;
  var state = '?to=' + way;
  
  var template = 4;

  var animationSpeed = 'fast';

//  $('.content').css('opacity', '0.5');
//  $('.load').css('display', 'block');

  $.ajax(
  {
    type: 'GET',
    cache: false,
    url: 'ajax.php',
    data: result,
    dataType: 'html',
    success: function(msg)
    {
      if (parseInt(msg) != 0)
      {
        $('.content').html(msg);
        history.pushState(null, null, state);
        Parser.init();

//        $('.content').css('opacity', '1');
//        $('.load').css('display', 'none');
        
        log('[K16] Ajax request to ' + state + ' : success');
      }
      else {
        log('[K16] Ajax request to : error');
      }
    }
  });
}