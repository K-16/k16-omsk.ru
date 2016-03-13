module.exports = function(grunt) // gulp!!!))))0
{
  var jsPath  = 'client/js/',
      cssPath = 'client/style/';

  grunt.initConfig(
  {
    pkg: grunt.file.readJSON('package.json'),
      concat:
      {
        build:
        {
          src:
          [
            jsPath + 'lib/jquery-*.js', // библиотеки
            jsPath + 'lib/*.js', // библиотеки
            jsPath + 'constants.js',
            jsPath + 'config.js',
            jsPath + 'templates.js',
            jsPath + 'tools.js',
            jsPath + 'debug.js',
            jsPath + 'parsers.js',
            jsPath + 'menu.js',
            jsPath + 'system.js',
            jsPath + 'start.js',
            jsPath + 'elements.js'
          ],
          dest: jsPath + 'compiled.js'
        }
      },

      less:
      {
        build:
        {
          files: 
          {
            'client/style/css/compiled.css':
            [
              cssPath + 'css/lib/*.css',
              cssPath + 'less/main.less'
            ]
          },
          options:
          {
            cleancss: true,
            compress: true
          }
        }
      },

      uglify:
      {
        build:
        {
          src: jsPath + 'compiled.js',
          dest: jsPath + 'compiled.js'
        }
      },

      watch:
      {
        js:
        {
          files: [jsPath + '**/*.*', '!' + jsPath + 'compiled.js'],
          tasks: ['concat', 'uglify']
        },

        less:
        {
          files: [cssPath + '**/*.*', '!' + cssPath + 'css/compiled.css'],
          tasks: ['less']
        },

        gruntfile:
        {
          files: 'Gruntfile.js',
          options:
          {
            reload: true
          }
        }
      }
    });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', 'watch');
};