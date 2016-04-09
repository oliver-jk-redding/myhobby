var path = require('path')

module.exports = {
  entry: ["webpack/hot/dev-server", "./src/main.js"],
  output: {
    path: __dirname + '/public',
    publicPath: "/public/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css" },
      { test: /\.jade$/, loader: "jade" },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};