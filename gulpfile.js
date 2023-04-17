const gulp = require("gulp");
const gulpUglify = require("gulp-uglify");
const clean = require("gulp-clean");

gulp.task("minify", function () {
  return gulp
    .src(["./src/*.js", "./src/*/*.js"])
    .pipe(gulpUglify())
    .pipe(gulp.dest("bin/"));
});

gulp.task("move", function () {
  return gulp.src(["package.json", "node_modules"]).pipe(gulp.dest("bin/"));
});

gulp.task("clean", function () {
  return gulp
    .src("bin", {
      read: false,
      allowEmpty: true,
    })
    .pipe(clean());
});

gulp.task("clean", function () {
  return gulp
    .src("bin", {
      read: false,
      allowEmpty: true,
    })
    .pipe(clean());
});

gulp.task("build", gulp.series("clean", "minify", "move"));
