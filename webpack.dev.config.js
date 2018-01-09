const path = require("path");
const merge = require('webpack-merge');
const webpack = require('webpack');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');

const PORT = 8000;

const devConfig = {
	// devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('dev'),
			IS_DEVELOPMETN: true,
		}),
		new ProgressBarPlugin(),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 8001,
			proxy: `http://localhost:${PORT}/`
		})
	],
	devServer: {
		contentBase: "./dist",
		historyApiFallback: true,
		port: PORT,
		noInfo: true
	},
};

module.exports = merge(baseConfig, devConfig);