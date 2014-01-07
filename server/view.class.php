<?php

class View
{

  /* Полчуение адреса файла */

  public function GetURL($file, $dir = false)
  {
    return CLIENT_URL.$dir.$file;
  }  

  /* Показ файла на странице */

  public function ShowPage($file, $dir = 'txt/') 
  {  
    ob_start();
    
    include self::GetURL($file, $dir);

    return ob_get_clean();   
  }
}

?>