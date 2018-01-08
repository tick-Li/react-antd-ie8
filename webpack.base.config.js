const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const es3ifyWebpackPlugin = require("es3ify-webpack-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HappyPack = require('happypack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLESS = new ExtractTextPlugin('[name].css', {
	allChunks: true,
	disable: false
});


const baseConfig = {
	devtool: 'inline-source-map',
	entry: [
		"es5-shim",
		"es5-shim/es5-sham",
		path.join(__dirname, "src/index.js")
	],
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
			loaders: ['happypack/loader?id=babel'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192&name=images/[hash:5].[name].[ext]'
		}, {
			test: /\.(css|less)$/,
			loaders: ['happypack/loader?id=style']
		}]
	},
	devServer: {
		contentBase: path.join(__dirname, "./dist"),
		historyApiFallback: true,
		//stats: "errors-only",
		noInfo: true
	},
	plugins: [
		new CommonsChunkPlugin({
			name: "chunk",
			filename: "chunk.js",
			minChunks: 2,
			chunks: ["main", "home", "page"]
		}),
		new HappyPack({
			id: 'babel',
			loaders: ['babel-loader?cacheDirectory'],
			threads: 4,
		}),
		new HappyPack({
			id: 'style',
			loaders: ['style-loader', extractLESS.extract(['css-loader', 'less-loader'])],
			threads: 4,
		}),
		new ProgressBarPlugin(),
		extractLESS,
		new es3ifyWebpackPlugin(),
		new htmlWebpackPlugin({
			filename: "index.html",
			template: path.join(__dirname, "src/index.html"),
			inject: true
		}),
		new webpack.DllReferencePlugin({
			context: path.join(__dirname, "src/index.html"),
			manifest: require('./src/vendor/manifest.json')
		}),
		new copyWebpackPlugin([{
			from: path.join(__dirname, './src/plugins'),
			to: path.join(__dirname, './plugins')
		}]),
		new copyWebpackPlugin([{
			from: path.join(__dirname, './src/favicon.ico'),
			to: path.join(__dirname, './')
		}]),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			proxy: "localhost:8080"
		})
	],
	resolve: {
		extensions: ['', '.js', '.jsx', '.jpg', '.png'],
		alias: {
			components: path.join(__dirname, 'src/components'),
			router: path.join(__dirname, 'src/router'),
			img: path.join(__dirname, 'src/images')
		}
	}
}
module.exports = baseConfig;