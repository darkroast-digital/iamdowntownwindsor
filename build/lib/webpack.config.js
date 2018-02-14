import path from 'path'
import webpack from 'webpack'

module.exports = {
    entry: path.resolve(__dirname + '/../../src/assets/js/main.js'),
    output: {
        path: path.resolve(__dirname + '/../../site/assets/js/'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
