import React, {Component, Fragment} from "react";
//ANTD
import { Form, Input, Button, Checkbox,Row, Col } from 'antd';
import { UserOutlined, LockOutlined,UnlockFilled } from '@ant-design/icons';


class RegisterForm extends Component{
    constructor(){
        super();
        this.state = {};

    }

    onFinish = values => {
        console.log('Received values of form: ', values);
      };

    render(){
        return (
        <Fragment>
            <div className="form-header">
                <h4 className="column">注册</h4>
                
                <span>登录</span>
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
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item> 

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input prefix={<UnlockFilled className="site-form-item-icon" />} placeholder="密码" />
                </Form.Item>


                <Form.Item
                    name="passwords"
                    rules={[{ required: true, message: '再次输入密码' }]}
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

export default RegisterForm;