import gulp from 'gulp'
import browserSync from 'browser-sync'

var serve = () => {
    browserSync.init({
        server: './site'
    })

    gulp.watch(PATH_CONFIG.views.src, ['compile']);
    gulp.watch(PATH_CONFIG.styles.src, ['styles'])
    gulp.watch(PATH_CONFIG.scripts.src, ['webpack'])
    gulp.watch('site/**/*.js').on('change', browserSync.reload)
    gulp.watch(PATH_CONFIG.views.dest).on('change', browserSync.reload)
}


gulp.task('serve', serve)
module.exports = serve
