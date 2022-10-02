const path = require('path')
const htmlplugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new htmlplugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ],
  devServer: {
    port: 4001,
    hot: true
  }
}
