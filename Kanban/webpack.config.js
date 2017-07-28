/**
 * Created by jihye on 2017-07-25.
 */
var config = {
    entry: __dirname + '/app/app.js',
    output: {
        path: __dirname + '/public',  //모든 모듈을 올바른 순서로 포함하는 단일 자바스크립트 파일을 저장할 위치를 webpack에 알려줌
        filename: 'index.js'    //index.html에서 참조
    },
    devServer: {    //로컬개발을 위해 웹팩 개발서버를 옵션으로 제공
        inline: true,   //true : 작은 클라이언트 엔트리를 번들에 삽입해 페이지가 변경되면 새로고침
        port: 8080  //접속할 port번호
    },
    module: {
        loaders: [{
            test: /.jsx?$/, //로더를 사용할 확장자를 추가
            exclude: /node_modules/,    //로더 사용을 제외할 대상을 추가
            loader: 'babel-loader',    //로더 설정 - 모든 jsx를 일반 자바스크립트 코드로 변환하는 자바스크립트 컴파일러
            query: {
                presets: ['es2015', 'react']}
        }]
    },
    devServer: {    //webpack 개발서버 구성, 따로 설정이 안되있으면 프로젝트 루트에 있는 파일을 서비스 함.
        contentBase: "./public",    //public 하위 파일을 서비스 하겠다는 의미
        historyApiFallback: true,   //기존 애셋과 매핑되지 않는 모든 요청이 곧바로 /로(index.html) 라우팅 됨
        inline: true    // 페이지가 변경되면 새로 고침
    },
}
module.exports = config;