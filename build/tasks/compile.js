import glob from 'glob'
import gulp from 'gulp'
import twig from 'gulp-twig'
import rename from 'gulp-rename'
import yaml from 'yamljs'
import fs from 'fs'

const extension = '.yaml';


var compile = () => {
    var files = glob.sync('src/views/*')

    files.forEach((file) => {

        fs.lstat(file, (err, stats)=> {
            if (err) {
                return console.log('err')
            }

            if (stats.isDirectory()) {

                var dirName = file.split('/').pop()

                if (dirName != 'layouts') {
                    if (!fs.existsSync('site/' + dirName)) {
                        fs.mkdirSync('site/' + dirName)
                    }

                    var children = glob.sync('./src/views/' + dirName + '**/*.twig')

                    children.forEach((file) => {
                        var name = file.split('/').pop().replace('.twig', '')

                        var data = fs.readFileSync('./src/content/' + dirName + '/' + name + extension).toString()
                        var content = yaml.parse(data)

                        if (name == 'index' || name == 'home') {
                            
                            return gulp.src('./src/views/' + dirName + '/' + name + '.twig')
                            .pipe(twig({
                                data: content
                            }))
                            .pipe(rename('/index.html'))
                            .pipe(gulp.dest('./site/' + dirName))
                        } else {
                            
                            return gulp.src('./src/views/' + dirName + '/' + name + '.twig')
                                .pipe(twig({
                                data: content
                            }))
                                .pipe(rename('/' + name + '/index.html'))
                                .pipe(gulp.dest('./site/' + dirName))
                        }
                    })
                }
            } else {
                var name = file.split('/').pop().replace('.twig', '')

                var data = fs.readFileSync('./src/content/' + name + extension).toString()
                var content = yaml.parse(data)

                if (name == 'index' || name == 'home') {

                    return gulp.src('src/views/' + name + '.twig')
                        .pipe(twig({
                            data: content
                        }))
                        .pipe(rename('/index.html'))
                        .pipe(gulp.dest('./site/'))

                    } else {

                        return gulp.src('./src/views/' + name + '.twig')
                        .pipe(twig({
                            data: content
                        }))
                        .pipe(rename('/' + name + '/index.html'))
                        .pipe(gulp.dest('./site/'))

                    }
            }
        })
    })
}

gulp.task('compile', compile)
module.exports = compile
