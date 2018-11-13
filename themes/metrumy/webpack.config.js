const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "bundle.css",
    disable: process.env.NODE_ENV === "development",
});

module.exports = {
    mode: "production",
    entry: "./js/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "static/dist"),
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader",
                    options: { minimize: true }, // translates CSS into CommonJS
                }, {
                    loader: "sass-loader", // compiles Sass to CSS
                }],
                fallback: "style-loader", // (in dev mode) creates style nodes from JS strings
            }),
        }],
    },
    plugins: [
        extractSass,
    ],
};
