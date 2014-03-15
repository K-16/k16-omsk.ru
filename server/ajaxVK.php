<?php

$request = $_GET['request'];

$url = 'https://api.vk.com/method/'.urldecode($request);

$response = file_get_contents($url);

echo $response;

?>