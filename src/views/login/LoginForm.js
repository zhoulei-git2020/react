import React, {Component, Fragment} from "react";

//ANTD
import { Form, Input, Button, Checkbox,Row, Col } from 'antd';
import { UserOutlined, LockOutlined,UnlockFilled } from '@ant-design/icons';


class LoginForm extends Component{
    constructor(){
        super();
        this.state = {};

    }
    onFinish = values => {
        console.log('Received values of form: ', values);
      };

   
    toggleForm = () => {
        this.props.switchForm("register"); //调用父级的方法将参数传送给父级
       
    }


    render(){
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
                            onFinish={()=>this.onFinish}
                            >
                            <Form.Item
                                name="username"
                                rules={
                                        [
                                            {required: true, message: '邮箱不能位空' },
                                            {type:"email",message:"邮箱格式错误"}

                                        ]
                                    }
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item> 

                            <Form.Item
                                name="password"
                                rules={
                                        [
                                            {required: true, message: '密码不能为空' },
                                            // {min:6,message:"密码不能小于6位"},
                                            // {max:20,message:"密码不能大于20位"},
                                            // {pattern:/^[0-9]*$/,message:"请输入数字"}

                                            ({getFieldValue})=>({
                                                validator(rule,value){
                                                    if(!value || getFieldValue('password')===value){
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject('')
                                                }
                                            }),
                                        ]
                                      }
                            >
                                <Input prefix={<UnlockFilled className="site-form-item-icon" />} placeholder="密码" />
                            </Form.Item>

                            <Form.Item
                                name="code"
                                rules={[{ required: true, message: '请输入验证码' }]}
                            > 
                                <Row gutter={13}>
                                    <Col span={15}>
                                    <Input prefix={<UnlockFilled className="site-form-item-icon" />} placeholder="验证码" />
                                    </Col>
                                    <Col span={9}>
                                    <Button type="primary" danger block>获取验证码</Button>
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