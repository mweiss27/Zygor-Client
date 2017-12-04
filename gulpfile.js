
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')
const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

var gulp     = require("gulp");
var sass     = require("gulp-sass");
var jetpack  = require("fs-jetpack");

var appDir   = jetpack.cwd("app");
var buildDir = jetpack.cwd("build");
var distDir = jetpack.cwd("dist");

var nodeDirApp = jetpack.cwd("app/node_modules");
var nodeDirBuild = jetpack.cwd("build/node_modules");

var os = require("os");

var exec = require("child_process").exec;

var importCss = require("gulp-import-css");

gulp.task("build", ["copy", "scss", "css"], function () {
    return;
});

gulp.task("copy_node", function() {
    return nodeDirApp.copy(".", nodeDirBuild.path(), {});
});

gulp.task("copy", function () {
    return appDir.copy(".", buildDir.path(), {
        matching: [ "html/**"
                  , "js/**"
                  , "images/**"
                  , "core.js"
                  , "view.html"
                  , "package.json"
                  ],
        overwrite: true,
    });
});

gulp.task("clean", function () {
    return buildDir.remove();
});

gulp.task("css", function() {
  return gulp.src(appDir.path("css/global_static.css"))
          .pipe(importCss())
          .pipe(gulp.dest(buildDir.path("css")));
});

gulp.task("scss", function () {
    return gulp.src(appDir.path("sass/global_dynamic.scss"))
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(buildDir.path("css")));
});

gulp.task("dist", function(cb) {
  distDir.remove();
  exec("electron-packager build --out=dist --icon=./app.ico --asar=true --prune=true", function(err, stdout, stderr) {
    if (err) {
      cb(err);
      return;
    }
    console.log(stdout);
    console.log(stderr);

    var dirs = getDirectories("dist");
    dirs.forEach(dir => {

      if (os.platform() == "win32") {
        exec("electron-installer-windows --src \"" + dir + "\" --dest dist/installers/", function(err, stdout, stderr) {
          if (err) {
            cb(err);
            return;
          }

          console.log("Successfully packaged Win32App: " + dir);

        });
      }
    });


  });
});

//gulp.task("sass", function () {
    //return gulp.src(appDir.path("sass/**/*.sass"))
        //.pipe(sass().on("error", sass.logError))
        //.pipe(gulp.dest(buildDir.path("css")));
//});
