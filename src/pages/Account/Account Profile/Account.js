/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./index.css";
import { Col, Row, Card } from "antd";
import AccountCard from "../../../components/AccountCard/AccountCard";
import Heading from "../../../components/Heading/Heading";
import SideBar from "../../../components/Sidebar/SideBar";
import AccountModal from "../../../components/AccountModal/AccountModal";
import AccountName from "../../../components/AccountPopup/AccountName";
import AccountEmail from "../../../components/AccountPopup/AccountEmail";
import AccountPassword from "../../../components/AccountPopup/AccountPassword";
import AccountAddress from "../../../components/AccountPopup/AccountAddress";
import AccountBank from "../../../components/AccountPopup/AccountBank";
import AccountOffer from "../../../components/AccountPopup/AccountOffer";
import SideMenu from "../../../components/SideMenu";

const Account = () => {
    const sidebarData = [
        {
            title: 'Wallet', link: '/wallet', value: '$12.16'
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
    const bankpaypalData = [
        {
            option: "Add account",
            imagepath: "/images/paypal.png",
            imagetext: "Via"

        },
    ]
    const creditcardData = [
        {
            label: "Once  you add a credit card, you will be able to earn In-store Cashback & make online payments",
            value: "Add a Credit Card",
            option: "Add Card",
            link: "/Add-card",
            type: "text",
            reverse: true
        },
    ]
    const markettingData = [
        {
            label: "Claimed, expiring, promotions, etc.",
            value: "Push notifications",
            type: "text",
            reverse: true,
            isswitch: true,
            onchnageFunc: onChange
        },
    ]

    const handleOk = () => {
        setIsNameModalVisible(false);
        setIsEmailModalvisible(false);
        setIsPasswordModalvisible(false);
        setIsMobileModalvisible(false);
        setIsBankModalvisible(false);
        setIsOfferModalvisible(false);
    };

    const handleCancel = () => {
        setIsNameModalVisible(false);
        setIsEmailModalvisible(false);
        setIsPasswordModalvisible(false);
        setIsMobileModalvisible(false);
        setIsBankModalvisible(false);
        setIsOfferModalvisible(false);
    };

    const showModalName = () => {
        setIsNameModalVisible(true);
    };

    const showModalEmail = () => {
        setIsEmailModalvisible(true);
    }
    const showModalPassword = () => {
        setIsPasswordModalvisible(true);
    }
    const showModalMobile = () => {
        setIsMobileModalvisible(true);
    }
    const showmodalBank=()=>{
        setIsBankModalvisible(true);
    }
    const showModalOffers=()=>{
        setIsOfferModalvisible(true);
    }
    const allTredingBrands = [
        {
            label: "Name",
            value: "Sridhar",
            option: "CHANGE",
            type: "text",
            showFunc: showModalName
        },
        {
            label: "Email",
            value: "sridhar123@gmail.com",
            option: "CHANGE",
            type: "text",
            showFunc: showModalEmail
        },
        {
            label: "Password",
            value: "Password",
            option: "CHANGE",
            type: "password",
            showFunc: showModalPassword
        },
        {
            label: "Please add your current address",
            value: "Mobile Number",
            option: "Add Address",
            type: "text",
            showFunc: showModalMobile,
            reverse: true
        },

    ]
    const [sideMenuItems,] = useState(sidebarData)
    const [dataArr] = useState(allTredingBrands)
    const [logoutArr] = useState(logoutData)
    const [bankpaypalArr] = useState(bankpaypalData)
    const [creditcardArr] = useState(creditcardData)
    const [markettingAttr] = useState(markettingData)
    const [isNameModalVisible, setIsNameModalVisible] = useState(false);
    const [isEmailModalvisible, setIsEmailModalvisible] = useState(false);
    const [isPasswordModalvisible, setIsPasswordModalvisible] = useState(false);
    const [isMobileModalvisible, setIsMobileModalvisible] = useState(false);
    const [isBankModalvisible, setIsBankModalvisible] = useState(false);
    const[isOfferModalvisible,setIsOfferModalvisible]= useState(false);

    return (
        <div className="home_container account-profile-component">
            <div className="list_view account-sidebar">
                <Row gutter={5}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }} lg={{ span: 7 }}>
                    <SideMenu/>
                       
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 15 }} lg={{ span: 17 }}>
                        <Heading
                            HeadingText="Profile Details"
                        />

                        <Row align="middle" justify="space-around">
                            <Col className='deals_box trending_brands mb-4 px-2 text-left' span={24}>
                                <Card className="deals_container account-profile">
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
                                </Card>
                            </Col>

                        </Row>
                        <Heading
                            HeadingText="How would you like to be paid ?"
                        />

                        <Row align="middle" justify="space-around">
                            <Col className='deals_box trending_brands mb-4 px-2 text-left' span={24}>
                                <Card className="deals_container account-profile">
                                    {
                                        // bankArr && bankArr.map((item, i) =>
                                            <AccountCard 
                                                label="We do not store any of your personal information. We use the latest technologies to encrypt your data."
                                                value="Via Bank Account"
                                                option="Add account"
                                                type="Text"
                                                reverse={true}
                                                showFunc={showmodalBank}
                                            />

                                        // )
                                    }
                                </Card>
                            </Col>
                        </Row>

                        <Row align="middle" justify="space-around">
                            <Col className='deals_box trending_brands mb-4 px-2 text-left' span={24}>
                                <Card className="deals_container account-profile">
                                    {
                                        bankpaypalArr && bankpaypalArr.map((item, i) =>
                                            <AccountCard key={i}
                                                imagepath={item.imagepath}
                                                imagetext={item.imagetext}
                                                option={item.option}
                                                showFunc={item.showFunc}
                                            />

                                        )
                                    }
                                </Card>
                            </Col>
                        </Row>



                        <Heading
                            HeadingText="Credit cards"
                            popText="see all offers"
                            poptextClass="showModal-label"
                            openPopup={showModalOffers}
                        />

                        <Row align="middle" justify="space-around">
                            <Col className='deals_box trending_brands mb-4 px-2 text-left' span={24}>
                                <Card className="deals_container account-profile">
                                    {
                                        creditcardArr && creditcardArr.map((item, i) =>
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
                                </Card>
                            </Col>
                        </Row>

                        <Heading
                            HeadingText="Marketing preferences"
                        />

                        <Row align="middle" justify="space-around">
                            <Col className='deals_box trending_brands mb-4 px-2 text-left' xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                <Card className="deals_container account-profile">
                                    {
                                        markettingAttr && markettingAttr.map((item, i) =>
                                            <AccountCard key={i}
                                                label={item.label}
                                                value={item.value}
                                                option={item.option}
                                                type={item.type}
                                                reverse={item.reverse}
                                                isswitch={item.isswitch}
                                                onchnageFunc={item.onchnageFunc}
                                            />

                                        )
                                    }
                                </Card>
                            </Col>
                            <Col className='deals_box trending_brands mb-4 px-2 text-left' xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                <Card className="deals_container account-profile">
                                    {
                                        markettingAttr && markettingAttr.map((item, i) =>
                                            <AccountCard key={i}
                                                label={item.label}
                                                value={item.value}
                                                option={item.option}
                                                type={item.type}
                                                reverse={item.reverse}
                                                isswitch={item.isswitch}
                                                onchnageFunc={item.onchnageFunc}
                                            />

                                        )
                                    }
                                </Card>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </div>



            <AccountModal
                title='Change Name'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isNameModalVisible}
            >
                {<AccountName />}
            </AccountModal>

            <AccountModal
                title='Update Email'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isEmailModalvisible}
            >
                {<AccountEmail />}
            </AccountModal>

            <AccountModal
                title='Change Password'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isPasswordModalvisible}
            >
                {<AccountPassword />}
            </AccountModal>


            <AccountModal
                title='Update Address'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isMobileModalvisible}
            >
                {<AccountAddress />}
            </AccountModal>

            <AccountModal
                title='Add Bank Account'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isBankModalvisible}
            >
                {<AccountBank />}
            </AccountModal>

            <AccountModal
                title='On Card Offers'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isOfferModalvisible}
            >
                {<AccountOffer />}
            </AccountModal>
        </div>
    );
};

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

export default Account;
