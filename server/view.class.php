<?php

class View
{
  /* Полчуение адреса файла */

  public function GetURL($file)
  {
    return CLIENT_URL.$file;
  }  
}

?>