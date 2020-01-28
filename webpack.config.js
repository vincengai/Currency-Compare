const path = require("path");

module.exports = {
  context: __dirname,
  entry: "/app.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
