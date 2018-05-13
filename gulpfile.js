const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      svgStore = require('gulp-svgstore'),
      svgMin = require('gulp-svgmin'),
      path = require('path'),
      fs = require('fs'),
      rename = require('gulp-rename');

gulp.task('scss',function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions','> 1%','ie 8','ie 7'],{cascade:true}))
        .pipe(gulp.dest('public/css/'))
        /*.pipe(browserSync.reload({stream:true}))*/
});

gulp.task('watch',[/*'browser-sync',*/'scss'],function () {
    gulp.watch('./scss/**/*.+(scss)',['scss']);
});

gulp.task('svg',function() {
    return gulp.src('./images/svg_icon/*.svg')
        .pipe(svgMin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgStore())
        /*.pipe(file => console.log(file))*/
        .pipe(rename({basename: 'sprite'}))
        .pipe(gulp.dest('./images'));
});

gulp.task('fsRead',() => {
    let svgSprite = fs.readFileSync('./images/sprite.svg', 'utf8'),
        svgSpriteCompanent = fs.readFileSync('./src/SvgSprite.js', 'utf8');
    //xlinkHref
    console.log(svgSpriteCompanent.replace(/<svg.+/igm, svgSprite));

    fs.writeFileSync('./src/SvgSprite.js',svgSpriteCompanent.replace(/<svg.+/igm, svgSprite.replace(/xlink:href|xmlns:xlink/igm,'xlinkHref')));
});

gulp.task('default',['watch']);