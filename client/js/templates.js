/*
 * 
 * templates.js
 * ========
 * HTML исходники для шаблонизатора.
 *  - news. Шаблон новости.
 *  - gallery. Шаблон галереи.
 *  - galleryLink. Шаблон ссылки на галерею.
 *  - firstMenuPart. Шаблон части меню первого уровня.
 *  - secondMenuPart. Шаблон части меню второго уровня.
 *  - secondMenuContainer. Шаблон контейнера меню второго уровня.
 *  - script. Шаблон ссылки на файл скрипта.
 *  - css. Шаблон ссылки на CSS файл.
 *
*/

var templates =
{
  'news': '<article>\
             <time><i class="icon date"></i> {{day}}.{{month}}.{{year}}</time>\
             <address id="id{{id}}"><i class="icon author"></i> {{author}}</address>\
             <span><i class="icon like"></i> {{likes}}</span>\
             <span><i class="icon repost"></i> {{reposts}}</span>\
             <span><i class="icon comment"></i> {{comments}}</span>\
             <br> {{{text}}}\
           </article>',

  'gallery': '<div class="gallery background"></div>\
              <div class="gallery title">{{title}}</div>\
              <div class="gallery close" onclick="Gallery.Close();">' + config['symbol']['close'] + '</div>\
              <div class="gallery photo"></div>',

  'galleryAlbumLink': '<a onclick="Gallery.Photos.ShowByAlbum({\'id\': {{id}}, \'title\': \'{{fullTitle}}\' });">{{title}}</a> <br>',

  'firstMenuPart': '<a class="item" href="/{{url}}">{{name}}</a>',
  'secondMenuPart': '<a class="item-2" href="/{{parent}}/{{url}}">{{name}}</a>',

  'secondMenuContainer': ' ' + config['symbol']['arrow'] + ' <span>......</span> <nav class="menu-2"></nav>',

  'quoteAuthorWithImg': '<em class="author italic"><span>{{author}}</span><img src="' + IMG_URL + 'author/{{img}}.png"></em>',
  'quoteAuthorWithoutImg': '<em class="author italic">{{author}}</em>',

  'script': '<script type="text/javascript" src={{src}}></script>',
  'css': '<link href="' + CSS_URL + '{{src}}" rel="stylesheet">',
};