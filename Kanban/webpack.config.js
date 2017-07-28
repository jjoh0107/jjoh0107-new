/**
 * Created by jihye on 2017-07-25.
 */
var config = {
    entry: __dirname + '/app/app.js',
    output: {
        path: __dirname + '/public',  //��� ����� �ùٸ� ������ �����ϴ� ���� �ڹٽ�ũ��Ʈ ������ ������ ��ġ�� webpack�� �˷���
        filename: 'index.js'    //index.html���� ����
    },
    devServer: {    //���ð����� ���� ���� ���߼����� �ɼ����� ����
        inline: true,   //true : ���� Ŭ���̾�Ʈ ��Ʈ���� ���鿡 ������ �������� ����Ǹ� ���ΰ�ħ
        port: 8080  //������ port��ȣ
    },
    module: {
        loaders: [{
            test: /.jsx?$/, //�δ��� ����� Ȯ���ڸ� �߰�
            exclude: /node_modules/,    //�δ� ����� ������ ����� �߰�
            loader: 'babel-loader',    //�δ� ���� - ��� jsx�� �Ϲ� �ڹٽ�ũ��Ʈ �ڵ�� ��ȯ�ϴ� �ڹٽ�ũ��Ʈ �����Ϸ�
            query: {
                presets: ['es2015', 'react']}
        }]
    },
    devServer: {    //webpack ���߼��� ����, ���� ������ �ȵ������� ������Ʈ ��Ʈ�� �ִ� ������ ���� ��.
        contentBase: "./public",    //public ���� ������ ���� �ϰڴٴ� �ǹ�
        historyApiFallback: true,   //���� �ּ°� ���ε��� �ʴ� ��� ��û�� ��ٷ� /��(index.html) ����� ��
        inline: true    // �������� ����Ǹ� ���� ��ħ
    },
}
module.exports = config;