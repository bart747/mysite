const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main-bundle.v3.js",
        path: path.resolve(__dirname, "assets/js"),
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
          // ... other rules
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
