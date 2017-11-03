
let gulp = require('gulp')
let uglify = require('gulp-uglify')
let minify = require('gulp-minify-css')
let rename = require('gulp-rename')
let clean = require('gulp-clean')
let autoprefixer = require('gulp-autoprefixer')

//  js    uglify
gulp.task('js', function () {
  gulp.src('static/mui/js/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('static/mui/js'))
})

//  css    minify
gulp.task('less', function () {
  gulp.src('static/mui/css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0', 'iOS >= 7'],
      cascade: true,
      remove: true
    }))
    .pipe(rename({suffix: '.min'}))
  .pipe(minify())
  .pipe(gulp.dest('static/mui/css'))
})

gulp.task('clean', function () {
  return gulp.src(['static/**/*.min.js', 'static/**/*.min.css'])
    .pipe(clean())
})

gulp.task('default', ['clean'], function () {
  gulp.start('less', 'js')
})

gulp.task('deploy', ['clean'], function () {
  gulp.start('less', 'js')
})
