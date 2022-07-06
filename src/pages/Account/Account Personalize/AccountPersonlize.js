/* eslint-disable no-unused-vars */
import { Row, Col, Button } from "antd";
import React, { useState } from "react";
import AccountModal from "../../../components/AccountModal/AccountModal";
import CategoryBox from "../../../components/Category Box/CategoryBox";
import SideBar from "../../../components/Sidebar/SideBar";
import SideMenu from "../../../components/SideMenu";
import ThankyouPopup from "../../../components/ThankyouPopup/ThankyouPopup";
import './index.css';

const AccountPersonalize = () => {
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
            title: 'Personalized', link: '/personalized', isActive: true
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
    const categoryData = [
        {
            value: 'Fashion',
            isclass: 'azure'
        },
        {
            value: 'Travel',
            isclass: 'orange'
        },
        {
            value: 'Health & Beauty',
            isclass: 'mango'
        },
        {
            value: 'Technology',
            isclass: 'blue'
        },
        {
            value: 'Home',
            isclass: 'azure'
        },
        {
            value: 'Babies & Kidsme',
            isclass: 'orange'
        },
        {
            value: 'Sports & Outdoors',
            isclass: 'mango'
        },
        {
            value: 'Finance',
            isclass: 'blue'
        },
    ]
    const welcomeData = {
        title: 'Thankyou!',
        imagePath: './images/welcome.png',
        subtitle: 'All your selected brands are saved sucessfully.',
        btnText: 'Done'
    }
    const categoryactiveData = [
        {
            value: 'Fashion',
            isclass: 'azure active',
            
        },
        {
            value: 'Travel',
            isclass: 'orange active',
            
        },
        {
            value: 'Health & Beauty',
            isclass: 'mango active',
           
        },

    ]
    const [sideMenuItems,] = useState(sidebarData)
    const [logoutArr] = useState(logoutData)
    const [categoryArr] = useState(categoryData)
    const [categoryactiveArr] = useState(categoryactiveData)
    const [isGetStarted, setIsGetStarted] = useState(false);
    const [isThankyouModalVisible, setIsThankyouModalVisible] = useState(false);
    const [welcomeArr] = useState(welcomeData)

    const showStarted = () => {
        setIsGetStarted(true);
    }
    const handleOk = () => {
        setIsThankyouModalVisible(false);
    };

    const handleCancel = () => {
        setIsThankyouModalVisible(false);
    };

    const showThankyou = () => {
        setIsThankyouModalVisible(true);
    }
    return (
        <div className="account-personalize">
            <div className="list_view account-sidebar">
                <Row gutter={5}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }} lg={{ span: 7 }}>
                    <SideMenu/>

                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 15 }} lg={{ span: 17 }}>
                        <Row align="middle" justify="space-around">
                            <Col span={24}>
                                <div className="card-with-image">
                                    <div className="image-container">
                                        <img src="./Images/personalize.png"></img>
                                    </div>
                                    <div className="text-container">
                                        <h4>Personalise your experience</h4>
                                        <p>Your preferences will help us keep you updated on
                                            offers relevant to your taste.</p>
                                        <div className="confirm-btn" onClick={showStarted}>
                                            <Button type="primary">Get started</Button>
                                        </div>

                                    </div>
                                </div>
                                {
                                    isGetStarted ?
                                        <>
                                            <div className="card-categories">
                                                <div className="card-title">
                                                    <div className="title-content">
                                                        <h5>Pick your favorite categories</h5>
                                                        <p>Select 3 - 10 Categories (Fill the bubble to pick)</p>
                                                    </div>
                                                    <div className="card-btn">
                                                        <div className="confirm-btn" onClick={showThankyou}>
                                                            <Button type="primary">Save</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="categories-unit">

                                                    {
                                                        categoryArr && categoryArr.map((item, i) =>
                                                            <CategoryBox
                                                                key={i}
                                                                value={item.value}
                                                                isclass={item.isclass}
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </>
                                        :
                                        ''
                                }



                                <div className="card-categories">
                                    <div className="card-title">
                                        <div className="title-content">
                                            <h5>Your favorite categories</h5>
                                        </div>
                                        <div className="card-btn">
                                            <label>Edit favourites</label>
                                        </div>
                                    </div>
                                    <div className="categories-unit">

                                        {
                                            categoryactiveArr && categoryactiveArr.map((item, i) =>
                                                <CategoryBox
                                                    key={i}
                                                    value={item.value}
                                                    isclass={item.isclass}
                                                />
                                            )
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <AccountModal
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isThankyouModalVisible}
            >
                {
                    <ThankyouPopup
                        imagePath={welcomeArr.imagePath}
                        title={welcomeArr.title}
                        subtitle={welcomeArr.subtitle}
                        btnText={welcomeArr.btnText}
                    />
                }
            </AccountModal>

        </div>
    )
}

export default AccountPersonalize;