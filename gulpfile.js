const gulp = require("gulp");
const gulpUglify = require("gulp-uglify");
const clean = require("gulp-clean");

gulp.task("minify", function () {
  return gulp.src(["bin/*.js"]).pipe(gulpUglify()).pipe(gulp.dest("dist/"));
});

gulp.task("remove", function () {
  return gulp.src(["package.json"]).pipe(gulp.dest("dist/"));
});

gulp.task("clean", function () {
  return gulp
    .src("dist", {
      read: false,
      allowEmpty: true,
    })
    .pipe(clean());
});

gulp.task("clean", function () {
  return gulp
    .src("dist", {
      read: false,
      allowEmpty: true,
    })
    .pipe(clean());
});

gulp.task("build", gulp.series("clean", "minify", "remove"));
