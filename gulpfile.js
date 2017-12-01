
var gulp     = require('gulp');
var sass     = require('gulp-sass');
var jetpack  = require('fs-jetpack');

var appDir   = jetpack.cwd('app');
var buildDir = jetpack.cwd('build');

var importCss = require('gulp-import-css');

gulp.task('build', ['copy', 'scss', 'css'], function () {
    return;
});

gulp.task('copy', ['clean'], function () {
    return appDir.copy('.', buildDir.path(), {
        matching: [ 'html/**'
                  , 'js/**'
                  , 'images/**'
                  , 'core.js'
                  , 'view.html'
                  , 'package.json'
                  , 'node_modules/**'
                  ]
    });
});

gulp.task('clean', function () {
    return buildDir.remove();
});

gulp.task('css', function() {
  return gulp.src(appDir.path('css/global_static.css'))
          .pipe(importCss())
          .pipe(gulp.dest(buildDir.path('css')));
});

gulp.task('scss', function () {
    return gulp.src(appDir.path('sass/global_dynamic.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(buildDir.path('css')));
});

//gulp.task('sass', function () {
    //return gulp.src(appDir.path('sass/**/*.sass'))
        //.pipe(sass().on('error', sass.logError))
        //.pipe(gulp.dest(buildDir.path('css')));
//});
