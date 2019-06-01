var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  devServer: {
    content: './dist'
  }
};