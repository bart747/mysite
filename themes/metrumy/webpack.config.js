const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, './static/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        /*
        test: /\.js$/,
        enforce: 'pre', // preload
        exclude: /node_modules/, 
        loader: 'jshint-loader',
        options: { esversion: 6 }
        */
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/, 
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { }},
            { loader: 'postcss-loader', options: { }},
            { loader: 'sass-loader', options: { }}
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new uglify(),
    new ExtractTextPlugin('bundle.css'),
  ]
};
