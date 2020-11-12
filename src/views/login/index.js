import React, {Component} from "react";
import "./index.scss"



//组件
import LoginForm from "./LoginForm"
import RegisterFrom from "./RegisterForm"



class Login extends Component{
    constructor(){
        super();
        this.state = {
            
            formType:"login"  //定义默认状态
        };

    }




    render(){
        return  <div  className="form-wrap">
                    <div>

                    {/* *************************************************************** */}

                    {/* 判断注册还是登录状态以显示其组件 */}
                    {this.state.formType === 'login' ? <LoginForm></LoginForm>:<RegisterFrom></RegisterFrom>}  
                    
                    

                    {/* *************************************************************** */}
                        
                    </div>
                 </div>
    }
}

export default Login;