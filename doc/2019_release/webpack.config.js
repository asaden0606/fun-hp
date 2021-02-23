var webpack = require('webpack');
module.exports = {
    entry: "./src/js/PackMain.ts",
    output: {
        path: __dirname,
        filename: "./release/js/port.js"
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
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        }),
    ],
    mode: "production",
    resolve:{
        alias:{
            "jquery": __dirname + "/node_modules/jquery/dist/jquery.min.js"
        },
        extensions: ['.js', '.jsx','.ts']
    },
};