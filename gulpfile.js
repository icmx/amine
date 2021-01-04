const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

const cssnano = require('cssnano');
const postcssSVG = require('postcss-svg');

const server = require('browser-sync').create();

const package = require('./package.json');

sass.compiler = require('sass');

const useEnv = (environment) => {
  return (cb) => {
    process.env.NODE_ENV = environment;
    cb();
  };
};

const getEnv = () => process.env.NODE_ENV;

const isEnv = (environment) => process.env.NODE_ENV === environment;

function styles() {
  const opt = { sourcemaps: isEnv('development') };

  return gulp
    .src(['scss/amine.scss'], opt)
    .pipe(sass())
    .pipe(postcss([postcssSVG]))
    .pipe(gulp.dest('css', opt))
    .pipe(gulp.dest('docs', opt))
    .pipe(postcss([cssnano]))
    .pipe(rename({ basename: 'amine', suffix: '.min' }))
    .pipe(gulp.dest('css', opt));
}

function docs() {
  return gulp
    .src(['docs/index.pug', 'docs/pages/*.pug'], { base: 'docs' })
    .pipe(
      pug({
        pretty: true,
        locals: { mode: getEnv(), version: package.version },
      })
    )
    .pipe(gulp.dest('docs'));
}

function reload(cb) {
  server.reload();
  cb();
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

  gulp.watch(
    ['docs/index.pug', 'docs/pages/**/*.pug'],
    gulp.series(docs, reload)
  );

  return cb();
}

const build = gulp.series(gulp.parallel(styles, docs));

module.exports.serve = gulp.series(useEnv('development'), build, serve);
module.exports.build = gulp.series(useEnv('production'), build);
