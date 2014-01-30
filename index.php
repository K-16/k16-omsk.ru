<?php

/* Отправление заголовка */

header('Content-Type: text/html; charset=UTF-8');
header('Cache-control: public');

require_once './server/system.php';

/* Компилирование *.less файлов в *.css */

require_once SERVER_URL.'lib/lessc.inc.php';
compileLess(CLIENT_URL.'style/less/main.less', CLIENT_URL.'style/css/main.css');

/* */

$firstPage = true;

/* Смотри на адрес и отдаём нужную страницу */

$page = $_GET['page'];

if (!$page) 
{
  $content = View::ShowPage('01/01.html', 'txt/');
} 
else {
  $content = View::ShowPage($names[$page].'/'.'01.html', 'txt/');
}

/* Подключение главного файла и запуск приложения */

include CLIENT_URL.'index.html';

require_once 'ajax.php';

$firstPage = false;

?>