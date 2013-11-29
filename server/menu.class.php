<?php

class Menu
{
  public function Show()
  {
    include 'menu.items.php';

    foreach ($menuItems as $i) 
    {
      $name = $i['name'];
//      include CLIENT_URL.'menuItem.html';
      echo '<a href="'.$i['url'].'" class="item">'.$i['name'].'</a>';
    }
  }
} 

?>