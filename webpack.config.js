const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'env', 'stage-3']
			}
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: '../public'
	},
	externals: {
		'react/addons': true,
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	}
};