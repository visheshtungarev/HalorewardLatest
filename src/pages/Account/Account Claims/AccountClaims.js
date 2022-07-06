/* eslint-disable no-unused-vars */
import { Row, Col } from "antd";
import React, { useState } from "react";
import AccountModal from "../../../components/AccountModal/AccountModal";
import BrandTile from "../../../components/BrandTile/BrandTile";
import Heading from "../../../components/Heading/Heading";
import RadioTypetile from "../../../components/RadioTypeTile/RadioTypeTile";

import SideMenu from "../../../components/SideMenu";
import './index.css';
const AccpountClaims = () => {
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
            title: 'Claims', link: '/claims', isActive: true
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
    const brandTileData = [
        {
            imagePath: './images/myntra.png',
            title: 'Myntra',
            date: 'Apr 22, 2021',
            data: [
                {
                    label: 'Claim ID',
                    value: 'QWE12345AA3'
                },
                {
                    label: 'Status',
                    status: 'resolved'
                },
                {
                    label: 'Claim Type',
                    value: 'Coupon/Prize Draw'
                }
            ]


        },
        {
            imagePath: './images/myntra.png',
            title: 'Myntra',
            date: 'Apr 22, 2021',
            data: [
                {
                    label: 'Claim ID',
                    value: 'QWE12345AA3'
                },
                {
                    label: 'Status',
                    status: 'pending'
                },
                {
                    label: 'Claim Type',
                    value: 'Coupon/Prize Draw'
                }
            ]


        }
    ]
    const showClaimFinal = () => {
        console.log("hi")
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
    const showModalOffers = () => {
        setIsClaimTypemodalvisible(true);
    }
    const handleOk = () => {
        setIsClaimTypemodalvisible(false);
    };
    const handleCancel = () => {
        setIsClaimTypemodalvisible(false);
    };
  
    const [brandTileArr] = useState(brandTileData)
    const [isClaimTypeModalVisible, setIsClaimTypemodalvisible] = useState(false)
    const [claimTypearr] = useState(claimTypeData)
    return (
        <div className="accountclaims-container">
            <div className="list_view account-sidebar">
                <Row gutter={5}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }} lg={{ span: 7 }}>
                       <SideMenu/>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 15 }} lg={{ span: 17 }}>
                        <Heading
                            HeadingText="All Claims"
                            popText="Raise a claim"
                            poptextClass="showModal-label"
                            openPopup={showModalOffers}
                        />
                        <Row>
                            <Col span={24}>
                                <h5>Apr, 2021</h5>
                            </Col>
                            {brandTileArr && brandTileArr.map((item, i) =>
                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} key={i} className="accountclaim-unit px-2">
                                    <BrandTile
                                        data={item.data}
                                        date={item.date}
                                        title={item.title}
                                        imagePath={item.imagePath}
                                    />
                                </Col>
                            )}

                        </Row>
                    </Col>
                </Row>
            </div>

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
        </div>
    )
}
export default AccpountClaims;