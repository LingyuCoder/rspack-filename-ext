const { CssExtractRspackPlugin } = require("@rspack/core");
const path = require("path");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./rspack-dist"),
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
