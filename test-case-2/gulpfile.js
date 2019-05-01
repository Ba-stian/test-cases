const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const spritesmith = require('gulp.spritesmith');

gulp.task('default', function () {
    return gulp.src('./sass/*.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 15 version'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload())
});

gulp.task('imageMin', function () {
    gulp.src('./img')
        .pipe(imagemin())
        .pipe(gulp.dest('img')).pipe(livereload())
});

gulp.task('minifyJS', function () {
    const minJS = gulp.src('./js/*.js').pipe(uglify());
    return minJS.pipe(gulp.dest('./minjs')).pipe(livereload())
});

gulp.task('minifyCSS', function () {
    const minCSS = gulp.src('./css/*.css').pipe(uglifycss());
       return minCSS.pipe(gulp.dest('./mincss/')).pipe(livereload())
});

gulp.task('sprite', function () {
    const spriteData = gulp.src('./img/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('img')).pipe(livereload())
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./sass/*.sass', gulp.series('default'));
    gulp.watch('./js/*.js', gulp.series('minifyJS'));
    gulp.watch('./css/*.css', gulp.series('minifyCSS'));
    gulp.watch('./img', gulp.series('imageMin'));
    gulp.watch('./img/*.png', gulp.series('sprite'));
});
