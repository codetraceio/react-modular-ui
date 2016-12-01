const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('default', ['stylus', 'watch-stylus']);

gulp.task('stylus', () => {
  return gulp
    .src(__dirname + '/styles/src/default/index.styl')
    .pipe(stylus())
    .pipe(gulp.dest(__dirname + '/styles/dist/default/'));
});

gulp.task('watch-stylus', () => {
  return gulp
    .watch(__dirname + '/styles/src/**/*.styl', ['stylus'])
})
