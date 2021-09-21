/*
 * @LastEditors: 杜康
 * @LastEditTime: 2021-09-21 14:50:39
 */
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = {
  entry: {
    main: './main.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: '/\.css$/',
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader',
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
}

module.exports = config