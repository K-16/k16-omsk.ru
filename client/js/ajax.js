var xmlHttp = null;

function getXmlHttp() 
{
  if (window.ActiveXObject)
  {
    return new ActiveXObject('Microsoft.XMLHTTP');
  } 
  else if (window.XMLHttpRequest) {
    return new XMLHttpRequest(); 
  } 
  else {
    alert('Ajax не поддерживается');
    return null;
  }
}

function nav(way)
{
  xmlHttp = getXmlHttp();

  if (xmlHttp != null)
  {
    /* Открываем соединение */

    xmlHttp.open('POST', 'ajax.php', true);
    
    /* Подготавливаем данные для передачи */

    result = 'to=' + way;

    /* Говорим, что все данные в UTF-8 */
    
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    xmlHttp.setRequestHeader('Content-length', result.length);
    xmlHttp.setRequestHeader('Connection', 'close');
    
    /* Возвращаем результат */
    
    xmlHttp.onreadystatechange = function() 
    {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      {
        document.getElementsByClassName('content').innerHTML = xmlHttp.responseText;
      } 
      else {
        console.log('[K16] Ajax request : true');
      }
    }
    
    /* Посылаем запрос на сервер */
    xmlHttp.send(result);
  }
}