module.exports = function(grunt){
  var path = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      compileCore: {
        options: {
          compress: false
        },
        src: 'less/<%= pkg.name %>.less',
        dest: 'dist/css/<%= pkg.name %>.css'
      },
      compileTheme: {
        options: {
          compress: false
        },
        src: 'less/<%= pkg.name %>-theme.less',
        dest: 'dist/css/<%= pkg.name %>-theme.css'
      }
    },
    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        advanced: false
      },
      minifyCore: {
        src: 'dist/css/<%= pkg.name %>.css',
        dest: 'dist/css/<%= pkg.name %>.min.css'
      },
      minifyTheme: {
        src: 'dist/css/<%= pkg.name %>-theme.css',
        dest: 'dist/css/<%= pkg.name %>-theme.min.css'
      }
    },
    uglify: {
      complieJS: {
        files: {
          'dist/js/<%= pkg.name %>.js': [],
          'dist/js/<%= pkg.name %>-initialize.js': ['js/<%= pkg.name %>-initialize.js']
        }
      },
      minifyJS: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['dist/js/<%= pkg.name %>.js'],
          'dist/js/<%= pkg.name %>-initialize.min.js': ['dist/js/<%= pkg.name %>-initialize.js']
        }
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      css: {
        files: [
          'less/*.less'
        ],
        tasks: [
          'less'
        ]
      },
      js: {
        files: [
          'js/*.js'
        ],
        tasks: [
          'uglify:complieJS'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('pro', ['less', 'cssmin', 'uglify']);
}