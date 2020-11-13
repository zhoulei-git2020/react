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


//在父组件中定义一个方法接收子组件的传值并切换登录注册的状态
switchForm = (value) =>{
   this.setState({
       formType:value
   })

}


    render(){
        return  <div  className="form-wrap">
                    <div>

                    {/* *************************************************************** */}

                    {/* 判断注册还是登录状态以显示其组件 */}
                    {this.state.formType === 'login' 
                    ? <LoginForm   switchForm={this.switchForm}></LoginForm>
                    :<RegisterFrom switchForm={this.switchForm}></RegisterFrom>
                    }  
                    
                    

                    {/* *************************************************************** */}
                        
                    </div>
                 </div>
    }
}

export default Login;