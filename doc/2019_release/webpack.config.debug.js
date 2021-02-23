var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: [
        "./src/js/PackMain.ts"
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: "./js/port.js"
    },
	devServer: {
	  contentBase: path.join(__dirname, './src/'),
	  port: 3001
	},
    module: {
    	rules: [
		   {
		      test: /\.ts?$/,
		  	  loaders: ['ts-loader']
		    },
            {
        		test: /\.css$/,
        		loaders: ['style-loader', 'css-loader'],
        		exclude: [/node_modules/]
      		},
      	    {
      	      test: /\.png$/,
      	      loader: 'url-loader',
      	      exclude: [/node_modules/]
      	    },
        ]
    },

    mode: "development",
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery",
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
        alias:{
            "jquery": __dirname + "/node_modules/jquery/dist/jquery.min.js",
        },
        extensions: ['.js', '.ts']
    }
};