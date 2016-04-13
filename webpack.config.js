var path = require('path')

module.exports = {
  entry: ["webpack/hot/dev-server", "./src/main.js"],
  output: {
    path: __dirname + '/assets',
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css" },
      { test: /\.jade$/, loader: "jade" },
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};