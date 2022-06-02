import { Button, Form } from 'antd'
import React, { } from 'react'
import "./index.css"

export default function SendRequestLink({ timer }) {



    return (

        <Form autoComplete='new-password'>
            <div className='mb-4'>
                <p className='text-muted'>A link to verify your email and to set password
                    has been sent to <b>sridhar@gmail.com</b></p>
            </div>

            <div className='mb-4'>
                <p className='text-center' style={{
                    color: '#FB5607'
                }}>Link expires in <b>{timer}</b></p>
                <Button type="primary" className='w-100' size="large">
                    Continue
                </Button>
            </div>

        </Form>



    )
}
