<?php

/* Отправление заголовка */

header('Content-Type: text/html; charset=UTF-8');

require_once('./server/system.php');

/* Компилирование *.less файлов в *.css */

require_once(SERVER_URL.'lib/lessc.inc.php');
autoCompileLess(CLIENT_URL.'css/main.less', CLIENT_URL.'css/main.css');

/* Массив имён */

$names = array(
  'main' => '01',
  'history' => '02',
  'education' => '03',
  'activity' => '04',
  'people' => '05',
  'link' => '06',
  'photo' => '07'
);

/* Проверяем введенны ли данные и, если успешно возвращаем результат */   

$page = $_GET['to'];

if (!$page) 
{
  $content = View::ShowPage('01/0101.html', 'txt/');
} 
else {
  $content = View::ShowPage($names[$page].'/'.$names[$page].'01.html', 'txt/');
}

//elseif (isset($_POST['page'])) $page = $_POST['page']; 

/* Подключение главного файла и запуск приложения */

include CLIENT_URL.'index.html';

?>