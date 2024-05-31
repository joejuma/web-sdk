/* Deps */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

/* Constants */

// Directory Constants
const ROOT_DIRECTORY = path.resolve(__dirname, "../..");
const BUILD_DIRECTORY = path.resolve(ROOT_DIRECTORY, "build");
const CONFIG_DIRECTORY = path.resolve(ROOT_DIRECTORY, "config");
const SOURCE_DIRECTORY = path.resolve(ROOT_DIRECTORY, "src");
const TEMPLATE_DIRECTORY = path.resolve(SOURCE_DIRECTORY, "templates");

// File Constants
const MAIN_FILE = path.resolve(SOURCE_DIRECTORY, "index.tsx");
const TEMPLATE_FILE = path.resolve(TEMPLATE_DIRECTORY, "index.html");
const TYPESCRIPT_CONFIG_FILE = path.resolve(
  CONFIG_DIRECTORY,
  "typescript",
  "tsconfig.json"
);

/* Namespace */
const WebpackConfig = {};

/* Objects */

// Loader Objects
WebpackConfig.Loaders = {};
WebpackConfig.Loaders.Babel = {
  test: /\.jsx?$/,
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-env", "@babel/preset-react"],
  },
  exclude: [/node_modules/],
  include: SOURCE_DIRECTORY,
};

WebpackConfig.Loaders.Style = {
  test: /\.(css|less)$/,
  use: ["style-loader", "css-loader", "less-loader"],
  exclude: [/node_modules/],
  include: SOURCE_DIRECTORY,
};

WebpackConfig.Loaders.TypeScript = {
  test: /\.tsx?/,
  use: [
    {
      loader: "ts-loader",
      options: {
        configFile: TYPESCRIPT_CONFIG_FILE,
      },
    },
  ],
  exclude: [/node_modules/],
  include: SOURCE_DIRECTORY,
};

// Plugin Objects
WebpackConfig.Plugins = [
  new HtmlWebpackPlugin({
    template: TEMPLATE_FILE,
  }),
  new webpack.HotModuleReplacementPlugin(),
];

// Config Objects
WebpackConfig.Core = {
  target: "web",
  entry: [MAIN_FILE],
  output: {
    path: BUILD_DIRECTORY,
    filename: "app.js",
    publicPath: "/",
  },
  module: {
    rules: [
      WebpackConfig.Loaders.Babel,
      WebpackConfig.Loaders.Style,
      WebpackConfig.Loaders.TypeScript,
    ],
  },
  plugins: [...WebpackConfig.Plugins],
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  watch: true,
};

/* Exports */
module.exports = WebpackConfig;
