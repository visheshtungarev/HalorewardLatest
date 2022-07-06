import React ,{useState} from 'react';
import { Form, Input, Button } from 'antd';
import AccountModal from '../AccountModal/AccountModal';
import AccountConfirmPassword from './AccountConfirmPassword';
export default function AccountPassword() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const openConfirmPassword = () => {
        setIsConfirmPasswordModalvisible(true);
    }

    const handleOk = () => {
        setIsConfirmPasswordModalvisible(false);
    };

    const handleCancel = () => {
        setIsConfirmPasswordModalvisible(false);
    };
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };
    const [isConfirmPasswordModalvisible, setIsConfirmPasswordModalvisible] = useState(false);
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
                    label="Current Password"
                    name="userpassword"
                    className="form-label"
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <div className='remember-password'>
                    Don’t remember your password ? <label className='reset-password'> Reset Password</label>
                    </div>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button type="primary" htmlType="button" onClick={openConfirmPassword} className='w-100 mt-4'>
                    Confirm Change
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