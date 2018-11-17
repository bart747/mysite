const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "bundle.css",
    disable: process.env.NODE_ENV === "development",
});

module.exports = {
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "static/dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {     
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
            }
        ],
    },
    
    plugins: [
        extractSass,
    ],
};
