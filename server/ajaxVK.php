<?php

$request = $_GET['request'];

$url = 'https://api.vk.com/method/'.urldecode($request).'&access_token=769d1e15769d1e15769d1e154a76f9cc157769d769d1e152db8596725278896de759419';

$response = file_get_contents($url);

echo $response;

?>