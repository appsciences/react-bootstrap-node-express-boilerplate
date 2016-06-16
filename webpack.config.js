var path = require('path');
var webpack = require('webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    entry: {
        'app': './app/js/app.js'
    },

    output: {
        path: './build',
        filename: 'js/app.bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react','es2015']
                }
            }
        ]
    },

    plugins: [
        // copy static files
        new CopyWebpackPlugin([
            { from: './app/images', to: 'images' },
            { from: './app/index.html', to: 'index.html' },
        ])
    ]

};

module.exports = config;