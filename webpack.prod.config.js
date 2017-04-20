const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');

module.exports = function () {
    return webpackMerge(commonConfig, {

        plugins: [
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/,
                cssProcessorOptions: {discardComments: {removeAll: true}}
            }),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.BannerPlugin('created by Liliia Sydorenko'),
            // new webpack.optimize.CommonsChunkPlugin({
            //   name: "common",
            // })

        ]
    })
};
