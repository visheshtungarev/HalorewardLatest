/* eslint-disable no-unused-vars */
import { Col, Row, Tabs, Button, Input } from "antd";
import React, { useState } from "react";
import './index.css';
import SideBar from "../../../components/Sidebar/SideBar";
import PriceCard from "../../../components/PriceCard/PriceCard";
import AccountModal from "../../../components/AccountModal/AccountModal";
import RadioTypetile from "../../../components/RadioTypeTile/RadioTypeTile";
import SideMenu from "../../../components/SideMenu";
const { TextArea } = Input;

const onChange = e => {
    console.log('Change:', e.target.value);
};
const CashBackActivity = () => {
    const sidebarData = [
        {
            title: 'Wallet', link: '/wallet', value: '$12.16'
        },
        {
            title: 'Cashback Activity', link: '/cashback-activity', isActive: true
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
    const cashbackData = [
        {
            logoPath: '/images/myntra.png',
            title: 'Myntra',
            date: 'Apr 12, 2021',
            price: '£11.50',
            status: 'Confirmed',
            statusClass: 'confirmed',
            openPopup: openPopup
        },
        {
            logoPath: '/images/paypal.png',
            title: 'Myntra',
            date: 'Apr 12, 2021',
            price: '£11.50',
            status: 'tracked',
            statusClass: 'tracked'
        },
        {
            logoPath: '/images/myntra.png',
            title: 'Myntra',
            date: 'Apr 12, 2021',
            price: '£11.50',
            status: 'diclined',
            statusClass: 'diclined'
        }
    ]
    const showClaimFinal = () => {
        setIsClaimFinalmodalvisible(true);
    }
    const claimTypeData = {
        data: [
            {
                title: 'Missing or Untracked',
                subtitle: "You made a purchase more than 1 day ago but it is not showing in your account."
            },
            {
                title: 'Missing or Untracked',
                subtitle: "You made a purchase more than 1 day ago but it is not showing in your account."
            },
            {
                title: 'Missing or Untracked',
                subtitle: "You made a purchase more than 1 day ago but it is not showing in your account."
            },
            {
                title: 'Missing or Untracked',
                subtitle: "You made a purchase more than 1 day ago but it is not showing in your account."
            }
        ],
        onClickFunc: showClaimFinal,
        btnText: 'Continue',
        
    }
    const [logoutArr] = useState(logoutData)
    const [sideMenuItems,] = useState(sidebarData)
    const [cashbackArr] = useState(cashbackData)
    const [claimTypearr] = useState(claimTypeData)
    const [isDetailsModalVisible, setIsDetailsmodalVisible] = useState(false)
    const [isClaimTypeModalVisible, setIsClaimTypemodalvisible] = useState(false)
    const [isClaimFinalModalVisible, setIsClaimFinalmodalvisible] = useState(false)
    const { TabPane } = Tabs;

    
    
    function callback(key) {
        console.log(key);
    }
    function openPopup() {
        console.log("hello");
        setIsDetailsmodalVisible(true);
    }
    const handleOk = () => {
        setIsDetailsmodalVisible(false);
        setIsClaimTypemodalvisible(false);
        setIsClaimFinalmodalvisible(false);
    };

    const handleCancel = () => {
        setIsDetailsmodalVisible(false);
        setIsClaimTypemodalvisible(false);
        setIsClaimFinalmodalvisible(false);
    };
    const showClaimType = () => {
        setIsClaimTypemodalvisible(true);
    }
    
   
    return (


        <div className="cashback-activity">
            <div className="list_view account-sidebar">
                <Row gutter={5}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }} lg={{ span: 7 }}>
                    <SideMenu/>
                       
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 15 }} lg={{ span: 17 }}>
                        <Row>
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="All" key="1">
                                    <div className="tab-container">
                                        <h5>Apr, 2021</h5>
                                        <div className="tab-cards">
                                            {
                                                cashbackArr && cashbackArr.map((item, i) =>
                                                    <PriceCard key={i}
                                                        logoPath={item.logoPath}
                                                        title={item.title}
                                                        date={item.date}
                                                        price={item.price}
                                                        status={item.status}
                                                        statusClass={item.statusClass}
                                                        openPopup={item.openPopup}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="tab-container">
                                        <h5>Feb, 2021</h5>
                                        <div className="tab-cards">
                                            {
                                                cashbackArr && cashbackArr.map((item, i) =>
                                                    <PriceCard key={i}
                                                        logoPath={item.logoPath}
                                                        title={item.title}
                                                        date={item.date}
                                                        price={item.price}
                                                        status={item.status}
                                                        statusClass={item.statusClass}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Tracked" key="2">
                                    <div className="tab-container">
                                        <h5>Apr, 2021</h5>
                                        <div className="tab-cards">
                                            {
                                                cashbackArr && cashbackArr.map((item, i) =>
                                                    <PriceCard key={i}
                                                        logoPath={item.logoPath}
                                                        title={item.title}
                                                        date={item.date}
                                                        price={item.price}
                                                        status={item.status}
                                                        statusClass={item.statusClass}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Confirmed" key="3">
                                    <div className="tab-container">
                                        <h5>Apr, 2021</h5>
                                        <div className="tab-cards">
                                            {
                                                cashbackArr && cashbackArr.map((item, i) =>
                                                    <PriceCard key={i}
                                                        logoPath={item.logoPath}
                                                        title={item.title}
                                                        date={item.date}
                                                        price={item.price}
                                                        status={item.status}
                                                        statusClass={item.statusClass}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Confirmed" key="4">
                                    <div className="tab-container">
                                        <h5>Apr, 2021</h5>
                                        <div className="tab-cards">
                                            {
                                                cashbackArr && cashbackArr.map((item, i) =>
                                                    <PriceCard key={i}
                                                        logoPath={item.logoPath}
                                                        title={item.title}
                                                        date={item.date}
                                                        price={item.price}
                                                        status={item.status}
                                                        statusClass={item.statusClass}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>
                                </TabPane>
                            </Tabs>

                        </Row>
                    </Col>
                </Row>
            </div>

            <AccountModal
                title='Details'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isDetailsModalVisible}
            >
                {<div className="brand-detail-wrapper">

                    <div className="brand-detail">
                        <div className="brand-icon">
                            <img src="./images/myntra.png" alt="brand-logo" />
                        </div>
                        <label>Myntra</label>
                        <div className="brand-id">
                            ID - 45621548654
                        </div>
                    </div>
                    <div className="form-container">
                        <form>
                            <div className="form-unit w-50">
                                <label>Order Date</label>
                                <input type="text" value="April 22, 2021" />
                            </div>
                            <div className="form-unit w-50">
                                <label>Order Date</label>
                                <label className="confirmed status">Confirmed</label>
                            </div>
                            <div className="form-unit w-50">
                                <label>Order Date</label>
                                <input type="text" value="April 22, 2021" />
                            </div>
                            <div className="form-unit w-50">
                                <label>Order Date</label>
                                <input type="text" value="April 22, 2021" />
                            </div>
                            <div className="confirm-btn w-100" onClick={showClaimType}>
                                <Button type="primary">raise a claim</Button>
                            </div>
                        </form>
                    </div>

                </div>}
            </AccountModal>

            <AccountModal
                title='Claim Type'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isClaimTypeModalVisible}
            >
                {
                    <RadioTypetile

                        data={claimTypearr.data}
                        onClickFunc={claimTypearr.onClickFunc}
                        btnText={claimTypearr.btnText}
                    />
                }
            </AccountModal>
            <AccountModal
                title='Claim Type'
                onOk={handleOk}
                onCancel={handleCancel}
                isvisible={isClaimFinalModalVisible}
            >
                {
                    <div className="claim-final-wrapper">
                        <div className="card-with-border">
                            <div className="brand-detail-wrapper">
                                <div className="brand-detail">
                                    <div className="brand-icon">
                                        <img src="./images/myntra.png" alt="brand-logo" />
                                    </div>
                                    <label>Myntra</label>
                                </div>
                                <div className="form-container">
                                    <form>
                                        <div className="form-unit w-50">
                                            <label>Order Date</label>
                                            <input type="text" value="April 22, 2021" />
                                        </div>
                                        <div className="form-unit w-50">
                                            <label>Order Date</label>
                                            <input type="text" value="April 22, 2021" />
                                        </div>
                                        <div className="form-unit w-50">
                                            <label>Order Date</label>
                                            <input type="text" value="April 22, 2021" />
                                        </div>
                                        <div className="form-unit w-50">
                                            <label>Order Date</label>
                                            <input type="text" value="April 22, 2021" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="claim-box">
                            <h5>Claim</h5>
                            <div className="card-with-border">
                                <div className="brand-detail-wrapper">
                                    <div className="form-container">

                                        <div className="form-unit w-100 border-bottom-with-padding">
                                            <label className="title">Incorrect</label>
                                            <label>Your cashback is at tracked, confirmed or
                                                paid but it’s the wrong amount.</label>
                                        </div>
                                        <TextArea showCount maxLength={250} onChange={onChange} />
                                        <div className="confirm-btn w-100">
                                            <Button type="primary">Continue</Button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
            </AccountModal>
        </div>
    )
}
export default CashBackActivity;