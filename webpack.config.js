const CssExtractRspackPlugin = require("mini-css-extract-plugin");
const path = require("path");

/** @type {import("webpack").Configuration} */
module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./webpack-dist"),
    assetModuleFilename: "aaa-[contenthash][ext]"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [CssExtractRspackPlugin.loader, "css-loader"]
      },
      {
        test: /\.png$/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new CssExtractRspackPlugin({
      filename: "[name].css"
    })
  ],
  experiments: {
    css: false
  },
};
