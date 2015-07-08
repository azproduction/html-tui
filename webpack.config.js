'use strict';

var webpack = require('webpack');

var plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    );
}

module.exports = {
    output: {
        library: 'htmlTui',
        libraryTarget: 'var'
    },

    plugins: plugins,

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?optional=runtime'
        }]
    }
};
