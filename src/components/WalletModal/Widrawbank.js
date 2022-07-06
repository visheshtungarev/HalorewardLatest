import React from 'react';
import {Modal } from 'antd';
export default function WalletModal({title,onCancel,onOk,isvisible,...props}) {
    return(
        <Modal
                title={<h5>{title}</h5>}
                visible={isvisible}
                onOk={onOk}
                onCancel={onCancel}
                // footer={<Button type="primary" htmlType="submit" className="w-100">{data.buttonText}</Button>}
                className="account-modal">
                        {props.children}
            </Modal>
    )
}