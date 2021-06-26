const path = require("path")
const { merge } = require("webpack-merge")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const commonConfig = require("./common")

module.exports = merge(commonConfig, {
    mode: "development",
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
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]"
                        }
                    }
                ]
            }
        ]
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
})
