$(document).ready(function()
{

// ScrollTo array

  $('#gc-1').click(function() {$.scrollTo('#g-1', 500, {axis:'x'});});
  $('#gc-2').click(function() {$.scrollTo('#g-2', 500, {axis:'x'});});
  $('#gc-3').click(function() {$.scrollTo('#g-3', 500, {axis:'x'});});

// Pics array

  $('#g-1').fotorama
  ({
    data: 
    [
      {img: 'http://cs317931.userapi.com/v317931374/5163/VaC9lnz_F5U.jpg'},
      {img: 'http://cs317931.userapi.com/v317931374/5190/uitQGMv1Gjk.jpg'},
      {img: 'http://cs317931.userapi.com/v317931374/5187/NIC_mPkDxCM.jpg'},
      {img: 'http://cs317931.userapi.com/v317931374/517e/N8Imvi-KquU.jpg'},
      {img: 'http://cs317931.userapi.com/v317931374/5175/fPzuQa49h_U.jpg'},
      {img: 'http://cs317931.userapi.com/v317931374/516c/CH4E0gX5Zls.jpg'},
    ]
  });


  $('#g-2').fotorama
  ({
    data: 
    [
      {img: 'http://gamelika.com/imaginator/1/4e5fd85c58b8e_fru.jpg'},
      {img: 'http://www.dezinfo.net/images2/image/06.2009/tropiowosi/1009.jpg'},
      {img: 'http://i030.radikal.ru/0712/c5/498a5c90db25.jpg'},
    ]
  });


  $('#g-3').fotorama
  ({
    data: 
    [
      {img: 'http://img-fotki.yandex.ru/get/4514/val-pavlovna.14b/0_70297_fba0f03b_L'},
      {img: 'http://totalbeautyglamour.ru/images/pages/fill/h600/67a8fe8f6595bbc02bbbd59b8a3c825e.jpg'},
      {img: 'http://www.edabezvreda.ru/pict/407.jpg'},
    ]
  });


});