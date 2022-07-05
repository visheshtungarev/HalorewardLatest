/* eslint-disable no-unused-vars */
import { Col, Row } from "antd";
import React, { useState } from "react";
import './index.css';
import SideBar from "../../../components/Sidebar/SideBar";
import PriceCard from "../../../components/PriceCard/PriceCard";
import SideMenu from "../../../components/SideMenu";
const WalletStatement=()=>{
    const sidebarData = [
        {
            title: 'Wallet', link: '/wallet', value: '$12.16'
        },
        {
            title: 'Cashback Activity', link: '/cashback-activity'
        },
        {
            title: 'Wallet statement', link: '/wallet-statement',isActive:true
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
            logoPath:'/images/myntra.png',
            title:'Myntra',
            date:'Apr 12, 2021',
            price:'£11.50',
            iStatement:true,
            isProfit:true

        },
        {
            logoPath:'/images/paypal.png',
            title:'Myntra',
            date:'Apr 12, 2021',
            price:'£11.50',
            iStatement:true,
            isProfit:false
        },
        {
            logoPath:'/images/myntra.png',
            title:'Myntra',
            date:'Apr 12, 2021',
            price:'£11.50',
            iStatement:true,
            isProfit:true
        }
    ]
    const [logoutArr] = useState(logoutData)
    const [sideMenuItems,] = useState(sidebarData)
    const [cashbackArr]= useState(cashbackData)
    

    
    return(
        <div className="cashback-activity">
            <div className="list_view account-sidebar">
            <Row gutter={5}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }} lg={{ span: 7 }}>
                       <SideMenu/>
                           
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 15 }} lg={{ span: 17 }}>
                    <Row>
                    <div className="tab-container">
                                    <h5>Apr, 2021</h5>
                                    <div className="tab-cards">
                                        {
                                            cashbackArr && cashbackArr.map((item,i)=>
                                            <PriceCard key={i}
                                            logoPath={item.logoPath}
                                            title={item.title}
                                            date={item.date}
                                            price={item.price}
                                            status={item.status}
                                            statusClass={item.statusClass}
                                            iStatement={item.iStatement}
                                            isProfit={item.isProfit}
                                            />
                                            )
                                        }
                                    </div>
                                </div>
                        
                    </Row>
                </Col>
            </Row>
            </div>
        </div>
    )
}
export default WalletStatement;