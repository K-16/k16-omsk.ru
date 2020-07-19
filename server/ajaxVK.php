<?php

$request = $_GET['request'];

// https://oauth.vk.com/authorize?client_id=7543100&scope=photos,offline&response_type=token
$url = 'https://api.vk.com/method/'.urldecode($request).'&access_token=0021cf6b23a659dc3692c4990cda63157767769c6ae24d2a67b28c293dc7fd24f2ee96f61855be0aaf179';

$response = file_get_contents($url);

echo $response;

?>
