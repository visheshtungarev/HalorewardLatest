/* eslint-disable no-unused-vars */
import { Col, Row,Input } from "antd";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import SideBar from "../../../components/Sidebar/SideBar";
import {SearchOutlined,RightOutlined} from '@ant-design/icons';
import './index.css';
import SideMenu from "../../../components/SideMenu";
const Help = () =>{
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
            title: 'Help & Support', link: '/Help-Support',isActive: true
        },


    ]
    const logoutData = {
        data: 'Logout',
        link: '/logout'
    }
    const accordianData = [
        {
            label:'Why didn’t I earn cash back?',
            link:'/earn-cash'
        },
        {
            label:'Travel Purchases for Hallorewards',
            link:'/travel-purchase'
        },
        {
            label:'How to Earn Cash Back ?',
            link:'/cash-back'
        },
        {
            label:'How Can I Tell If I’m earning Cashback ?',
            link:'/earn-cashback'
        },
        {
            label:'The may ways to earn cashback with Hallorewards',
            link:'/hellowords'
        },
        {
            label:'Returns, Cancellations & Exchanges',
            link:'/returns'
        }
    ]
    const [sideMenuItems,] = useState(sidebarData)
    const [logoutArr] = useState(logoutData)
    const [accordianArr] = useState(accordianData)
    return(
        <div className="help-component">
            <div className="list_view account-sidebar">
             <Row gutter={5}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }} lg={{ span: 7 }}>
                    <SideMenu/>
                       
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 15 }} lg={{ span: 17 }}>
                        <div className="accordian-card">
                            <h5>Hi Sridhar, how can we help?</h5>
                            <div className="searchbox">
                                <SearchOutlined />
                                <Input placeholder="Start Typing..."/>
                            </div>
                            <div className="searchbox-content">
                                <label>Frequently Asked Questions</label>

                                {
                                    accordianArr && accordianArr.map((item,i)=>
                                      <div className="unit" key={i}>
                                            <div className="heading">
                                                <Link  to={item.link}>{item.label}</Link>
                                                <RightOutlined />
                                            </div>
                                      </div>
                                    )
                                }


                                {/* <div className="unit" Link>
                                    <div className="heading">
                                        <Link  to={'/earn-cash'}>Why didn’t I earn cash back?</Link>
                                        <RightOutlined />
                                    </div>
                                </div>
                                <div className="unit">
                                    <div className="heading">
                                    <Link  to={'/travel-purchase'}>Travel Purchases for Hallorewards</Link>
                                        <label></label>
                                        <RightOutlined />
                                    </div>
                                </div>
                                <div className="unit">
                                    <div className="heading">
                                        <label>How to Earn Cash Back ?</label>
                                        <RightOutlined />
                                    </div>
                                </div>
                                <div className="unit">
                                    <div className="heading">
                                        <label>How Can I Tell If I’m earning Cashback ?</label>
                                        <RightOutlined />
                                    </div>
                                </div>
                                <div className="unit">
                                    <div className="heading">
                                        <label>The may ways to earn cashback with Hallorewards</label>
                                        <RightOutlined />
                                    </div>
                                </div>
                                <div className="unit">
                                    <div className="heading">
                                        <label>Returns, Cancellations & Exchanges</label>
                                        <RightOutlined />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </Col>
            </Row>
        </div>
        </div>
    )
}

export default Help;