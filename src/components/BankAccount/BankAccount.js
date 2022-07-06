import React from "react";
import {BankOutlined,RightOutlined} from "@ant-design/icons";
import './index.css';
const BankAccount = ({label,value,isImage,imagePath,isdetail,openPopup}) => {
    return(
        <div className="bankaccount-container" onClick={openPopup}>
            <div className="bank-logo">
                {
                    isImage ? <img src={imagePath} alt="brand-logo" /> :  <BankOutlined />
                }
           
            </div>
            <div className="account-details">

                {
                    label ? <label className="account-name">{label}</label> : ''
                }

                {
                    value ? <label className="account-number">{value}</label> : ''
                }
                
                
            </div>
            {
                isdetail ? <div className="detail-info">
                <RightOutlined />
                </div>
                :
                ''
            }
            
        </div>
    )
}

export default BankAccount;
