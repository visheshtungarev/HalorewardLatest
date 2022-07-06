import React,{useState} from 'react';
import { Form, Input, Button } from 'antd';
import AccountModal from '../AccountModal/AccountModal';
import AccountConfirm from './AccountConfirm';
export default function AccountConfirmPassword() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const openConfirmPopup = () => {
        setIsConfirmModalvisible(true);
    }
    const handleOk = () => {
        setIsConfirmModalvisible(false);
    };

    const handleCancel = () => {
        setIsConfirmModalvisible(false);
    };
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };
    const [isConfirmModalvisible, setIsConfirmModalvisible] = useState(false);
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
                
                <Form.Item
                    label="Password"
                    name="userpass"
                    className="form-label"
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="userconfirmpass"
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
                    <Button type="primary" htmlType="submit" className='w-100 mt-4' onClick={openConfirmPopup}>
                    Confirm Change
                    </Button>
                </Form.Item>
            </Form>
            <AccountModal
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isConfirmModalvisible}
            >
                {<AccountConfirm />}
            </AccountModal>
        </div>
    )
}