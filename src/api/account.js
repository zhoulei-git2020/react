import service from "../../src/utils/request"

/**
 * 登录接口
 */
 export function Login(data){
    return service.request({
         url:"/login/",
         method:"post",
         data:data,  //请求为post时
         // params:data //请求类型为get时
     });
} 


/**
 * 验证码接口
 */
export function GetCode(data){
    return service.request({
        url:"/getSms/",
        method:"post",
        data:data,  //请求为post时
        // params:data //请求类型为get时
    });
} 