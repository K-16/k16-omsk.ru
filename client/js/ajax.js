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
    success: function(data)
    {
      if (parseInt(data) != 0)
      {
        $('.content').html(data);
        history.pushState(null, null, state);
        Parser.init();

//        $('.content').css('opacity', '1');
//        $('.load').css('display', 'none');
        
        log('Ajax request to ' + state + ' : success');
      }
      else {
        log('Ajax request to : error');
      }
    }
  });
}