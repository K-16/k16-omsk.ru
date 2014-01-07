<?php

class Menu
{
  public function Show()
  {
    include 'menu.items.php';

    foreach ($menuItems as $i) 
    {
      $name = $i['name'];
      $url  = $i['url'];
      
      include CLIENT_URL.'html/menu/item.html';
    }
  }
} 

?>