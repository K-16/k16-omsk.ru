<?php

/* Отправление заголовка */

header('Content-Type: text/html; charset=UTF-8');
header('Cache-control: public');

require_once './server/system.php';

/* Компилирование *.less файлов в *.css */

require_once SERVER_URL.'lib/lessc.inc.php';
compileLess(CLIENT_URL.'style/less/main.less', CLIENT_URL.'style/css/compiled.css');

include CLIENT_URL.'index.html';

?>