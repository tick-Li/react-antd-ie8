const path = require("path");
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');

const proConfig = {
    output: {
        path: path.join(__dirname, "./dist"),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: './'
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            IS_DEVELOPMETN: false,
        }),
        new UglifyJSPlugin({
            mangle: {
                screw_ie8: false
            },
            mangleProperties: {
                screw_ie8: false
            },
            compress: {
                screw_ie8: false
            },
            output: {
                screw_ie8: false
            }
        }),
        new OptimizeCssAssetsPlugin(),
        new copyWebpackPlugin([{
            from: path.join(__dirname, './src/favicon.ico'),
            to: path.join(__dirname, './')
        }]),
    ]
};

module.exports = merge(baseConfig, proConfig);