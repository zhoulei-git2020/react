const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function(app){
    app.use(createProxyMiddleware([process.env.REACT_APP_API],{
        target:process.env.REACT_APP_BASE_URL,//配置你的请求服务器的地址
        changeOrigin:true,//允许跨域
        pathRewrite:{
                [`^${process.env.REACT_APP_API}`] : ''
                //"^/devApi":"",
        },

    }))
        /**
         * 1.匹配到devApi，开始做代理
         * 2./devApi/login/=>/login/
         * 3.替换后的地址：http://www.web-jshtml.cn/api/react/login/ 
         */

};