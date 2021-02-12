const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const sync = require("browser-sync").create();
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const del = require("del");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");



// Webpack

const scripts = () => {
  return gulp.src("./source/js/*.js")
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest("./build/js"));
};

exports.scripts = scripts;


// Delete

const clean = () => {
  return del("build");
}

exports.clean = clean;

// Copy

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**.{jpg,png,webp}",
    "source/*.ico"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
}

exports.copy = copy;

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/js/*.js", gulp.series("scripts")).on("change", sync.reload);
  gulp.watch("source/*.html", gulp.series("htmlMin")).on("change", sync.reload);
}

exports.default = gulp.series(
  styles, scripts, server, watcher
);


// Sprite

const sprite = () => {
  return gulp.src("source/img/**/*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
}

exports.sprite = sprite;

// Html-min

const htmlMin = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: false }))
    .pipe(gulp.dest("build"));
}

exports.htmlMin = htmlMin;

// Image

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"));
}

exports.images = images;

// Webp

const imgWebp = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 85}))
    .pipe(gulp.dest("source/img"));
}

exports.imgWebp = imgWebp;

// Build

const build =  gulp.series(
    clean,
    copy,
    gulp.parallel(scripts, styles, sprite),
    htmlMin
  );

  exports.build = build;
