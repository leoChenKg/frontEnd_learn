const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const BaseConfig = () => {
  return {
    devtool: 'source-map',
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /(node_modules)/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          exclude: /(node_modules)/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlPlugin({
        template: path.resolve(__dirname, '../index.html')
      })
    ],
    devServer: {
      port: 3000,
      historyApiFallback: true
    }
  }
}

module.exports = BaseConfig
