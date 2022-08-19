const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const BaseConfig = () => {
  return {
    devtool: 'source-map',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    resolve: {
      alias: {
        '@utils': path.resolve(__dirname, '../src/utils')
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          exclude: /(node_modules)/,
          use: ['babel-loader']
        },
        {
          test: /\.(ts|tsx)$/i,
          exclude: /(node_modules)/,
          use: ['babel-loader', 'ts-loader']
        },
        {
          test: /\.css$/i,
          exclude: /(node_modules)/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(woff|woff2|eot|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name].[contenthash:8].[ext]'
          }
        },
        {
          test: /\.(png|jpg|jpng|gif|svg)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024
            }
          }
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
