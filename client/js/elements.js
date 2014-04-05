/*
 * 
 * elements.js
 * ===========
 * Поведение элементов
 *  - author(). Выводит имя автора при наведении на лицо
 *  - secondMenu(). Выводит все пункты меню второго уровня
 *  - newsInfo(). Выводит дополнительную информацию о новости
 *  - init(). Активирует все элементы
 *
*/

var elements = 
{
  author: function()
  {
    $('.author img').hover(function()
    {
      $('.author span').css(
      {
        'margin-right': '0',
        'opacity': '1'
      });
    },
    function()
    {
      $('.author span').css(
      {
        'margin-right': '-100px',
        'opacity': '0'
      });
    });
  },

  secondMenu: function()
  {
    var speed = 'fast';

    $('.menu-2').hide();

    if ($('.menu-2').html())
    {
      $('h2 > span').mouseenter(function()
      {
        $('.menu-2').slideDown(speed).show(speed);
      });

      $('.menu-2').mouseleave(function()
      {
        $('.menu-2').slideUp(speed).hide(speed);
      });
    }
    else
    {
      $('h2 > span').addClass('alone');

      return;
    };
  },

  newsInfo: function()
  {
    var speed = 'fast';

    $('#news > article > .info').hide();

    $('#news > article').mouseenter(function()
    {
      $(this).children('.info').slideDown(speed).show(speed);
    });

    $('#news > article').mouseleave(function()
    {
      $(this).children('.info').slideUp(speed).hide(speed);
    });
  },

  init: function()
  {
    this.author();
    this.secondMenu();
  }
};