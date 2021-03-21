let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let Webpack = require('webpack');

//1. cleanWebpackPlugin(重新打包会清除之前的打包文件)
//2. copyWebpackPlugin(拷贝指定文件到打包后的文件)
//3. bannerPlugin 内置(给打包之后的js文件加上声明)
module.exports = {
    // 多入口
    entry: {
        home: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    // 1.源码映射 会单独生成一个sourcemap文件 会标识当前报错的列和行
    // devtool: 'source-map', //增加映射文件 可以帮我们调试源代码
    // 2.不会产生单独的文件 但是可以显示行和列
    // devtool: 'eval-source-map',
    // 3.不会产生列 但是是一个单独的映射文件
    // devtool: 'cheap-module-source-map',
    // 4.不会产生文件 集成在打包后的文件中 不会产生列
    // devtool: 'cheap-module-eval-source-map',
    resolve: { // 解析 第三方包 common
        modules: [path.resolve('node_modules')],
        extensions: ['.js', '.css', '.json', '.vue'],
        // mainFields: ['style','main']
        // alias: { // 别名
        //     bootstrap: 'bootstrap/dist/css/bootstrap.css'
        // }
    },
    devServer: {
        // 1.代理的方式实现跨域
        // proxy: { 
        //     '/api': {
        //         target: 'http://localhost:3000',
        //         pathRewrite: {'/api': ''},
        //     } // 配置了一个代理
        // }
        // 2.只想单纯的模拟数据mock
        // before(app) { // 提供的方法 钩子
        //     app.get('/user',(req,res)=>{
        //         res.json({name: "hello before"})
        //     });
        // }
        // 3.有服务端 不用代理来处理 能不能在服务端启动webpack 端口用服务端端口
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new Webpack.DefinePlugin({
            DEV: JSON.stringify('production'),
            FLAG: 'true',
            EXPORESSION: '1+1'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
        // new CleanWebpackPlugin('./dist'),
        // new CopyWebpackPlugin([
        //     {
        //         from: './doc',to: './dist'
        //     }
        // ]),
        // new Webpack.BannerPlugin('make 2021 by ayy')
    ]
}