import { Button, Form, Input } from 'antd'
import React from 'react'
import { EyeOutlined } from '@ant-design/icons'
import "./index.css"

export default function ResetPwd({ pwdChanged }) {
    return (
        <Form autoComplete='new-password'>
            <div className='mb-4'>
                <label>Password</label>
                <div className='lineinput'>
                    <Input placeholder="Password" autoComplete="new-password" type={'password'} suffix={<EyeOutlined />} />
                </div>
            </div>
            <div className='mb-4'>
                <label>Password</label>
                <div className='lineinput'>
                    <Input placeholder="Password" autoComplete="new-password" type={'password'} suffix={<EyeOutlined />} />
                </div>
            </div>
            <div className='mb-4'>
                <Button type="primary" onClick={() => pwdChanged()} className='w-100' size="large">
                    Set Password
                </Button>
            </div>
        </Form>
    )
}
