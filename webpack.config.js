const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, 'public'),
	},
	resolve: {
		extensions: ['.js', '.ts', '.wasm', '.tsx']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			favicon: "./src/assets/favicon.png",
			title: 'Zappar Universal AR',
			minify: {
				collapseWhitespace: true,
				minifyCSS: true,
			},
		})
	],
	output: {
		publicPath: '/'
	},
	devServer: {
		contentBase: './dist/',
		historyApiFallback: true,
		https: true,
		host: "0.0.0.0",
		hot: true,
		open: true,
	},
	module: {
		rules: [{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			}, {
				test: /\.(sa|sc|c)ss$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /zcv\.wasm$/,
				type: 'javascript/auto',
				loader: 'file-loader'
			},
			{
				test: /\.(zpt|png|gif|glb|gltf|jpe?g|ogg|mp3|obj|fbx|wav|ttf|fnf|woff|stl|mp4|hdr|webm)$/,
				use: [{
					loader: 'file-loader',
					options: {
						outputPath: 'assets',
						name: '[sha256:hash:base64:16].[ext]',
					},
				}],
			},
		]
	}
};
