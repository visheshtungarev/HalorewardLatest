import React from "react";
import {Switch } from 'antd';
const Accountcardcontainer = ({onchnageFunc,title,subTitle,imagePath})=>{
    return(
        <div className="account-card-container">
            <div className="icon-container">
                <img src={imagePath} alt="brand-name"/>
            </div>
            <div className="brand-description">
                <div className="brand-title">{title}</div>
                <div className="brand-discription">{subTitle}</div>
            </div>
            <div className="switch-box">
            <Switch defaultChecked onChange={onchnageFunc} />
            </div>
            
        </div>
    )
}
export default Accountcardcontainer;