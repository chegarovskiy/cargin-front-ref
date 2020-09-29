const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.min.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "./public/index.html"),
            filename: 'index.html',
            favicon: './public/favicon.ico',
            inject: true

        })
    ],

    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss', '.css'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg|ico)$/i,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]']
            },
            {
                test: /\.(ttf|otf|woff(2)?|eot)$/,
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]',
                    outputPath: 'fonts',
                    publicPath: '../fonts'
                }
            }
        ],
    },
};

