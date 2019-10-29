const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    output: {
        filename: 'scripts.js',
        publicPath: '/public/',
        path: path.resolve(__dirname, '../NodeMock/public')
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: "index.html"
        })
    ],
    watch: (process.argv[3] == 'development')
};