const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  devServer: {
    hot: true,
    inline: true,
    open: true,
    historyApiFallback: true
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
          name: '[name].[contenthash].[ext]'
        }
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `[${process.env.BUILD_ENV}] React + Webpack + ESlint Boilerplate`,
      description: 'Boilerplate setup for react, webpack and eslint',
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'process.env.BUILD_ENV': JSON.stringify(
        process.env.BUILD_ENV || 'development'
      )
    })
  ]
}
