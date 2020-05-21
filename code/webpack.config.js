const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'none',
    stats: 'none',
    devtool: 'sourse-map',
    plugins: [
        new HtmlWebpackPlugin()
    ]
}