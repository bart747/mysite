const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main-bundle.v3.js",
        path: path.resolve(__dirname, "assets/js"),
    },
    module: {
        rules: [
            // ... other rules
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"]
                    }
                }
            },
        ]
    }
};
