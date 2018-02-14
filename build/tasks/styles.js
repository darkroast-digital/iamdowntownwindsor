import gulp from 'gulp'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import rename from 'gulp-rename'
import browserSync from 'browser-sync'

var styles = () => {
    return gulp.src(PATH_CONFIG.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({browsers: ['last 2 version']}),
        ]))
        .pipe(rename({
            basename: 'app'
        }))
        .pipe(gulp.dest(PATH_CONFIG.styles.dest))
        .pipe(browserSync.stream())
}


gulp.task('styles', styles)
module.exports = styles
