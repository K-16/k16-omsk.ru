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
  'newsVKProfileLink': /\[id(\d+)\|(\W+)\s(\W+)\]/g, /** @example [id000|Name Surname] */
  'textExternalLink': /((http|https):\/\/[\w\d\/.?=%\-_&;]+)/g // ; — O_o
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

function ajaxVK(request, async)
{
  $.ajax(
  {
    async: async,
    url: SERVER_URL + 'ajaxVK.php?request=' + encodeURIComponent(request),
    dataType: 'json',
    success: function(data)
    {
      if (localStorage.getItem(request) == data) return;
      if (localStorage.getItem(request) != data && localStorage.getItem(request) != null) localStorage.removeItem(request);

      localStorage.setItem(request, JSON.stringify(data));
    }
  });
};