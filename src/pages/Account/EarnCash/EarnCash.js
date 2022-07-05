import React from "react";
import {Breadcrumb } from "antd";
import HelpComponent from "../../../components/HelpComponent/HelpComponent";
const EarnCash = () =>{
return(
        <div className="list_view help-container">
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Help & Support</Breadcrumb.Item>
            <Breadcrumb.Item>FAQ</Breadcrumb.Item>
        </Breadcrumb>
        <HelpComponent/>
        </div>
        
    )
}

export default EarnCash;