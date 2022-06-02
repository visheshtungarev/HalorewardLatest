import { Button, Form } from 'antd'
import React from 'react'

export default function PwdChangedSuccsessfully({ done }) {
    return (
        <Form autoComplete='new-password' >
            <div className='mb-4 text-center'>
                <img src='/Images/pwd_changed_successfully.svg' height={150} />
                <h4 className='ant-modal-title_sm text-center mb-4'>Congratulations!</h4>

                <p className='text-muted'>Your password has beenM<br />
                    changed sucessfully.</p>
            </div>

            <div className='mb-4'>
                <Button type="primary" onClick={() => done()} className='w-100' size="large">
                    Done
                </Button>
            </div>


        </Form>
    )
}
