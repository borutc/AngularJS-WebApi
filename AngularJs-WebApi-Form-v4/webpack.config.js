"use strict";

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeModulesDir = path.resolve(__dirname, './node_modules');
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");

module.exports = {

    entry: {
        app: [
            './angularApp/app.ts'
        ],
        vendor: [
            'angular/angular.js',
            'angular-ui-router/release/angular-ui-router.js',
            'angular-sanitize',
            'angular-aria',
            'angular-material',
            'angular-messages',
            'angular-animate',
            'dexie',
            'rxjs'
        ]
    },
    context: __dirname + "",
    output: {
        filename: 'bundle.js',
        path: __dirname + "/wwwroot/",
        sourceMapFilename: 'bundle.map'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }, {
            test: /\.ts$/,
            enforce: 'pre',
            loader: 'tslint-loader',
            options: {}
        },
        {
            test: /\.html$/,
            use: [{
                loader: 'file-loader?name=[path][name].[ext]r',
                options: {
                    minimize: true
                }
            },
            {
                loader: 'extract-loader'

            },
            {
                loader: 'html-loader'

            }
            ],
        },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }

        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendors.js' }),
        new CopyWebpackPlugin([{ from: './angularApp/index.html', to: './index.html' }])
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        contentBase: path.join(__dirname, "wwwroot"),
        compress: true,
        port: 9001
    },
};
