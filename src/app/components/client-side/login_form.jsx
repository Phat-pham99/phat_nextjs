'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation'
import { Button, Checkbox, Form, Input, Alert } from 'antd';

const LoginForm = () => {
    const [form] = Form.useForm();
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target)
    }
    const handlePassword = (e) => {
        setPassword(e.target)
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', Username.value);
    console.log('Password:', Password.value);
    if (Username.value == "hphat99" && Password.value == "12345"){
        redirect('/');
    }
    };
    const onReset = () => {
        form.resetFields();
    };
    return (
        <div className='Login-form-component'>
            <Form 
            name="Login form"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="on"
            >
                <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input 
                        placeholder="Username"
                        value={Username}
                        onChange={handleUsername}/>
                </Form.Item>
                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                    placeholder="Password"
                    value={Password}
                    onChange={handlePassword}/>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item label={null}>
                    <div className='flex flex-row justify-center-safe'>
                    <Button 
                        className='basis-m'
                        type="primary"
                        htmlType="submit"
                        onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button
                        className='basis-m'
                        type="primary"
                        htmlType="Reset"
                        onClick={onReset}>
                        Reset
                    </Button>
                    </div>
                </Form.Item>
                <Form.Item label={null}>
                    Dont have any account yet ?  
                    <a href='/signup'>  Signup here</a>
                </Form.Item>
            </Form>
        </div>
    )
}
export default  LoginForm;