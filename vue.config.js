
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
    }
};