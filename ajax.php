<?php

require_once('./server/system.php');

$page = $_GET['page'];

if (!$firstPage) // ??? КАК ???
{
  if (!$page) 
  {
    echo $content = View::ShowPage('01/01.html', 'txt/');
  } 
  else {
    echo $content = View::ShowPage($names[$page].'/'.'01.html', 'txt/');
  }
}

?>