/**
 * Created by jihye on 2017-07-25.
 */
var config = {
    entry: __dirname + '/router/app/App.js',
    output: {
        path: __dirname + '/public',  //��� ����� �ùٸ� ������ �����ϴ� ���� �ڹٽ�ũ��Ʈ ������ ������ ��ġ�� webpack�� �˷���
        filename: 'index.js'    //index.html���� ����
    },
    devServer: {
        contentBase: "./public",    //public ���� ������ ���� �ϰڴٴ� �ǹ�
        inline: true,
        port: 8080,  //������ port��ȣ
        historyApiFallback: true    //�̰� �Է¾��ϸ� �������� ������ ����..... ���� ��ϸ� ��......
    },
    module: {
        loaders: [{
            test: /.jsx?$/, //�δ��� ����� Ȯ���ڸ� �߰�
            exclude: /node_modules/,    //�δ� ����� ������ ����� �߰�
            loader: 'babel-loader',    //�δ� ���� - ��� jsx�� �Ϲ� �ڹٽ�ũ��Ʈ �ڵ�� ��ȯ�ϴ� �ڹٽ�ũ��Ʈ �����Ϸ�
            query: {
                presets: ['es2015', 'react']}
        },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    }
}
module.exports = config;