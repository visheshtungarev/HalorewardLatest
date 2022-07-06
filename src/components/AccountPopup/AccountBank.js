import React from 'react';
import { Form, Input, Button } from 'antd';
export default function AccountBank() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };
   
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                   <Form.Item wrapperCol={{ span: 24 }}>
                    <div className='label-text'>
                    We do not store any of your personal information. We use the latest technologies to encrypt your data, keeping it safe & secure.
                    </div>
                </Form.Item>

               
                <Form.Item
                    label="Full Name (as shown on card)"
                    name="userfullname"
                    // rules={[{ required: true, message: 'Please input your username!' }]}
                    className="form-label"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Account Number"
                    name="accountnumber"
                    // rules={[{ required: true, message: 'Please input your username!' }]}
                    className="form-label"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Sort Code"
                    name="sortcode"
                    // rules={[{ required: true, message: 'Please input your username!' }]}
                    className="form-label"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Hallorewards Password"
                    name="rewards"
                    className="form-label"
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 24 }}>
                    <div className='remember-password'>
                    Don’t remember your password ? <label className='reset-password'> Reset Password</label>
                    </div>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button type="primary" htmlType="submit" className='w-100 mt-4'>
                    Save Details
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}