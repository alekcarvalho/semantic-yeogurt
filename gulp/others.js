'use strict';

var path = require('path');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserify = require('browserify');
var vsource = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget);

  //Semantic themes
  gulp.task('semantic', function () {
    return gulp.src([
         'src/_styles/themes/**/*'
         ])
     .pipe(gulp.dest('tmp/styles/themes'))
     .pipe(gulp.dest('build/styles/themes'));
  });

  //Browserify vendor
  gulp.task('browserify-vendor', function() {
    return browserify('src/_scripts/vendor.js')
      .bundle()
      //Pass desired output filename to vinyl-source-stream
      .pipe(vsource('vendor.js'))
      .pipe(buffer())
      .pipe(uglify())
      // Start piping stream to tasks!
      .pipe(gulp.dest('tmp/scripts/'))
      .pipe(gulp.dest('build/scripts/'));
    });
};
