const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV || 'development';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname + '/src',

  entry: {
    "index": "./js/module/index.js",
    "common": "./js/global.js"
  },
  output: {
    path: __dirname + '/public',
    filename: 'js/[name].js',
  },

  module: {
    loaders: [

      {
        enforce: 'post',

        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        query: {presets: ['es2015']}
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'postcss-loader', 'sass-loader']}),
      },


    ]
  },
  stats: {
    colors: true
  },

  plugins: [
    new ExtractTextPlugin('css/styles.css'),

    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new CopyWebpackPlugin([
      {from: __dirname + '/src/index.html', to: __dirname + '/public/index.html'}
    ]),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer({ browsers: ['last 10 versions'] })]
      }
    }),
  ]
};
