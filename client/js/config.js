/*
 *
 * config.js
 * =========
 * Конфигурационный файл.
 *
*/

var config = 
{
  'siteName': 'К16',
  'groupId': '-1088622',
  'defaultAdmin': 'Админ',
  
  'symbol':
  {
    'close': '×',
    'arrow': '→', // >
  },

  'debug':
  {
    'enable': true,
    'time': 'ms'
  },

  'color':
  {
    'black': '#000000',
    'white': '#ffffff',
    'grey': '#dddddd',
    'blue': '#4682b4',
    'red': '#ff2400',
  },
  
  'map':
  {
    'zoom': 16,
    'x': 55.013896934985624,
    'y': 73.32402510070847,
    'info': '<h4>Каб. №16, ул. Красный Путь, 155, г. Омск <br>БОУ ДОД «Городской Дворец творчества»</h4>',
    'ui':
    {
      'disable': true,
      'pan': false,
      'zoom': true,
      'mapType': true,
      'streetView': false,
    },
  },
};

fotoramaDefaults = 
{
  'width': '100%',
  'height': '100%',
  'shadows': false,
  'keyboard': true,
  'nav': 'thumbs',
};