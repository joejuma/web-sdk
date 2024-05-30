/* Deps */
const path = require("path");
const WebpackConfig = require("./webpack_Core_config.js");

/* Constants */
const RELEASE_BUILD_DIRECTORY = path.resolve(__dirname, "../..", "build", "release");

/* Objects */
WebpackConfig.Release = {
    ...WebpackConfig.Core,
    output: {
        ...WebpackConfig.Core.output,
        path: RELEASE_BUILD_DIRECTORY
    },
    mode: "production",
};

/* Exports */
module.exports = WebpackConfig.Release;