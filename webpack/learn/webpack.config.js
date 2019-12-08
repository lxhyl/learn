const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    // entry: './src/index.js',
    entry: {
            app:'./src/index.js',
            print:'./src/print.js'
    },
    plugins:[
       
        new HtmlWebpackPlugin({
              title:'output Management'
        }),
        new CleanWebpackPlugin()
    ],
    output: {
        // filename: 'bundle.js',
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            //加载css
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            // //加载图片
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use:[
            //         'file-loader'
            //     ]
            // }
        ]
    }
};