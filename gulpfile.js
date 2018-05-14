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
        .pipe(gulp.dest('public/css/'));
});

gulp.task('svgCompileSprite',function() {
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
        .pipe(svgStore({
            mode: {
                symbol: {
                    inline: true,
                    example: true
                }
            },
            inlineSvg: true}))
        .pipe(rename({basename: 'sprite'}))
        .pipe(gulp.dest('./images'));
});

gulp.task('svg',['svgCompileSprite','fsWriteSprite']);

gulp.task('fsWriteSprite',() => {
    let svgSprite = fs.readFileSync('./images/sprite.svg', 'utf8'),
        svgSpriteCompanent = fs.readFileSync('./src/SvgSprite.jsx', 'utf8'),
        regExpArray = [
                        ['xlink:href','xlinkHref'],
                        ['xmlns:xlink','xmlnsXlink'],
                        ['stroke-miterlimit','strokeMiterlimit'],
                        ['stroke-width','strokeWidth'],
                        ['clip-path','clipPath']
                    ];

    regExpArray.forEach(item => {
       let reg = new RegExp(item[0],'igm');
       svgSprite = svgSprite.replace(reg,item[1]);
    });

    fs.writeFileSync('./src/SvgSprite.jsx',svgSpriteCompanent.replace(/<svg.+/igm, svgSprite));
});

gulp.task('watch',['svg','scss'],function () {
    gulp.watch('./scss/**/*.scss',['scss']);
    gulp.watch('./images/**/*.+(svg)',['svg']);
});

gulp.task('default',['watch']);