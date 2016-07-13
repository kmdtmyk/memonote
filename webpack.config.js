var webpack = require('webpack')
var path = require('path')


module.exports = {
  context: __dirname + '/src',
  entry: {
    'index': './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue',
      },
    ],
  },
  resolve: {
    moduleDirectories: [
      'node_modules',
    ],
    extensions: ['', '.js', '.vue']
  },
  devtool: 'eval',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: 'client',
  },
  watchOptions: {
    poll: true,
  },
}
