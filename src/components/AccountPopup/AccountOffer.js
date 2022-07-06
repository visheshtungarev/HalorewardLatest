import React from 'react';
// import { Form, Input, Button } from 'antd';
import { Tabs } from 'antd';
import AccountSearchOffer from '../AccountSearchOffer/AccountSearchOffer';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
export default function AccountOffer() {
return (
        <div className="account-tab-container">
            <Tabs defaultActiveKey="1" onChange={callback} >
                <TabPane tab="Activated Offers" key="1">
                    <AccountSearchOffer/>
                    
                </TabPane>
                <TabPane tab="All Offers" key="2">
                <AccountSearchOffer/>
                </TabPane>
            </Tabs>
        </div>
    )
}