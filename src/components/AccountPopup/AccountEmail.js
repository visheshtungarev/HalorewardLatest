import React from 'react';
import { Form, Input, Button } from 'antd';
export default function AccountEmail() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item wrapperCol={{ span: 24 }}>
                    <div className='label-text'>
                        You’ll get a message to approve this update
                        at your new email to verify the change.
                    </div>
                </Form.Item>
                <Form.Item
                    label="New Email"
                    name="useremail"
                    rules={[{ type: 'email', required: true, message: 'Please input your email address!' }]}
                    className="form-label"
                >
                    <Input />
                </Form.Item>



                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button type="primary" htmlType="submit" className='w-100 mt-4'>
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}