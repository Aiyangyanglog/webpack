// webapck 是node写出来的 node的写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let webpack = require('webpack');

module.exports = {// 开发服务器的位配置
    optimization:{ // 优化项
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCss() // 样式打包文件压缩
        ]
    },
    mode: 'production', // 模式 默认两种 production development
    entry: './src/index.js', // 入口
    output: {
        filename: 'bundle[hash:8].js', // 打包后的文件名
        path: path.resolve(__dirname,'build'), // 路径必须是一个绝对路径
    },
    plugins: [ // 数组 放着所有的webapck插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            // minify: {
            //     removeAttributeQuotes: true, // 去双引号
            //     collapseWhitespace: true, // 单行显示
            // },
            // hash:true

        }),
        new MiniCssExtractPlugin({ // 抽离样式
            filename: 'css/main.css'
        }),
        // new webpack.ProvidePlugin({ // 在每个模块中都注入$
        //     $: 'jquery'
        // })
    ],
    module: {
        rules: [  // loader 默认是从右向左执行 从下到上执行
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                // 做一个限制 当我们的图片 小于多少K的时候用base64来转化
                // 否则用file-loader产生
                use: {
                    loader:'url-loader',
                    options: {
                        limit: 1,
                        outputPath: 'img/'
                    }
                }
            },
            // {
            //     test: require.resolve('jquery'),
            //     use: 'expose-loader?$'
            // },
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: 'eslint-loader', // eslint
            //         options: {
            //             enforce: 'pre' // previous  post
            //         }
            //     },
            // },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: { // 用babel-loader 把es6->es5
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    },
                }
            },
            // 规则 css-loader 解析@import这种语法
            // style-loader 他是把css插入到head的标签中
            // loader的特点 希望单一
            // loader的用法 字符串只用一个loader
            // 多个loader需要[]
            // loader的顺序 默认是从右向左执行
            { 
                test: /\.css$/,
                use: [
                     MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {   // 可以处理less文件
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'] // 把less-> css 
            },
        ]
    }
}