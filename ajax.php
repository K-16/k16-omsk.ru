<?php

require_once('./server/system.php');

$page = $_GET['to'];

if (!$firstPage) // ??? КАК ???
{
  if (!$page) 
  {
    echo $content = View::ShowPage('01/0101.html', 'txt/');
  } 
  else {
    echo $content = View::ShowPage($names[$page].'/'.$names[$page].'01.html', 'txt/');
  }
}

?>