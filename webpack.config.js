var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
const svgDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, ''), // 1. 属于 antd-mobile 内置 svg 文件
];

module.exports = {
    entry: {
        index: [
            './app/index.jsx'
        ]
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {

        loaders: [
            //单独css
            { test: /\.css$/, loader: ExtractTextWebpackPlugin.extract({ use: "style-loader", ues: "css-loader", ues: "postcss-loader" }) },
            { test: /\.less$/, loader: 'style!css!postcss!less' },
            { test: /\.scss$/, loader: 'style!css!postcss!sass' },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            //提供html内嵌的imgurl支持
            { test: /\.html$/, loader: 'html-withimg-loader' },
            { test: /\.(png|gif|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=/resource/[name].[ext]' },
            {
                test: /\.(svg)$/i,
                loader: 'svg-sprite',
                include: svgDirs, // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        //提取公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'js/base.js'
        }),
        //单独打包css
        new ExtractTextWebpackPlugin(
            'css/[name].css'),
        //html模板插件
        new HtmlWebpackPlugin({
            template: './app/index.tmpl.html',
            filename: 'index.html',
            inject: true,
            hash: true,
            chunks: ['commons', 'index']
        }),
    ],
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    }

}