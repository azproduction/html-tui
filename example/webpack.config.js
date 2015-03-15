var path = require('path');

module.exports = {
	target: 'web',
    entry: {
        index: path.join(__dirname, 'index.js')
    },
    output: {
        path: path.join(__dirname, '_assets'),
        filename: '[name].js',
		pathinfo: true,
		publicPath: '/_assets/'
    },
	resolve: {
		root: __dirname,
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'inline-source-map',
    module: {
        loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime' }
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, '../../node_modules')
    }
};
