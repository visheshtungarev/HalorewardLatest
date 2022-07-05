import React from 'react';
import { Form, Input, Button } from 'antd';
export default function AccountAddress() {

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
                        This is the last time you can change your address
                    </div>
                </Form.Item>
                <Form.Item
                    label="New Address"
                    name="useraddress"
                    // rules={[{ required: true, message: 'Please input your address!' }]}
                    className="form-label"
                >
                    <Input.TextArea  />
                </Form.Item>



                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button type="primary" htmlType="submit" className='w-100 mt-4'>
                        Save Changes
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}