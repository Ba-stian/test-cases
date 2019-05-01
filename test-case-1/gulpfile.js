const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('reload', function () {
    return gulp.src('./sass/*.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 15 version'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload());
})

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./sass/*.sass', gulp.parallel('reload'));
});

/*routes to sass & css was changed, need to inspect*/