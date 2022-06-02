import { Button, Form, Input } from 'antd'
import React from 'react'
import { EyeOutlined } from '@ant-design/icons'
import "./index.css"

export default function ForgotPwd({ sendRequestLink }) {
    return (
        <Form autoComplete='new-password'>
            <div className='mb-4'>
                <p className='text-muted'>Enter registered email</p>
                <label>Email</label>
                <div className='lineinput'>
                    <Input placeholder="Email" autoComplete="new-password" type={'email'} suffix={<EyeOutlined />} />
                </div>
            </div>

            <div className='mb-4'>
                <Button type="primary" onClick={() => sendRequestLink()} className='w-100' size="large">
                    Request reset link
                </Button>
            </div>

        </Form>
    )
}
