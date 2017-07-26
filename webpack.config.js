/**
 * Created by jihye on 2017-07-25.
 */
var config = {
    entry: __dirname + './main.js',
    output: {
        path: __dirname + './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [{
            test: /.jsx?$/, //로더를 사용할 확장자를 추가
            exclude: /node_modules/,    //로더 사용을 제외한 대상을 추가
            loader: 'babel',    //로더 설정
            query: {presets: ['es2015', 'react']}
        }]
    }
}
module.exports = config;