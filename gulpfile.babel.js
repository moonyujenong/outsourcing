const gulp = require('gulp')
const $ = require('gulp-load-plugins')()
const Path = require('path')
let generateSourceMaps = process.env.NODE_ENV !== 'production'

if (process.env.SOURCEMAPS === 'true' || process.env.SOURCEMAPS === '1') {
  generateSourceMaps = true
}

// scss 사용 할 때
const taskSass = function () { 
  return gulp.src(['./**/assets/src/scss/**/*.scss'])
    .pipe($.if(generateSourceMaps, $.sourcemaps.init()))
    .pipe($.plumber())
    .pipe($.sass({
      // includePaths: sassPaths,
      outputStyle: (generateSourceMaps) ? 'expanded' : 'compressed'
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe($.rename(function (filepath) {
      filepath.dirname = Path.join(filepath.dirname, '../../css')
    }))
    .pipe($.if(generateSourceMaps, $.sourcemaps.write('.')))
    .pipe(gulp.dest('.'))
}
taskSass.displayName = 'sass'



// const taskPosthtml = function () {
//   const options = {
//     root: '../markup/src'
//   }
//
//   const plugins = [
//     require('posthtml-extend')(options),
//     require('posthtml-include')(options)
//   ]
//
//   return gulp.src(['../markup/src/**/*.html', '!**/_*.html'])
//     .pipe($.posthtml(plugins))
//     .pipe(gulp.dest('../markup'))
// }
// taskPosthtml.displayName = 'posthtml'

const taskWatch = function () {
  gulp.watch(['./**/assets/src/scss/**/**/*.scss'], gulp.series(taskSass))
  // gulp.watch(['./**/assets/src/scss/**/*.scss'], gulp.series(themeTaskSass))
  // gulp.watch(['Components/Themes/assets/src/js/*.js'], gulp.series(taskScript))
  // gulp.watch(['../markup/src/**/*.html'], gulp.series(taskPosthtml))
}

// gulp.task('default', gulp.series(taskSass, taskScript)) => taskScript 사용 안해서 제외
gulp.task('default', gulp.series(taskSass))
gulp.task('build', gulp.series(taskSass))
gulp.task('watch', taskWatch)

// gulp.task(taskScript)
gulp.task(taskSass)
 
// gulp.task(taskPosthtml)

// gulp.task('lint', gulp.series(taskLintStyle))
// gulp.task(taskLintStyle)
// gulp.task(taskFixStyle)
