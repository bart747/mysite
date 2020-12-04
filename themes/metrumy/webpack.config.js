const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'main-bundle.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/preset-react']}
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
}
