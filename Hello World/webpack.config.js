/**
 * Created by jihye on 2017-07-25.
 */
var config = {
    entry: __dirname + '/main.js',
    output: {
        path: __dirname + '/',  //��� ����� �ùٸ� ������ �����ϴ� ���� �ڹٽ�ũ��Ʈ ������ ������ ��ġ�� webpack�� �˷���
        filename: 'index.js'    //index.html���� ����
    },
    devServer: {
        inline: true,
        port: 8081  //������ port��ȣ
    },
    module: {
        loaders: [{
            test: /.jsx?$/, //�δ��� ����� Ȯ���ڸ� �߰�
            exclude: /node_modules/,    //�δ� ����� ������ ����� �߰�
            loader: 'babel-loader',    //�δ� ���� - ��� jsx�� �Ϲ� �ڹٽ�ũ��Ʈ �ڵ�� ��ȯ�ϴ� �ڹٽ�ũ��Ʈ �����Ϸ�
            query: {
                presets: ['es2015', 'react']}
        }]
    }
}
module.exports = config;