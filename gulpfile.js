const gulp = require('gulp');
const babel = require('gulp-babel');
const stylus = require('gulp-stylus');

gulp.task('default', ['styles', 'styles-watch', 'scripts', 'scripts-node-lts', 'scripts-watch']);

gulp.task('scripts', () => {
  return gulp.src('src/**/*.js').pipe(babel({
    presets: ['react', 'es2015']
  })).pipe(gulp.dest('dist/browser'));
});

gulp.task('scripts-node-lts', () => {
  return gulp.src('src/**/*.js').pipe(babel({
    presets: ['react', 'nodejs-lts']
  })).pipe(gulp.dest('dist/node'));
});

gulp.task('scripts-watch', () => {
  return gulp.watch('backend/src/**/*.js', ['scripts', 'scripts-node-lts']);
});

gulp.task('styles', () => {
  return gulp.src('styles/src/default/index.styl').pipe(stylus()).pipe(gulp.dest('styles/dist/default/'));
});

gulp.task('styles-watch', () => {
  return gulp.watch('styles/src/**/*.styl', ['stylus'])
});
