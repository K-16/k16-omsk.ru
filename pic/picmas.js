$(document).ready(function()
{

  $("#gc-1").click(function() 
  {
    $.scrollTo("#g-1", 500, {axis:"x"});
    $("#g-1").fotorama
    ({
      data: 
      [
        {img: "http://www.bugaga.ru/uploads/posts/2009-01/1231616841_rambutan.jpg"},
        {img: "http://www.bugaga.ru/uploads/posts/2009-01/1231616686_longan.jpg"},
        {img: "http://nevseoboi.com.ua/uploads/posts/2010-02/1267200702_042.jpg"},
      ]
    });
  });

  $("#gc-2").click(function() 
  {
    $.scrollTo("#g-2", 500, {axis:"x"});
    $("#g-2").fotorama
    ({
      data: 
      [
        {img: "http://gamelika.com/imaginator/1/4e5fd85c58b8e_fru.jpg"},
        {img: "http://www.dezinfo.net/images2/image/06.2009/tropiowosi/1009.jpg"},
        {img: "http://i030.radikal.ru/0712/c5/498a5c90db25.jpg"},
      ]
    });
  });

  $("#gc-3").click(function() 
  {
    $.scrollTo("#g-3", 500, {axis:"x"});
    $("#g-3").fotorama
    ({
      data: 
      [
        {img: "http://img-fotki.yandex.ru/get/4514/val-pavlovna.14b/0_70297_fba0f03b_L"},
        {img: "http://totalbeautyglamour.ru/images/pages/fill/h600/67a8fe8f6595bbc02bbbd59b8a3c825e.jpg"},
        {img: "http://www.edabezvreda.ru/pict/407.jpg"},
      ]
    });
  });

});
/*
<IMG src="http://www.bugaga.ru/uploads/posts/2009-01/1231616841_rambutan.jpg">
<IMG src="http://www.bugaga.ru/uploads/posts/2009-01/1231616686_longan.jpg">
<IMG src="http://nevseoboi.com.ua/uploads/posts/2010-02/1267200702_042.jpg">
<IMG src="http://gamelika.com/imaginator/1/4e5fd85c58b8e_fru.jpg">
<IMG src="http://www.dezinfo.net/images2/image/06.2009/tropiowosi/1009.jpg">
<IMG src="http://i030.radikal.ru/0712/c5/498a5c90db25.jpg">
<IMG src="http://img-fotki.yandex.ru/get/4514/val-pavlovna.14b/0_70297_fba0f03b_L">
<IMG src="http://totalbeautyglamour.ru/images/pages/fill/h600/67a8fe8f6595bbc02bbbd59b8a3c825e.jpg">
<IMG src="http://www.edabezvreda.ru/pict/407.jpg">
<IMG src="http://img.galya.ru/galya.ru/Pictures2/themes_topics/2011/09/07/2777323.jpg">
<IMG src="http://mens-belt.org/sites/default/files/01-1257687687574543654786.jpg">
<IMG src="http://domaromatov.ru/published/publicdata/SOAPBUSIDASHOP/attachments/SC/products_pictures/index_enl.jpg">
<IMG src="http://www.bluechameleon.org/Forum%20Pics%202005/-%20Lychee%20tree.jpg">
<IMG src="http://images.reklama.com.ua/2011-10-31/1194920/photos0-800x600.jpeg">
*/




//  $("#gc-2").click(function() {$.scrollTo("#g-2", 500, {axis:"x"});});
//  $("#gc-3").click(function() {$.scrollTo("#g-3", 500, {axis:"x"});});

