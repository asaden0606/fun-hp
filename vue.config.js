const path = require('path');

module.exports = {
  publicPath: '/',
  lintOnSave: false,
    devServer: {
        port: 3001,
        proxy: {
          "/api/": {
          	target: "http://funbarisoft.dip.jp",            
            //target: "http://localhost:8080",
          }       
        }
    },
    
    configureWebpack: {
        resolve: {
          alias: {
            "d3":"d3/build/d3.min.js",
            "techan": "techan/dist/techan.min.js",
          }
        }
    }
};