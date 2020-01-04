const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        filename: "main.v2.js",
        path: path.resolve(__dirname, "assets/js"),
    },
    module: {
        rules: [
            { test: /\.(t|j)sx?$/,
                use: {
                    loader: "awesome-typescript-loader",
                    options: {
                        forceIsolatedModules: true,
                        reportFiles: [
                            "src/*.{ts,tsx}"
                        ]
                    }
                }
            },
            // addition - add source-map support
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    /** 
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    },
    */
    // addition - add source-map support
    devtool: "source-map"
};
