<?php

class View
{
  public function GetURL($file, $subDir = false, $dir = 'txt/')
  {
    return CLIENT_URL.$dir.$subDir.$file;
  }  

  public function ShowPage($file, $subDir = false) 
  {  
    ob_start(); 
    
    include self::GetURL($file, $subDir, $dir = 'txt/');

    return ob_get_clean();   
  }
}

?>