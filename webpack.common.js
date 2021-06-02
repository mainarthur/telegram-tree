const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
  entry: { index: path.resolve(__dirname, "ui/index.jsx") },
  output: {
    path: path.resolve(__dirname, "static/build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "static/index.html"),
      filename: "index.html",
    }),
  ],
};

module.exports = config;
