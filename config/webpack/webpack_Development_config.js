/* Deps */
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
    ...Core,
    output:{
        ...Core.output,
        path: DEVELOPMENT_BUILD_DIRECTORY
    },
    mode: "development",
    devtool: "source-map",
    devServer: DevelopmentServer
};

/* Exports */
module.exports = WebpackConfig.Development;