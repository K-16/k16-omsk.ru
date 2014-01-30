$.getJSON('/client/js/menuItems.json', function(data)
{
  for (var i = data.items.length - 1; i >= 0; i--)
  {
    $('.menu .logo').after('<a class="item" href="?page=' + data.items[i]['url'] + '">' + data.items[i]['name'] + '</a>');
  };

  Parser.convertLinksToAjax();
  Parser.setMenuItemActive();
});