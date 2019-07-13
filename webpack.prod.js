const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[contentHash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '[Production] React + Webpack + ESlint Boilerplate',
      description: 'Boilerplate setup for react, webpack and eslint',
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'production'
      ),
      'process.env.BUILD_ENV': JSON.stringify(
        process.env.BUILD_ENV || 'development'
      )
    })
  ]
}
