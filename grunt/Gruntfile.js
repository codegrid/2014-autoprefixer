var BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 20',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 2.3'
];

module.exports = function(grunt) {
  grunt.initConfig({
    autoprefixer: {
      options: {
        browsers: BROWSERS,
        cascade: true
      },
      default: {
        src: 'dist/css/**/*.css',
      }
    },
    sass: {
      default: {
        files: [{
          expand: true,
          flatten: true,
          src: ['src/scss/*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      style: {
        files: 'src/scss/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
