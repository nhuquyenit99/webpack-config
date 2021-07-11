const path = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require("dotenv-webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
        alias: {
            "@": path.resolve("src"),
            "@@": path.resolve()
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ["ts-loader", "eslint-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(s[ac]ss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
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
    },
    devtool: "source-map",
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "**/*",
                    globOptions: {
                        ignore: ["index.html"]
                    },
                    to: "",
                    context: path.resolve("public")
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new webpack.ProgressPlugin()
    ]
}
