const gulp = require('gulp');
const babel = require('gulp-babel');
const stylus = require('gulp-stylus');

gulp.task('default', [
  'styles', 'styles-watch',
  'scripts-client', 'scripts-server', 'scripts-watch'
]);

gulp.task('scripts-client', () => {
  return gulp.src(['src/**/*.js', '!src/example/*', '!src/server.js']).pipe(babel({
    presets: ['react', 'es2015']
  })).pipe(gulp.dest('client'));
});

gulp.task('scripts-server', () => {
  return gulp.src(['src/**/*.js', '!src/example/*', '!src/server.js']).pipe(babel({
    presets: ['react', 'nodejs-lts']
  })).pipe(gulp.dest('server'));
});


gulp.task('scripts-watch', () => {
  return gulp.watch('backend/src/**/*.js', [
    'scripts-client', 'scripts-server',
    'scripts-client-index', 'scripts-server-index'
  ]);
});

gulp.task('styles', () => {
  return gulp.src('styles/src/default/index.styl').pipe(stylus()).pipe(gulp.dest('styles/dist/default/'));
});

gulp.task('styles-watch', () => {
  return gulp.watch('styles/src/**/*.styl', ['styles'])
});
