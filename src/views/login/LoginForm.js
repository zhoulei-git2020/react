import React, {Component, Fragment} from "react";

//ANTD
import { Form, Input, Button, Checkbox,Row, Col, message, Alert } from 'antd';
import { UserOutlined, LockOutlined,UnlockFilled  } from '@ant-design/icons';
//验证规则导入
import {validate_password , validate_email} from "../../utils/validate"

//API接口导入
import {Login, GetCode} from "../../api/account"
class LoginForm extends Component{
    constructor(){
        super();
        this.state = {
            username:"" ,//输入框用户名
            code_button_disable : false,  //验证码按钮状态
            code_button_loading :false,   //loading验证状态
            code_button_text: "获取验证码"
        };

    }
    //登录
    onFinish = values => {
        Login().then(response=>{   
            console.log(response)
        }).catch(error=>{
            
        })
      };

    //获取验证码
    getCode = () =>{

        //获取验证码按钮按下时的按钮状态
        this.setState({
            code_button_loading:true,
            code_button_text:"发送中"
        })
      



        //首先判断username是否存在不存在弹出警告框
        if(!this.state.username){
            message.warning('请填写用户名',1); //表示延时1秒弹框消失
            return false
        }


        const requestData = {
            username:this.state.username,
            module:"login"
        }
        GetCode(requestData).then(response => {
           //发送成功做的事情
           //执行倒计时函数
            this.countDown();




        }).catch(error=>{
            //发送失败做的事情
            this.setState({
                code_button_loading:false,
                code_button_text:"重新获取"
            })

        })
    }

    //input输入处理
    inputChange = (e) =>{
        let value = e.target.value //把输入的值放进value
        this.setState({
           username : value //更新username的值
       })
    }
   
    // //验证码按钮倒计时处理
    countDown = () =>{
        //定时器
        let timer = null;
        //倒计时时间
        let sec = 60;
        //修改状态
        this.setState({
            code_button_loading:false,
            code_button_disable:true,
            code_button_text:`${sec}S`
        })

            timer = setInterval(()=>{
                sec--; 

                //如果数值小于或等于零倒计时结束
                if(sec <= 0){
                    //倒计时结束时更改状态
                    this.setState({
                        code_button_text:'重新获取',
                        code_button_disable:false,
                    })
                    //停止定时器
                    clearInterval(timer)
                   
                    return false; //退出函数
                }

                //数值没有小于或等于0开始倒计时
                this.setState({
                    code_button_text:`${sec}S`
                })
            },1000)
    }





    toggleForm = () => {
        this.props.switchForm("register"); //调用父级的方法将参数传送给父级
       
    }


    render(){
        const _this = this;
        return (
                    <Fragment>
                        <div className="form-header">
                            <h4 className="column">登录</h4>
                            
                            <span onClick={this.toggleForm}>账号注册</span>
                        </div>
                        <div className = "form-content"></div>

                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            >
                            <Form.Item
                                name="username"
                                rules={
                                        [
                                            {required: true, message: '邮箱不能位空' },
                                            //{type:"email",message:"邮箱格式错误"},

                                            //邮箱校验不通过按钮状态为不可用
                                            // ({ getFieldValue }) => ({
                                            //     validator(rule, value) {
                                            //         if(validate_email(value)){
                                            //            _this.setState({
                                            //             code_button_disable :false
                                            //            })
                                            //               return Promise.resolve();
                                            //         }
                                              
                                            //       return Promise.reject('邮箱格式错误');
                                            //     },
                                            //   })


                                        ]
                                    }
                            >
                                <Input value={this.state.username} onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item> 

                            <Form.Item
                                name="password"
                                rules={
                                        [
                                            {required: true, message: '密码不能为空' },
                                            // {min:6,message:"密码不能小于6位"},
                                            // {max:20,message:"密码不能大于20位"},
                                            {pattern:validate_password,message:"密码长度不得小于6位或大于20位"}

                                            // ({getFieldValue})=>({
                                            //     validator(rule,value){
                                            //         if(value.length<6 || value.length>20){
                                            //             return Promise.reject('密码长度不得小于6位或大于20位')
                                            //         }else{
                                            //             return Promise.resolve();
                                            //         }
                                                    
                                            //     }
                                            // }),
                                        ]
                                      }
                            >
                                <Input prefix={<UnlockFilled className="site-form-item-icon" />} placeholder='字母+数字大于6位小于20位' />
                            </Form.Item>

                            <Form.Item
                                name="code"
                                rules={
                                            [
                                                {required: true, message: '验证码不能为空' },
                                                {len:6,message:'请输入长度位6位验证码'  }
                                            ]
                                      }
                            > 
                                <Row gutter={13}>
                                    <Col span={15}>
                                    <Input prefix={<UnlockFilled className="site-form-item-icon" />} placeholder="验证码" />
                                    </Col>
                                    <Col span={9}>
                                    <Button 
                                     type="primary" 
                                     loading={this.state.code_button_loading} 
                                     danger 
                                     block
                                     disabled={this.state.code_button_disable} 
                                     onClick={this.getCode}>
                                     {this.state.code_button_text}</Button>
                                    </Col>
                                </Row>   
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" block>登录 </Button>
                            </Form.Item>
                    </Form>
                </Fragment>
        )
    }
}

export default LoginForm;