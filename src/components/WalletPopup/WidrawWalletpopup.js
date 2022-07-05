import React from "react";
import {BankOutlined} from "@ant-design/icons";
import './index.css';
import { Button } from 'antd';

// import { Link } from "react-router-dom";
const WidraWalletPopup = ({subTitle,isImage,label,value,imagePath,encashAmount,remainingamount,confirmPopup}) =>{
    return(
        <div className="widraw-wallet">
            <div className="sub-title">{subTitle}</div>
            <div className="account-details">
                <div className="account-icon">
                    {
                        isImage ? <img src={imagePath} alt="brand-logo" /> :  <BankOutlined />
                    }
                </div>
                <div className="account-detail">

                {
                    label ? <label className="account-name">{label}</label> : ''
                }

                {
                    value ? <label className="account-number">{value}</label> : ''
                }
             </div>
            </div>
            <div className="account-details">
                <div className="encash-label">Encash Amount</div>
                <div className="encash-container"><label className="encash-icon">£</label><label className="encash-amount">{encashAmount}</label></div>
                <div className="remaining-balance"><label>Remaining Balance:</label> <label className="remaining-amount">£{remainingamount}</label></div>
            </div>
            <div className="terms-condition">
            <input type="checkbox"  name="vehicle1" value="Bike"/>
            <label>Check the box to confirm, you have accepted the 
                Terms & Conditions
            </label>
            </div>
            <div className="confirm-btn" onClick={confirmPopup}>
                <Button type="primary">Confirm</Button>
            </div>
          
        </div>
    )
}

export default WidraWalletPopup;