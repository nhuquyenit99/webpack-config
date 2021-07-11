const { mergeWithRules } = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")

const commonConfig = require("./common")

module.exports = mergeWithRules({
    module: {
        rules: {
            test: "match",
            use: {
                loader: "match",
                options: "replace"
            }
        }
    }
})(commonConfig, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/,
                use: [
                    {
                        loader: "css-loader",
                        options: { sourceMap: false }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: false }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "static/fonts/[name].[ext]"
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
                            name: "static/media/[name].[contenthash:6].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CompressionPlugin({
            test: /\.(css|js|html|svg)$/
        })
    ]
})
