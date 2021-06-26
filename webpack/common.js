const path = require("path")

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
        alias: {
            "@": path.resolve("src"),
            "@@": path.resolve()
        }
    },
    output: {
        path: path.resolve("build"),
        publicPath: "/",
        filename: "static/js/main.[contenthash:6].js",
        environment: {
            arrowFunction: true,
            bigIntLiteral: false,
            const: true,
            destructuring: true,
            dynamicImport: false,
            forOf: true,
            module: true
        }
    },
    devServer: {
        contentBase: "public",
        port: 3000,
        hot: true,
        watchContentBase: true,
        historyApiFallback: true,
        open: true
    },
    performance: {
        maxEntrypointSize: 800000
    }
}
