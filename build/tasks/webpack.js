import gulp from 'gulp'
import webpack from 'webpack'

import config from '../lib/webpack.config.js'


var scripts = () => {
    webpack(config, (err, stats) => {
        if (err) {
            console.log(err)
        }
    })
}


gulp.task('webpack', scripts)
module.exports = webpack
