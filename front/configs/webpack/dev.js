// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    hot: true,
    historyApiFallback: true, // to react-router-dom
    port: 3000,
  },
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshPlugin()],
});

