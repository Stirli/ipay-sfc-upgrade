// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: {
    background: "./app/background/background.js",
    options: "./app/options/options.js",
    popup: "./app/popup/popup.js",
    content: "./content/content.js",
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  devtool: "inline-source-map",
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: "base", to: "./" }],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      minify: false,
      scriptLoading: "blocking",
      template: "app/popup/popup.html",
      filename: "popup.html",
    }),
    new HtmlWebpackPlugin({
      inject: false,
      minify: false,
      scriptLoading: "blocking",
      template: "app/options/options.html",
      filename: "options.html",
    }),
    new HtmlWebpackTagsPlugin({ tags: ["[name].js", "[name].css"] }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  experiments: { topLevelAwait: true },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
