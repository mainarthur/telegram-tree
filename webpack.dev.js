const common = require("./webpack.common.js");

const config = {
  ...common,
  mode: "development",
  devServer: {
    historyApiFallback: true,
    port: 3000,
    disableHostCheck: true,
  },
};

module.exports = config;
