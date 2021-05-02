const path = require('path')

module.exports = {
  // Файл, с которого начинается клиентская часть Universal web app
  entry: {
    client: './src/client.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}