var del         = require('del');
var fs          = require('fs');
var gulp        = require('gulp');
var merge       = require('merge-stream');
var ngAnnotate  = require('gulp-ng-annotate');
var parallel    = require('concurrent-transform');
var request     = require('request');
var runSequence = require('run-sequence');

gulp.task('clean', function () {
    return del.sync([
        'dist/**/*'
    ]);
});

gulp.task('copy-app', function ()
{
    var moveApp1 = gulp.src(['app/**']).pipe(gulp.dest('dist/app'));
    var moveApp2 = gulp.src(['index.html']).pipe(gulp.dest('dist/'));

    return merge(moveApp1, moveApp2);
});

gulp.task('copy-data', function ()
{
    var moveData = gulp.src(['data/**']).pipe(gulp.dest('dist/data'));

    return merge(moveData);
});

gulp.task('copy-static-assets', function ()
{
    var moveBower      = gulp.src(['bower_components/**']).pipe(gulp.dest('dist/bower_components'));
    var moveCss        = gulp.src(['assets/css/**']).pipe(gulp.dest('dist/assets/css'));
    var moveImages     = gulp.src(['assets/images/**']).pipe(gulp.dest('dist/assets/images'));
    var moveJavascript = gulp.src(['assets/js/**']).pipe(gulp.dest('dist/assets/js'));

    return merge(moveBower, moveCss, moveImages, moveJavascript);
});

gulp.task('default', function()
{
    return runSequence(
          'clean'
        , 'copy-static-assets'
        , 'copy-app'
        , 'copy-data'
    );
});