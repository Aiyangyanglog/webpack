let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
// 模块happypack可以实现多线程打包
let happypack = require('happypack');
module.exports = {
    // optimization: {
    //     splitChunks: {// 分割代码块
    //         cacheGroups: {// 缓存组
    //             common: {// 公共的模块
    //                 chunks: 'initial',
    //                 minSize: 0,
    //                 minChunks: 2,
    //             },
    //             vendor: {
    //                 priority: 1,
    //                 test: /node_modules/,
    //                 chunks: 'initial',
    //                 minSize: 0,
    //                 minChunks: 2
    //             }
    //         },
            
    //     }
    // },
    mode: 'production',
    entry: {
        index: './src/index.js',
    },
    devServer: {
        hot: true,
        port: 3000,
        open: true,
        contentBase: './dist'
    },
    module: {
        noParse: /jquery/, // 不去解析jquery中的依赖库
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                include: path.resolve('src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    }
                }
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        // new webpack.DllReferencePlugin({
        //     manifest: path.resolve(__dirname,'dist','manifest.json')
        // }),
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),
        new HtmlWebpackPlugin({
            template: './pulic/index.html'
        }),
        new webpack.NamedModulesPlugin(),// 打印更新的模块路径
        new webpack.HotModuleReplacementPlugin() // 热更新插件
    ]
}