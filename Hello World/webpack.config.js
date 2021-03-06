/**
 * Created by jihye on 2017-07-25.
 */
var config = {
    entry: __dirname + '/router/app/App.js',
    output: {
        path: __dirname + '/public',  //모든 모듈을 올바른 순서로 포함하는 단일 자바스크립트 파일을 저장할 위치를 webpack에 알려줌
        filename: 'index.js'    //index.html에서 참조
    },
    devServer: {
        contentBase: "./public",    //public 하위 파일을 서비스 하겠다는 의미
        inline: true,
        port: 8080,  //접속할 port번호
        historyApiFallback: true    //이거 입력안하면 웹상으로 볼수가 없음..... 파일 목록만 뜸......
    },
    module: {
        loaders: [{
            test: /.jsx?$/, //로더를 사용할 확장자를 추가
            exclude: /node_modules/,    //로더 사용을 제외한 대상을 추가
            loader: 'babel-loader',    //로더 설정 - 모든 jsx를 일반 자바스크립트 코드로 변환하는 자바스크립트 컴파일러
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