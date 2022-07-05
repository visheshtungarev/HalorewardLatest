import React from "react"
import './index.css';
import {Button } from "antd";

const ThankyouPopup = ({imagePath,title,subtitle,btnText}) => {
    return (
        <div className="welcome-container">
            <div className="image">
                <img src={imagePath} alt="welcome image" />
            </div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <div className="confirm-btn">
                <Button type="primary">{btnText}</Button>
            </div>
        </div>
    )
}

export default ThankyouPopup;
