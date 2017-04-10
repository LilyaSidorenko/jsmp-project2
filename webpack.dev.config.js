const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');

module.exports = function () {
    return webpackMerge(commonConfig, {

        watch: true,
        devtool: 'cheap-module-source-map',

        devServer: {
            contentBase: __dirname + "/public/",
            port: 8080,
            watchContentBase: true
        }
    })
};
