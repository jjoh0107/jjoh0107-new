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
            test: /.jsx?$/, //�δ��� ����� Ȯ���ڸ� �߰�
            exclude: /node_modules/,    //�δ� ����� ������ ����� �߰�
            loader: 'babel',    //�δ� ����
            query: {presets: ['es2015', 'react']}
        }]
    }
}
module.exports = config;