import React, { useState } from "react";
import "./index.css";
import { Button, Card, Col, Divider, Row } from "antd";
import { MdBookmarkBorder, MdBookmark } from 'react-icons/md'
import Breadcurms from "../../components/Breadcrums/Breadcurms";
import {
    ClockCircleOutlined,
} from "@ant-design/icons";
import Heading from "../../components/Heading/Heading";
import { HomeConstant } from "../../Constants";
import Badge from "../../components/Badge/Badge";
import { Collapse } from 'antd';

export default function Cashback() {
    const { Panel } = Collapse;

    const [addBookmark, setAddBookmark] = useState(true)

    const addBookmarkEvent = () => {
        addBookmark ? setAddBookmark(false) : setAddBookmark(true)
    }
    function callback(key) {
        console.log(key);
    }
    return (
        <>
            <div className="home_container">
                <Row align="middle" className="list_view mb-0 pb-0">
                    <Breadcurms
                        data={[{
                            pageName: 'Home',
                            pageLink: '/'
                        }, {
                            pageName: 'All Brands',
                            pageLink: '/all-brands'
                        }, {
                            pageName: 'Myntra',
                            pageLink: '/Myntra'
                        }, {
                            pageName: 'Cashback',
                            pageLink: '/cashback'
                        }]
                        } />
                </Row>
            </div>
            <div className="home_container bg-white">
                <div className="list_view ">
                    <Row>
                        <Col md={{ span: 18 }} className="mx-auto">
                            <div className="couponFrame text-center">
                                <span className="fixed-top-right p-3" onClick={() => addBookmarkEvent()}>
                                    {
                                        addBookmark ?
                                            <MdBookmarkBorder style={{ fontSize: '2rem' }} />
                                            :
                                            <MdBookmark style={{ fontSize: '2rem', color: '#120078' }} />
                                    }
                                </span>
                                <div className="text-center d-flex align-items-center justify-content-center">
                                    <div className="d-flex align-items-center">
                                        <div className="logo">
                                            <img src="Images/myntra.png" width="100%" />
                                        </div>
                                        <h5 className="mb-0 ml-3">Myntra</h5>
                                    </div>
                                </div>
                                <h5 className="text-center fw-bold py-4">Sitewide Savings: upto 11% off + extra 20% off + Avail
                                    no cost EMI with HDFC credit card </h5>


                                <Button type="primary" className="px-5 justify-content-center align-items-center d-flex mx-auto">Apply & GO to site</Button>

                            </div>
                        </Col>
                    </Row>

                </div>


            </div>
            <div className="home_container mt-4">
                <div className="list_view">
                    <Row justify="space-around" gutter={25}>

                        <Col className="  overflow-hidden featuredOffers mb-4" span={24} lg={{ span: 10 }}>
                            <Card className="deals_container rounded1 popularOffers">
                                <h4 className="fw-bold mb-3">Coupon in <span className="theme-color">3 steps</span></h4>
                                <div className="threeSteps">
                                    <div className="steps finished">
                                        <div className="d-flex align-items-center pr-4">
                                            <div className="stepicons ">
                                                <img src="/Images/step1.svg" />
                                            </div>
                                            <h6 className="text-muted mb-0 ">Step 1</h6>
                                        </div>
                                        <h6 className="">Copy the code and go to merchant’s site.</h6>
                                    </div>
                                    <div className="steps ">
                                        <div className="d-flex align-items-center pr-4">
                                            <div className="stepicons ">
                                                <img src="/Images/step2.svg" />
                                            </div>
                                            <h6 className="text-muted mb-0 ">Step 1</h6>
                                        </div>
                                        <h6 claasName="">We’ll automatically paste the code at the
                                            time of checkout.</h6>
                                    </div>
                                    <div className="steps">
                                        <div className="d-flex align-items-center pr-4">
                                            <div className="stepicons ">
                                                <img src="/Images/step3.svg" />
                                            </div>
                                            {/* <h6 claasName="text-muted mb-0 ">Step 1</h6> */}
                                        </div>
                                        {/* <h6 claasName="">Copy the code and go to merchant’s site.</h6> */}
                                    </div>
                                </div>
                                <div className="stepsText d-lg-none d-block">
                                    <h6 ><span className="text-muted mb-0 ">Step 1</span> &nbsp; Copy the code and go to merchant’s site.</h6>
                                </div>
                            </Card>
                        </Col>
                        <Col className="  overflow-hidden featuredOffers mb-4" span={24} lg={{ span: 14 }}>
                            <Card className="deals_container rounded1 popularOffers">
                                <Collapse className="d-lg-none d-block" defaultActiveKey={['1']} onChange={callback}>
                                    <Panel header={<h5 className=" mb-0">Terms & Conditions</h5>} key="1">
                                        <h6 className="mb-4 mt-3">Key Terms</h6>
                                        <ul className="pl-3">
                                            <li className="mb-3">Purchases of Apple products, Wetsuits, Jordan products & Giftcards will not be eligible for cashback. Cashback cannot be earned for purchases made.</li>
                                            <li className="mb-3">Cashback will not be paid on SNEAKRS products.</li>
                                            <li className="mb-3">In an effort to protect the Nike brand, any transactions suspected to be involved with reseller activity will be reviewed by Nike. This could lead to only partial cashback being rewarded.</li>
                                        </ul>
                                    </Panel>

                                </Collapse>
                                <div className="d-none d-lg-block">
                                    <h4 className="fw-bold mb-3">Terms & Conditions</h4>
                                    <h5 className="my-4">Key Terms</h5>
                                    <ul className="pl-3">
                                        <li className="mb-3">Purchases of Apple products, Wetsuits, Jordan products & Giftcards will not be eligible for cashback. Cashback cannot be earned for purchases made.</li>
                                        <li className="mb-3">Cashback will not be paid on SNEAKRS products.</li>
                                        <li className="mb-3">In an effort to protect the Nike brand, any transactions suspected to be involved with reseller activity will be reviewed by Nike. This could lead to only partial cashback being rewarded.</li>
                                    </ul>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="list_view">
                    <Heading
                        HeadingText="Expiring Deals"
                        actionText="View All"
                        actionLink="/all-offers"
                    />
                    <Row align="middle" className="scrolledView" justify="space-around" gutter={30}>
                        {HomeConstant?.expiringDeals?.map((item, key) =>
                            <Col key={key} className="deals_box" span={4}>
                                <Card
                                    className="deals_container"
                                    actions={[

                                    ]}
                                >
                                    <>
                                        <Badge
                                            position={''}
                                            badgeType={item.offer}
                                            badgeText={item.offer}
                                            badgeIcon={item.offerIcon}
                                        />

                                        <Badge
                                            position={''}
                                            badgeType={item.mode}
                                            badgeText={item.mode}
                                            badgeIcon={item.modeIcon}
                                        />

                                        <img className="dealicon" src={item.image} />
                                        <p className="deals_title">{item.title}</p>
                                    </>
                                    <Divider />
                                    <Row align="middle" key="time" className="deals_action">
                                        <ClockCircleOutlined className="deals_offer_title" />
                                        <span>{item.time}</span>
                                    </Row>
                                </Card>
                            </Col>
                        )}
                    </Row>

                </div>
            </div>
        </>
    )

}
