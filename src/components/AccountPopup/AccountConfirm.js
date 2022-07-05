import React,{useState} from 'react';
import { Form, Button } from 'antd';
import AccountModal from '../AccountModal/AccountModal';
import AccountConfirmPassword from './AccountConfirmPassword';
export default function AccountConfirm() {

    const onFinish = (values) => {
        console.log('Success:', values);
        setIsConfirmPasswordModalvisible(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleOk = () => {
        setIsConfirmPasswordModalvisible(false);
    };

    const handleCancel = () => {
        setIsConfirmPasswordModalvisible(false);
    };
    const [isConfirmPasswordModalvisible, setIsConfirmPasswordModalvisible] = useState(false);
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
                className='confirm-form'
            >
                <Form.Item wrapperCol={{ span: 24 }}>
                    <h2>Congratulations!.</h2>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 24 }}>
                    <div className='label-text'>
                    Your password has been 
changed sucessfully.
                    </div>
                </Form.Item>
                {/* <Form.Item
                    label="New Name"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    className="form-label"
                >
                    <Input />
                </Form.Item> */}



                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button type="primary" htmlType="submit" className='w-100 mt-4' onClick={handleCancel}>
                    Continue
                    </Button>
                </Form.Item>
            </Form>

            <AccountModal
                title='Change Password'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isConfirmPasswordModalvisible}
            >
                {<AccountConfirmPassword />}
            </AccountModal>
        </div>
    )
}