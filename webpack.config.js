const { resolve } = require('path')

module.exports = {
  entry: [
    './app.jsx',
  ],
  output: {
    filename: 'app.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: resolve(__dirname, 'app'),
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      }
    ]
  },
  resolve: { extensions: [ '.js', '.jsx' ] }
}
