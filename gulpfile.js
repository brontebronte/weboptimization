//Variables
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var responsive = require('gulp-responsive-images');
var htmlmin = require('gulp-htmlmin');


//Responsive Image (Resize and adjust quality)
gulp.task('resize', function () {
  gulp.src('./views/images/*')
    .pipe(responsive({
      'pizza.png': [{
        width: 135,
        quality: 70
      }],
      'pizzeria.jpg': [{
        width: 800,
        quality: 70
      }, {
        width: 116,
        quality: 60,
        suffix: '-small'
      }]
    }))
    .pipe(gulp.dest('./views/minified pizza/imageres'));
});



//Minify images(runs on 2nd gulp command- after resize)
gulp.task('minify', function(){
  gulp.src('./views/minified pizza/imageres/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./views/minified pizza/imagesmin'));
});



//Minify/Concat CSS
gulp.task('styles', function(){
  gulp.src('./views/css/style.css')
    .pipe(plumber())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./views/minified pizza/cssmin'));
});


//Minify/Concat CSS for Main Page (index.html)
gulp.task('stylesmain', function(){
  gulp.src('./css/*.css')
    .pipe(plumber())
    .pipe(concat('maincssmin.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css/mini'));
});



//Uglifies aka Minifying JS
gulp.task('scripts', function(){
  gulp.src('./views/js/*.js')
      .pipe(plumber())
      .pipe(uglify())
      .pipe(gulp.dest('./views/minified pizza/jsmin'));
});


//HTML minify for index.html
gulp.task('index', function(){
  gulp.src('./original_index/index.html')
      .pipe(plumber())
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./'));
});


//Watch JS Task
gulp.task('watch', function(){
  gulp.watch('./views/js/*.js', ['scripts']);
  gulp.watch('./views/css/*.css', ['styles']);
  gulp.watch('./css/*.css', ['stylesmain']);
  gulp.watch('./original_index/index.html', ['index']);
});



//Default with array of all gulp tasks to run under one command 'gulp'
gulp.task('default',['scripts', 'styles', 'stylesmain', 'resize', 'minify', 'watch', 'index']);
