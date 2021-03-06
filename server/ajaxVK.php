<?php

$request = $_GET['request'];

// Используется сервисный токен: https://vk.com/dev/access_token?f=3.%20Сервисный%20ключ%20доступа
$url = 'https://api.vk.com/method/'.urldecode($request).'&access_token=de26c5c9de26c5c9de26c5c90bde50059ddde26de26c5c9be65abd1723e36861107ae3b';  

$response = file_get_contents($url);

echo $response;

?>
