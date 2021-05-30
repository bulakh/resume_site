const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const path = require("path");

const config = {
  entry: {
    index: [
      "./source/js/button-up.js",
      "./source/js/navigation.js",
      "./source/js/toggle.js",
      "./source/js/about.js",
    ]
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
            }
        }
    },
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
      }),
    ]
  },
  output: {
    filename: "bundle.js",
    // path: path.resolve(__dirname),
    iife: true
  },
  mode: "development"
};

module.exports = config;
