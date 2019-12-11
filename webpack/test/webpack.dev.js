const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
   
    entry: {
        app: './src/main.js',
    },
    //追踪错误和警告在代码中的原位置
    devtool: 'inline-source-map',
    //运行服务器，实时重载
    devServer: {
        contentBase: './dist',
        hot: true,     
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
           template:'./index.html'
        }),
        // //每次打包清理dist文件夹
        new CleanWebpackPlugin(),
        //启用HMR(热重载)
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //vue-loader
        new VueLoaderPlugin(),

    ],
    //输出
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        // chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    //模块
    module: {
        rules: [
            // 加载css
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    'css-loader',
                ]
            },
            {

                test: /\.styl(us)?$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'stylus-loader'
                ]
              
            },
            //加载图片
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            //字体
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            //加载vue组件
            {
                test: /\.vue$/,
                loader:'vue-loader'
            },
            //ES6转ES5
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_module/,
            }
        ]
    }
};