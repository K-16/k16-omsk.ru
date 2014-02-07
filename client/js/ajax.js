function nav(way)
{
  var page,
      a = way.split('/');

  if (way == getCurrentPage()) return;

  if (!way)
  {
    page = TEXT_URL + 'main/main.html';
  }
  else if (a[1])
  {
    page = TEXT_URL + a[0] + '/' + a[1] + '.html';
  }
  else
  {
    page = TEXT_URL + way + '/' + way + '.html';
  };

  $('.content').load(page, function()
  {
    generateSecondMenu();
    history.pushState(null, null, way);
    loadScripts();
    Parser.init(); // починка виджета//////////////////////////////////////////////////////
///////////////////// Убрать парсер ajax'a и цеплять событие click по ссылкам, а там нужный nav. В чём проблема?
    log('Загрузил страницу: ' + way);
  });
};