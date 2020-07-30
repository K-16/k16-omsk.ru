/*
 * 
 * tools.js
 * ========
 * Различные вспомогательные (и не только) штуки
 *  - regExp. Массив регулярных выражений
 *  - compileText(source, data). Возвращает скомпилированный шаблонизатором текст
 *  - getCurrentPage(). Возвращает текущую страницу
 *  - inherit(p). Системная функция для работы необязательных аргументов
 *  - ajax(request). Возвращает json с полученный от API ВК
 *
*/

var regExp = 
{
  'externalLink': /((http|https|mailto):)/i,
  'funcNavValue': /'[a-z]+'/i,
  'newsVKProfileLink': /\[id(\d+)\|([а-яёА-ЯЁa-zA-z0-9\s]+)\]/g, /** @example [id000|Name] */
  'textExternalLink': /((http|https):\/\/[\w\d\/.?=%\-_&;]+)/g, // ; — O_o
  'achievementsCategory': /\n[\W\w]+/
};

function compileText(source, data)
{
  var template = Handlebars.compile(source);
  return template(data);
};

function getCurrentPage()
{
  return location.pathname.substr(1);
};

function inherit(p)
{
  function f() {};
  f.prototype = p;
  return new f;
};

function unique(arr)
{
  var obj = {};

  for (var i = 0; i < arr.length; i++)
  {
    var str = arr[i];

    obj[str] = true;
  }
 
  return Object.keys(obj);
};

function random(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min; 
};

function ajaxVK2(request, async) // В 6-ть утра в голову название функции не лезет ВООБЩЕ
{
  $.ajax(
  {
    async: async,
    url: SERVER_URL + 'ajaxVK.php?request=' + encodeURIComponent(request + '&v=' + config['vk']['apiVersion']),
    dataType: 'json',
    success: function(data)
    {
      localStorage.setItem(request, JSON.stringify(data));
    }
  });
};

function ajaxVK(request)
{
  var speed = 'fast';
  
  ajaxVK2(request, false); // на самом деле, это нужно переделать через коллбеки, убрать пхп к чёрту и всё такое, но мне лень, простите

  setTimeout(function() { $('.load').slideUp(speed).hide(speed); }, 1000);
};
