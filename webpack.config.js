const HtmlWebpackPlugin=require('html-webpack-plugin');

// const path = require('path');
const {
    join
} = require('path');
module.exports = {
    mode:'development',
    entry: './src/main.js',
    output: {
        // path: path.join(__dirname,'lib'),
        path: join(__dirname, 'lib'),
        filename:"webpack-dome.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:join(__dirname,'public/index.html')
        })
    ],
    devServer:{
        open:true,
        port:1664
    },
    module:{
        rules:[
            {
                test:/\.css/i,
                use:["style-loader", "css-loader" ]
            },
            {
                test:/\.less/i,
                use:["style-loader", "css-loader","less-loader"]
            },
            {
                test:/\.(png|gif|webp)$/i,
                // type:"asset/resource",
                // type:"asset/inline",
                type:"asset",
                parser:{
                    dataUrlCondition:{
                        maxSize: 21*1024
                    }
                },
                generator:{
                    filename: "imgs/[hash:6][ext]"
                }
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/i,
                type:"asset/resource",
                generator:{
                    filename: "fonts/[hash:6][ext]"
                }
            },
            {
                test:/\.js$/i,
                exclude:/(node_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }
}