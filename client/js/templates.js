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
  'news': '<article id="{{id}}">\
             {{{text}}}\
             <div class="photo">{{{attachments}}}</div>\
             <div class="info">\
               <time><i class="icon date"></i> {{day}}.{{month}}.{{year}}</time>\
               <address><i class="icon author"></i> <span>{{authorID}}</span></address>\
               <span><i class="icon like"></i> {{likes}}</span>\
               <span><i class="icon repost"></i> {{reposts}}</span>\
               <span><i class="icon comment"></i> {{comments}}</span>\
             </div>\
           </article>',

  'gallery': '<div class="gallery background"></div>\
              <div class="gallery title">{{title}}</div>\
              <div class="gallery close" onclick="gallery.close();">' + config['symbol']['close'] + '</div>\
              <div class="gallery photo"></div>',

  'galleryAlbumLink': '<a class="albumLink" onclick="gallery.photos.show({{id}}, \'{{fullTitle}}\');">\
                         <img style="background: url({{img}});">\
                         {{title}}\
                       </a>',

  'firstMenuPart': '<a class="item" href="/{{url}}">{{name}}</a>',
  'secondMenuPart': '<a class="item-2" href="/{{parent}}/{{url}}">{{name}}</a>',

  'secondMenuContainer': ' ' + config['symbol']['arrow'] + ' <span>......</span> <nav class="menu-2"></nav>',

  'quoteAuthorWithImg': '<em class="quoteAuthor italic"><span>{{author}}</span><img src="' + IMG_URL + 'author/{{img}}.png"></em>',
  'quoteAuthorWithoutImg': '<em class="quoteAuthor italic">{{author}}</em>',

  'script': '<script type="text/javascript" src={{src}}></script>',
  'css': '<link href="' + CSS_URL + '{{src}}" rel="stylesheet">',
};