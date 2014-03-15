$.fn.tabs = function()
{
  $(this).each(function(idx, el)
  {
    var $this = $(this);

    $this.delegate('nav a', 'click', function(event)
    {
      var index = $this.find('nav a').index(event.target);

      $this.find('figure div').removeClass('active');
      var item = $this.find('figure div:eq(' + index + ')').addClass('active');

      $this.find('nav a').removeClass('active');
      $this.find('nav a:eq(' + index + ')').addClass('active');
    });

    $this.find('figure div:eq(0)').addClass('active');
    $this.find('nav a:eq(0)').addClass('active');
  });
};