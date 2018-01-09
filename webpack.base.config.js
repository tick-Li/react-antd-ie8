const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const es3ifyWebpackPlugin = require("es3ify-webpack-plugin");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// const HappyPack = require('happypack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLESS = new ExtractTextPlugin('[name].css', {
	allChunks: true,
	disable: false
});


const baseConfig = {
	entry: {
		main: path.join(__dirname, "src/index.js"),
		commons: [
			"es5-shim",
			"es5-shim/es5-sham",
			'react',
			'react-dom',
			'react-router-dom'
		]
	},
	output: {
		path: path.join(__dirname, "./dist"),
		filename: '[name].js',
		chunkFilename: '[name].js'
	},
	module: {
		postLoaders: [{
			test: /\.(jsx|js)$/,
			loaders: ['export-from-ie8/loader']
		}],
		loaders: [{
			test: /\.(jsx|js)$/,
			// loaders: ['happypack/loader?id=babel'],
			loaders: ['babel-loader?cacheDirectory'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192&name=images/[hash:5].[name].[ext]'
		}, {
			test: /\.(css|less)$/,
			// loaders: ['happypack/loader?id=style']
			loaders: ['style-loader', extractLESS.extract(['css-loader', 'less-loader'])]
		}]
	},
	plugins: [
		new CommonsChunkPlugin({
			name: 'commons',
			filename: "commons.js",
			minChunks: 2
		}),
		// new HappyPack({
		// 	id: 'babel',
		// 	loaders: ['babel-loader?cacheDirectory'],
		// 	threads: 4,
		// }),
		// new HappyPack({
		// 	id: 'style',
		// 	loaders: ['style-loader', extractLESS.extract(['css-loader', 'less-loader'])],
		// 	threads: 4,
		// }),
		// new webpack.DllReferencePlugin({
		// 	context: path.join(__dirname, "src/index.html"),
		// 	manifest: require('./src/lib/manifest.json')
		// }),
		extractLESS,
		new es3ifyWebpackPlugin(),
		new htmlWebpackPlugin({
			template: path.join(__dirname, "src/index.html"),
		})
	],
	resolve: {
		extensions: ['', '.js', '.jsx', '.jpg', '.png'],
		alias: {
			components: path.join(__dirname, 'src/components'),
			router: path.join(__dirname, 'src/router'),
			img: path.join(__dirname, 'src/images'),
			plugins: path.join(__dirname, 'src/plugins')
		}
	}
}
module.exports = baseConfig;