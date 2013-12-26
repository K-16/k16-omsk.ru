<?php

/* Объявление констант */

define('BASE_URL', './');
define('CLIENT_URL', BASE_URL.'client/');
define('SERVER_URL', BASE_URL.'server/');


require_once 'config.php';

/* Подключение классов */

require_once 'menu.class.php';
require_once 'view.class.php';

require_once 'tools.php';

/* Массив преобразований имён */

$names = array(
  'main' => '01',
  'history' => '02',
  'education' => '03',
  'activity' => '04',
  'people' => '05',
  'link' => '06',
  'photo' => '07'
);

?>