const path = require("path");

module.exports = {
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "assets/js"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    
    plugins: [
    ],
};
