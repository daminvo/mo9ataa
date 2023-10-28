const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name].[ext]'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    plugins: [
        new copyWebpackPlugin({
            patterns: [{ from: 'static' }]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                // include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', // EXAMPLE HERE
            },
        ]
    },
}