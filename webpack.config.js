var path = require('path');
 
module.exports = {
    entry: "./src/app.js",
    devtool: 'sourcemaps', 
    output:{
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets:["env", "react"]
                }
            }
        ]
    }
}