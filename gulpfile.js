const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

const cssnano = require('cssnano');
const postcssSVG = require('postcss-svg');

const server = require('browser-sync').create();

sass.compiler = require('sass');

const useEnv = (environment) => {
  return (cb) => {
    process.env.NODE_ENV = environment;
    cb();
  };
};

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

function styles() {
  const srcDestParams = { sourcemaps: isDevelopment };

  return gulp
    .src(['scss/amine.scss'], srcDestParams)
    .pipe(sass())
    .pipe(postcss([postcssSVG]))
    .pipe(gulp.dest('css', srcDestParams))
    .pipe(gulp.dest('docs', srcDestParams))
    .pipe(postcss([cssnano]))
    .pipe(rename({ basename: 'amine', suffix: '.min' }))
    .pipe(gulp.dest('css', srcDestParams));
}

function serve(cb) {
  server.init({
    server: 'docs',
    port: 8000,
    notify: false,
    open: false,
  });

  gulp.watch(
    ['scss/**/*.scss'],
    gulp.series(styles, (cb) =>
      gulp.src('docs').pipe(server.stream()).on('end', cb)
    )
  );

  return cb();
}

const build = gulp.series(gulp.parallel(styles));

module.exports.serve = gulp.series(useEnv('development'), build, serve);
module.exports.build = gulp.series(useEnv('production'), build);
