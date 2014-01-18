<?php

/* Объявление констант */

define('BASE_URL', './');
define('CLIENT_URL', BASE_URL.'client/');
define('SERVER_URL', BASE_URL.'server/');


require_once 'config.php';

/* Подключение классов */

require_once 'view.class.php';

require_once 'tools.php';

/* Массив преобразований имён */

$names = array(
  'main'      => '01',
  'news'      => '02',
  'history'   => '03',
  'education' => '04',
  'activity'  => '05',
  'people'    => '06',
  'link'      => '07',
  'photo'     => '08'
);

?>