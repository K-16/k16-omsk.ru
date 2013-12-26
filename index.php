<?php

/* Отправление заголовка */

header('Content-Type: text/html; charset=UTF-8');
header("Cache-Control: no-store, no-cache, must-revalidate");

require_once './server/system.php';

/* Компилирование *.less файлов в *.css */

require_once SERVER_URL.'lib/lessc.inc.php';
compileLess(CLIENT_URL.'css/main.less', CLIENT_URL.'css/main.css');

/* */

$firstPage = true;

/* Смотри на адрес и отдаём нужную страницу */

$page = $_GET['to'];

if (!$page) 
{
  $content = View::ShowPage('01/0101.html', 'txt/');
} 
else {
  $content = View::ShowPage($names[$page].'/'.$names[$page].'01.html', 'txt/');
}

/* Подключение главного файла и запуск приложения */

include CLIENT_URL.'index.html';

require_once 'ajax.php';

$firstPage = false;

?>