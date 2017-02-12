module.exports = {
  entry: './app/app.jsx',
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: [ __dirname + '/app' ],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: { extensions: [ '.js', '.jsx' ] }
}
