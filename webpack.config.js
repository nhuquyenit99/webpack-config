const devConfig = require("./webpack/development")
const prodConfig = require("./webpack/production")

module.exports = (env, argv) => {
    return argv.mode === "development" ? devConfig : prodConfig
}
