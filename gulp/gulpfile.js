var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

var BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 20',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 2.3',
  'and_ff >= 20',
  'and_chr >= 34'
];

gulp.task('style', function() {
  gulp.src('src/scss/**/*.scss')
    .pipe(sass({ 'sourcemap=none' : true }))
    .pipe(autoprefixer({browsers: BROWSERS, cascade: true}))
    .pipe(gulp.dest('dist/css'));
})

gulp.task('watch', function() {
  gulp.watch(['src/scss/**/*.scss'], ['style'])
});

gulp.task('default', ['watch']);
