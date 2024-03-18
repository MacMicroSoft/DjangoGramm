const path = require('path');

module.exports = {
    entry: {
        ajax_like: './assets/scripts/ajax_like.js',
        ajax_follow: './assets/scripts/ajax_follow.js',
    },
    output: {
        path: path.resolve(__dirname, 'static/dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
