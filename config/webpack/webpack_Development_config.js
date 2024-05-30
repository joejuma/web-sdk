/* Deps */
const path = require("path");
const WebpackConfig = require("./webpack_Core_config.js");

/* Constants */
const DEVELOPMENT_BUILD_DIRECTORY = path.resolve(__dirname, "../..", "build", "development");

/* Objects */
WebpackConfig.DevelopmentServer = {
    compress: true,
    port: 5995,
    hot: true,
    historyApiFallback: true
};

WebpackConfig.Development = {
    ...WebpackConfig.Core,
    output:{
        ...WebpackConfig.Core.output,
        path: DEVELOPMENT_BUILD_DIRECTORY
    },
    mode: "development",
    devtool: "source-map",
    devServer: WebpackConfig.DevelopmentServer
};

/* Exports */
module.exports = WebpackConfig.Development;