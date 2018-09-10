var gulp = require('gulp')
var sass = require('gulp-sass')
var chokidar = require('chokidar')
var cleanup = require('gulp-cleanup-dest')
var notify = require('gulp-notify')
gulp.task('default', () => {
  chokidar.watch('./scss/**/*.scss').on('all', (type, file) => {
    return gulp.src('./scss/**/*.scss')
      .pipe(cleanup({dest: 'dest', ext: '.css'}))
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('dest'))
      .pipe(notify({message: 'ok'}))
  })
})
