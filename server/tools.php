<?php

/* Компилирование .less в .css */

function compileLess($inputFile, $outputFile)
{
  // Загрузка кэша
  $cacheFile = $inputFile.".cache";

  if (file_exists($cacheFile)) 
  {
    $cache = unserialize(file_get_contents($cacheFile));
  } else {
    $cache = $inputFile;
  }

  $less = new lessc;
  $newCache = $less->cachedCompile($cache);

  if (!is_array($cache) || $newCache["updated"] > $cache["updated"]) 
  {
    file_put_contents($cacheFile, serialize($newCache));
    file_put_contents($outputFile, $newCache['compiled']);
  }
}

/* Объединение Js */
/*
function mergeJs($path, $compiledFile, $extension = 'js')
{
  foreach (glob($path.'*.'.$extension) as $file)
  {
    $updated = file_get_contents($compiledFile);
    $updated .= file_get_contents($file);

    file_put_contents($compiledFile, $updated);
  }
}

mergeJs('../client/js/', '../client/js/compiled.js');
*/
?>