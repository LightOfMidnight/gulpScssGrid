const { src, dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const htmlMin = require("gulp-htmlmin");
const autoprefixes = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass")(require("sass"));
const image = require("gulp-image");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify-es").default;
const notify = require("gulp-notify");
const del = require("del");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

const clean = () => {
  return del(["build"]);
};
const buildClean = () => {
  return del(["build"]);
};

const buildResources = () => {
  return src("src/fonts/**").pipe(dest("build/fonts"));
};

const buildCssFiles = () => {
  return src("src/css/normalize.css").pipe(dest("build/css"));
};

const buildStyles = () => {
  return src("src/css/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixes({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(sourcemaps.write())
    .pipe(dest("build/css"));
};

const buildHtmlMinify = () => {
  return src("index.html")
    .pipe(
      htmlMin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("build"));
};

const buildScripts = () => {
  return src(["src/script.js"])
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("app.js"))
    .pipe(
      uglify({
        toplevel: true,
      }).on("error", notify.onError())
    )
    .pipe(dest("build"));
};

const buildImages = () => {
  return src([
    "src/image/**/*.jpg",
    "src/image/**/*.png",
    "src/image/**/*.jpeg",
    "src/image/**/*.svg",
  ])
    .pipe(image())
    .pipe(dest("build/image"));
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "build",
    },
  });
};

watch("index.html", buildHtmlMinify);
watch("src/css/*.scss", buildStyles);
watch("src/*.js", buildScripts);
watch("src/fonts/**", buildResources);

exports.clean = clean;
exports.buildClean = buildClean;
exports.styles = buildStyles;

exports.build = series(
  buildClean,
  buildResources,
  buildHtmlMinify,
  buildStyles,
  buildCssFiles,
  buildScripts,
  buildImages,
  watchFiles
);
exports.default = series(
  clean,
  buildResources,
  buildHtmlMinify,
  buildStyles,
  buildCssFiles,
  buildScripts,
  buildImages,
  watchFiles
);
