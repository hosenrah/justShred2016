var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./views"
        }
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("./views/*.html").on('change', bs.reload(stream:true));
});