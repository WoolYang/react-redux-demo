'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');  //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',  //开发环境使用

    entry: __dirname + '/src/index.js', //唯一入口文件
    output: {
        path: __dirname + '/build', //打包后的文件存放的地方
        filename: 'bundle.js' //打包后输出文件的文件名
    },

    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              loader: 'jsx-loader!babel-loader',
              exclude: /node_modules/
            },
            {
              test: /\.css$/,
              loader:ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader'
              })
            },
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract({
                fallbackLoader:'style-loader',
                loader: 'css-loader!sass-loader'
              })
            },
            {
              test: /\.less$/,
              loader: ExtractTextPlugin.extract({
                fallbackLoader:'style-loader',
                loader: 'css-loader!less-loader'
              })
            },
            {
              test: /\.(png|jpg|jpeg|gif)$/,
              loader: 'url-loader?limit=30000'
            },
            {
              test: /\.(svg|ttf|eot|svg|woff(\(?2\)?)?)(\?[a-zA-Z_0-9.=&]*)?(#[a-zA-Z_0-9.=&]*)?$/,
              loader: 'file-loader'
            }
        ]
    },

    devServer: {
        //contentBase: './dist'  //本地服务器所加载的页面所在的目录
        port: 8888,
        colors: true,  //终端中输出结果为彩色
        historyApiFallback: true,  //不跳转
        inline: true  //实时刷新
    },

    plugins: [
       new ExtractTextPlugin('main.css')
    ]

}
