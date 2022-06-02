import { Button, Checkbox, Col, Form, Input, Row } from 'antd'
import React from 'react'
import "./index.css"
import { EyeOutlined } from '@ant-design/icons'

import { Link } from 'react-router-dom'


export default function Register({ goToLogin, forgotPwd, registered }) {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    return (
        <Form autoComplete='new-password'>
            <div className='mb-4'>
                <label>First Name</label>
                <div className='lineinput'>
                    <Input placeholder="First Name" autoComplete="new-password" type={'text'} />
                </div>
            </div>
            <div className='mb-4'>
                <label>Email address</label>
                <div className='lineinput'>
                    <Input placeholder="Email address" autoComplete="new-password" type={'email'} suffix={<EyeOutlined />} />
                </div>
            </div>
            <Row className='pb-4'>
                <Col span={12}>
                    <Checkbox onChange={onChange}>Remember Me</Checkbox>
                </Col>
                <Col span={12} className="text-right">
                    <Link to="" onClick={() => forgotPwd()} className='text-decoration-none'>Forgot password?</Link>
                </Col>
            </Row>
            <div className='mb-4'>
                <Button type="primary" onClick={() => registered()} className='w-100' size="large">
                    Register
                </Button>
            </div>
            <div className='mb-4 d-flex align-items-center justify-content-center'>
                <span className='orDevider'>or</span>
            </div>
            <div className='mb-4 text-center'>
                <p className='fw-bold'>Sign in with</p>
                <a href='google.com' target="_blank"><img src='/Images/google.svg' height={40} /></a> &nbsp;
                <a href='facebook.com' target="_blank"><img src='/Images/facebook.svg' height={40} /></a>
            </div>
            <div className='py-md-4 py-0'></div>
            <div className='mb-4 text-center fw-bold'>
                Already have an account? &nbsp;
                <Link to="" onClick={() => goToLogin()}>Login</Link>
            </div>
        </Form>
    )
}
