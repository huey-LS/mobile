module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      less: {
        src : ['css/less/**/*.less'],
        dest: 'css/mobile.less'
      } 
    },
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false
        },
        files: {
          'css/mobile.css': 'css/mobile.less'
        }
      },
      production: {
        options: {
          compress: true,
          yuicompress: true
        },
        files: {
          'css/mobile.min.css': 'css/mobile.less'
        }
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      css: {
        files: [
          'css/less/**/*.less'
        ],
        tasks: [
          'concat',
          'less'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //grunt.registerTask('watch', ['watch']);
}