'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');  //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        app:[ 'webpack-hot-middleware/client',path.resolve(__dirname,'./src/index.js')]
    //    vendors:['react']
    },
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
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

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new ExtractTextPlugin('main.css'),
        new webpack.optimize.UglifyJsPlugin({minimize:true}),
     //   new webpack.optimize.CommonsChunkPlugin({name:'vendors',filename:'vendors.js'}),
        new HtmlWebpackPlugin({
            title:"myblog",
            filename:'index.html',
            template:'index.html'      //Load a custom template 
        }),
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:JSON.stringify('production')
            }
        })
    ]

}