const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  devServer: {
    hot: true,
    inline: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "[DevServer] React + Webpack + ESlint Boilerplate",
      description: "Boilerplate setup for react, webpack and eslint",
      template: "./src/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.BUILD_ENV": JSON.stringify(
        process.env.BUILD_ENV || "development"
      )
    })
  ]
};
