const gulp = require('gulp')

function devStatic() {
    return gulp.src('./static')
    .pipe(gulp.dest('./dist'))
}
function devUpload() {
    return gulp.src('./upload')
    .pipe(gulp.dest('./dist'))
}

function devWatch() {
    gulp.watch(['./static'], devStatic)
    gulp.watch(['./static'], devUpload)
}

exports.watch = gulp.parallel(devWatch, devUpload, devStatic)