const gulp = require('gulp');
const babel = require('gulp-babel');
const stylus = require('gulp-stylus');
const webpackGulp = require('gulp-webpack');
const named = require('vinyl-named');

function onError(error) {
  console.log(error.message);
  return true;
}

gulp.task('default', [
  'styles', 'styles-watch',
  'scripts',
  'scripts-example-client', 'scripts-example-server',
  'scripts-watch'
]);

gulp.task('scripts', () => {
  return gulp.src(['src/**/*.js', '!src/example/**/*']).pipe(babel({
    presets: ['react', 'es2015']
  })).pipe(gulp.dest('dist'));
});

gulp.task('scripts-example-client', () => {
  return gulp.src('src/example/client/*').pipe(named()).pipe(webpackGulp({
    output: {
      filename: '[name].js',
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    },
    debug: true,
    devtool: 'inline-source-map'
  }).on('error', onError)).pipe(gulp.dest('dist/example/client'));
});

gulp.task('scripts-example-server', () => {
  return gulp.src(['src/example/**/*', '!src/example/client/*']).pipe(babel({
    presets: ['react', 'es2015']
  })).pipe(gulp.dest('dist/example'));
});

gulp.task('scripts-watch', () => {
  return gulp.watch('src/**/*', [
    'scripts',
    'scripts-example-client', 'scripts-example-server'
  ]);
});

gulp.task('styles', () => {
  return gulp.src('styles/src/default/index.styl').pipe(stylus()).pipe(gulp.dest('styles/dist/default/'));
});

gulp.task('styles-watch', () => {
  return gulp.watch('styles/src/**/*.styl', ['styles'])
});
