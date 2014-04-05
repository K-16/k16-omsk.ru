/*
 * 
 * tools.js
 * ========
 * Различные вспомогательные (и не только) штуки
 *  - regExp. Массив регулярных выражений
 *  - compileText(source, data). Возвращает скомпилированный шаблонизатором текст
 *  - getCurrentPage(). Возвращает текущую страницу
 *  - inherit(p). Системная функция для работы необязательных аргументов
 *  - unique(arr). Возвращает уникальные элементы массива
 *  - ajaxVK(request, async). Возвращает json полученный при пмомощи ВК API
 *  - checkFotoSize(photo). Возвращает самый большой размер у фото
 *
*/

var regExp =
{
  'externalLink': /((http|https|mailto):)/i,
  'funcNavValue': /'[a-z]+'/i,
  'newsVKProfileLink': /\[id(\d+)\|(\W+)\s(\W+)\]/g,
  'textExternalLink': /((http|https):\/\/[\w\d\/.?=%\-_&;]+)/g
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
    url: SERVER_URL + 'ajaxVK.php?request=' +
         encodeURIComponent(request + '&v=' + config['vk']['apiVersion']),
    dataType: 'json',
    success: function(data)
    {
      localStorage.setItem(request, JSON.stringify(data));
    }
  });
};


function checkFotoSize(photo)
{
  var src = photo['photo_2560'];

  if (!photo['photo_2560'])
  {
    var src = photo['photo_1280'];

    if (!photo['photo_1280'])
    {
      var src = photo['photo_807'];

      if (photo['photo_807'])
      {
        var src = photo['photo_604'];
      };
    };
  };

  return src;
};