import gulp from 'gulp'

import paths from './paths.json'

global.PATH_CONFIG = paths

import compile from './tasks/compile.js'
import styles from './tasks/styles.js'
import webpack from './tasks/webpack.js'
import serve from './tasks/serve.js'

gulp.task('default', ['serve'])
