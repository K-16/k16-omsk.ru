/*
 * 
 * elements.js
 * =========
 * Поведение элементов
 *  - author(). При наведении на лицо автора выезжает его имя.
 *  - secondMenu(). Выводит все пункты меню второго уровня.
 *  - init(). Активирует все элементы.
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

    $('h2').mouseenter(function() {$('.menu-2').show(speed).slideDown(speed)});
    $('h2').mouseleave(function() {$('.menu-2').hide(speed).slideUp(speed)});
  },

  init: function()
  {
    this.author();
    this.secondMenu();

    log('Элементы инициализированы');
  }
};