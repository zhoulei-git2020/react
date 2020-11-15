const proxy = require("http-proxy-middleware")

module.exports = function(app){
    app.use(proxy("/devApi",{
        target:"http://www.web-jshtml.cn/api/react",//配置你的请求服务器的地址
        changeOrigin:true

    }))
        // app.use(proxy("/manage/api",{
        //     target:"http://admintest.happymmall.com:7000",
        //     changeOrigin:true
        // }))

};