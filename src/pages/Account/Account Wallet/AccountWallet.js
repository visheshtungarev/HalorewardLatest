/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./index.css";
import { Col, Row ,Card} from "antd";
import SideBar from "../../../components/Sidebar/SideBar";
import Heading from "../../../components/Heading/Heading";
import AccountCard from "../../../components/AccountCard/AccountCard";
import BankAccount from "../../../components/BankAccount/BankAccount";
import WalletModal from "../../../components/WalletModal/Widrawbank";
import WidraWalletPopup from "../../../components/WalletPopup/WidrawWalletpopup";
import SideMenu from "../../../components/SideMenu";
const AccountWallet = () => {

    const handleOk = () => {
        setIsBankWidrawModalVisible(false);
        setIspapalWidrawModalVisible(false);
        setIsdonationWidrawModalVisible(false);
    };

    const handleCancel = () => {
        setIsBankWidrawModalVisible(false);
        setIspapalWidrawModalVisible(false);
        setIsdonationWidrawModalVisible(false);
    };

    const showBankWidraw = () => {
        setIsBankWidrawModalVisible(true);
    }
    const showPaypalWidraw = () => {
        setIspapalWidrawModalVisible(true);
    }
    const showDonationWidraw = () => {
        setIsdonationWidrawModalVisible(true);
    }
   
    const sidebarData = [
        {
            title: 'Wallet', link: '/wallet', value: '$12.16', isActive:true
        },
        {
            title: 'Cashback Activity', link: '/cashback-activity'
        },
        {
            title: 'Wallet statement', link: '/wallet-statement'
        },
        {
            title: 'Gift Cards', link: '/Gift-Cards'
        },
        {
            title: 'Personalized', link: '/personalized'
        },
        {
            title: 'Claims', link: '/claims'
        },
        {
            title: 'Saved', link: '/Saved'
        },
        {
            title: 'Help & Support', link: '/Help-Support'
        },


    ]
    const logoutData = {
        data: 'Logout',
        link: '/logout'
    }
    const allTredingBrands = [
        {
            label: "Name",
            value: "Sridhar",
            type: "text",
        },
        {
            label: "Email",
            value: "sri*******@*****.com",
            type: "text",
        }

    ]

    const bankData =[
        {
            label:'Account Number',
            value:'5************8',
            isdetail:true,
            openopup:showBankWidraw
        },
        {
            label:'Account Number',
            value:'9************3',
            isdetail:true,
            openopup:showBankWidraw
        }
    ]

    const donationData = [
        {
            value:'Save the children',
            isImage:true,
            imagePath:'/images/myntra.png',
            isdetail:false,
            openopup:showDonationWidraw,
        },
        {
            value:'Blood Care',
            isImage:true,
            imagePath:'/images/paypal.png',
            isdetail:false,
            openopup:showDonationWidraw
        },
        {
            value:'Blood Care',
            isImage:true,
            imagePath:'/images/flipkart.png',
            isdetail:false,
            openopup:showDonationWidraw
        }
    ]
    const [dataArr] = useState(allTredingBrands)
    const [sideMenuItems,] = useState(sidebarData)
    const [logoutArr] = useState(logoutData)
    const [bankArr] = useState(bankData)
    const [donationArr] =useState(donationData)
    const [isBankWidrawModalVisible, setIsBankWidrawModalVisible] = useState(false);
    const [ispapalWidrawModalVisible, setIspapalWidrawModalVisible] = useState(false);
    const [isdonationWidrawModalVisible, setIsdonationWidrawModalVisible] = useState(false);
   
    return (
        <div className="account-wallet-container">
            <div className="list_view account-sidebar">
                <Row gutter={5}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }} lg={{ span: 7 }}>
                    <SideMenu/>
                      
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 15 }} lg={{ span: 17 }}>
                        <Row align="middle" justify="space-around">
                            <Col className='balance-wrapper' span={24}>
                                <Card className="balance-card">
                                    <div className="balance-container">
                                        <div className="unit">
                                            <label className="title">Current Balance</label>
                                            <label className="value">£120.65</label>
                                        </div>
                                        <div className="unit text-right total-earned">
                                            <label className="title">Total Earned</label>
                                            <label className="value">£520.65</label>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Heading
                            HeadingText="Withdraw to"
                        />
                        <Row align="middle" justify="space-around">
                            <Col className="paypal-details" span={24}>
                                <Card className="card-holder">
                                    <div className="paypal-title">
                                            <label className="title">Paypal</label>
                                            <label className="link text-right" onClick={showPaypalWidraw}>UNLINK</label>
                                    </div>
                                    <div className="paypal-detail">
                                        <div className="icon">
                                            <img src="/images/paypal.png" alt=""></img>
                                        </div>
                                        <div className="form-container">
                                        {
                                            dataArr && dataArr.map((item, i) =>
                                                <AccountCard key={i}
                                                    label={item.label}
                                                    value={item.value}
                                                    option={item.option}
                                                    type={item.type}
                                                    reverse={item.reverse}
                                                    showFunc={item.showFunc}
                                                />

                                            )
                                        }
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row align="middle" justify="space-around">
                            <Col className="paypal-details" span={24}>
                                <Card className="card-holder">
                                    <div className="paypal-title">
                                            <label className="title">Bank Account</label>
                                            <label className="link text-right">Add account</label>
                                    </div>
                                    <div className="bank-details" >
                                        {
                                            bankArr && bankArr.map((item,i)=>
                                            <BankAccount
                                            key={i}
                                            label={item.label}
                                            value={item.value}
                                            isdetail={item.isdetail}
                                            openPopup={item.openopup}
                                            />
                                            )
                                        }
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row align="middle" justify="space-around">
                            <Col className="paypal-details" span={24}>
                                <Card className="card-holder">
                                    <div className="paypal-title">
                                            <label className="title">Make a Donation</label>
                                    </div>
                                    <div className="bank-details">
                                        {
                                            donationArr && donationArr.map((item,i)=>
                                            <BankAccount
                                            key={i}
                                            value={item.value}
                                            isImage={item.isImage}
                                            imagePath={item.imagePath}
                                            isdetail={item.isdetail}
                                            openPopup={item.openopup}
                                            />
                                            )
                                        }
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <WalletModal
                title='Withdraw to'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isBankWidrawModalVisible}
            >
                {<WidraWalletPopup
                    label='Account Number'
                    value='6************9'
                    subTitle='Enter the amount you want to withdraw in
                    your bank account'
                    encashAmount='24'
                    remainingamount='110.65'
                />}
            </WalletModal>


            <WalletModal
                title='Withdraw to'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={ispapalWidrawModalVisible}
            >
                {<WidraWalletPopup
                    label='Account Number'
                    value='6************9'
                    subTitle='Enter the amount you want to withdraw in
                    your bank account'
                    encashAmount='24'
                    remainingamount='110.65'
                    isImage={true}
                    imagePath='/images/paypal.png'
                />}
            </WalletModal>
            <WalletModal
                title='Withdraw to'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isdonationWidrawModalVisible}
            >
                {<WidraWalletPopup
                    value='Save the children'
                    subTitle='Enter the amount you want to withdraw in
                    your bank account'
                    encashAmount='24'
                    remainingamount='110.65'
                    isImage={true}
                    imagePath='/images/paypal.png'
                    
                />}
            </WalletModal>

            
        </div>
        
    )
}

export default AccountWallet;