var webpack = require('webpack')


module.exports = {
  context: __dirname + '/src',
  entry: {
    'index': './index.js',
  },
  output: {
    path: __dirname + '/client',
    filename: '[name].js',
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: 'client',
  },
  watchOptions: {
    poll: true,
  },
}
