module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      less: {
        src : ['css/less/*.less'],
        dest: 'css/dist/mobile.less'
      },
      theme: {
        src : ['css/less/__init.less', 'css/less/theme.less'],
        dest: 'css/dist/theme.less'
      }
    },
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false
        },
        files: {
          'css/dist/mobile.css': 'css/dist/mobile.less',
          'css/dist/theme.css': 'css/dist/theme.less'
        }
      },
      production: {
        options: {
          compress: true,
          yuicompress: true
        },
        files: {
          'css/dist/mobile.min.css': 'css/dist/mobile.less',
          'css/dist/theme.min.css': 'css/dist/theme.less'
        }
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      css: {
        files: [
          'css/less/*.less'
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