const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // environment(development/production)
    mode: 'development',
    // devtool(standard coding)
    devtool: 'source-map',
    // input js files
    entry:  {
        'js/app':'./src/app.js'
    },
    // output js files
    output: {
        path: path.join(__dirname, './dist'),
        filename:'[name].js'
    },
    // loaders
    module: {
        rules: [
            // load art-template files
            {
                test: /\.art$/,
                exclude: /(node_modules)/,
                use:{
                    loader: 'art-template-loader'
                }
            },
            // load css files
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    },
    // plugins
    plugins: [
        // copy html files including js files
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
        }),
        // copy files to ./dist
        new CopyPlugin({
            patterns: [
                {
                    from: './public/*.ico',
                    to: path.join(__dirname, './dist/favicon.ico')
                },
                {
                    from: './public/libs',
                    to: path.join(__dirname, './dist/libs')
                }
            ]
        }),
        // auto replace directory ./dist when build
        new CleanWebpackPlugin()
    ],
    // server
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 8080
    }
}