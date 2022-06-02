import React, { useEffect, useState } from "react";
import "./index.css";
import { Col, Row, Card, Divider, Button } from "antd";

import {
    GlobalOutlined,
    CopyOutlined,
    ShopOutlined,
    ShoppingOutlined
} from "@ant-design/icons";
import { FiClock } from 'react-icons/fi'

// import Badge from "../../components/Badge/Badge";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";
// import { render } from "@testing-library/react";
// const { Meta } = Card;


const expiringDeals = [
    {
        offer: "Coupon",
        mode: "Online",
        image: "/Images/flipkart.png",
        title: "Win a chance to get voucher of worth £280",
        time: "1d 2h 21m",
        offerIcon: <CopyOutlined />,
        modeIcon: <GlobalOutlined />
    },
    {
        offer: "Cashback",
        mode: "Instore",
        image: "/Images/nykaa.png",
        title: "Win a chance to get voucher of worth £280",
        time: "1d 2h 21m",
        offerIcon: <ShoppingOutlined />,
        modeIcon: <ShopOutlined />
    },
    {
        offer: "Prize Draw",
        mode: "Instore & online",
        image: "/Images/flipkart.png",
        title: "Win a chance to get voucher of worth £280",
        time: "1d 2h 21m",
        offerIcon: <CopyOutlined />,
        modeIcon: <GlobalOutlined />
    },
    {
        offer: "Coupon",
        mode: "Instore & online",
        image: "/Images/nykaa.png",
        title: "Win a chance to get voucher of worth £280",
        time: "1d 2h 21m",
        offerIcon: <CopyOutlined />,
        modeIcon: <GlobalOutlined />
    },
]
const trendingDeals = [
    {
        title: "Myntra",
        image: "/Images/flipkart.png",
        content: "1 coupons,2 Prize Draws",
        time: "1d 2h 21m",

    },
    {
        title: "Nike",
        image: "/Images/nykaa.png",
        content: "12 Prize Draws",
        time: "1d 2h 21m",

    },
    {
        title: "Flipkart",
        image: "/Images/flipkart.png",
        content: "upto 7% cashback, 2 Prize Draws",
        time: "1d 2h 21m",

    },
    {
        title: "GAP",
        image: "/Images/nykaa.png",
        content: "upto 7% cashback, 4 coupons, 2 Prize Draws",
        time: "1d 2h 21m",

    }
]
export default function Saved() {
    const [trending,] = useState(trendingDeals)
    const [, setOpenSidePanel] = useState(false)


    useEffect(() => {
        console.log(window.innerWidth)
        if (window.innerWidth > 993) {
            setOpenSidePanel(true)
        }
    }, [])
    return (
        <div className="home_container">
            <div className="list_view">
                <Row justify="space-around" gutter={20}>
                    <Col span={24} lg={{ span: 6 }}>
                        <Card className="deals_container popularOffers rounded1">
                            <ul className='sideMenu devider'>
                                <li><Link to={''}>Account Settings</Link></li>
                                <li><Link className="d-flex justify-content-between" to={''}><span>Wallet</span><span className="fw-bold">£12.65</span></Link></li>
                                <li><Link to={''}>Cashback Activity</Link></li>
                                <li><Link to={''}>Account Statement</Link></li>
                                <li><Link to={''}>Gift Cards</Link></li>
                                <li><Link to={''}>Personalized</Link></li>
                                <li><Link to={''}>Claims</Link></li>
                                <li><Link className="savedcolor" to={''}>Saved</Link></li>
                                <li><Link to={''}>Help & Support</Link></li>
                                <li><Link className="logoutColor" to={''}>Logout</Link></li>
                            </ul>
                        </Card>
                    </Col>
                    <Col span={24} lg={{ span: 18 }}>
                        <Row gutter={30} className="mb-4">
                            <Col className="deals_box" span={24}>
                                <Card className="deals_container">
                                    <div className="d-flex align-items-center">
                                        <div><img src="/Images/prize.svg" height={30} /></div>
                                        <h5 className="mb-0 fw-bold flex-grow-1 pl-3">Prize Draws</h5>
                                        <div className="DrwaCount mr-3">4</div>
                                        <span><img src="/Images/arrow_next.svg" height={20} /></span>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Heading
                            HeadingText="Coupons"
                            actionText="View All"
                            actionLink="/all-offers"
                        />
                        <Row align="middle" className="scrolledView mb-4" justify="space-around" gutter={30}>


                            {/* when no offer found ====================*/}

                            <Col className="deals_box" span={24} style={{ display: 'none' }}>
                                <Card className="deals_container">
                                    <Row align="middle">
                                        <Col span={12} className="py-4 ">
                                            <img src="/Images/no_offer.svg" height={200} style={{ width: '70%' }} />
                                        </Col>
                                        <Col span={12}>
                                            <h5>You haven’t pinned any offers</h5>
                                            <p>Your preferences will help us keep you updated on
                                                offers relevant to your taste.</p>
                                            <Button type="primary" size="large">
                                                View All offers
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                            {/* when no offer found ====================*/}

                            {expiringDeals.map((item, key) =>
                                <Col key={key} className="deals_box" span={6}>
                                    <Card
                                        className="deals_container"
                                        actions={[

                                        ]}
                                    >
                                        <>


                                            <img className="dealicon" src={item.image} />
                                            <p className="deals_title">{item.title}</p>
                                        </>
                                        <Divider />
                                        <Row align="middle" key="time" className="deals_action">
                                            {/* <ClockCir className="deals_offer_title" /> */}
                                            <span className='d-flex align-items-center timer fw-bold'> <FiClock /> &nbsp; {item.time}</span>

                                        </Row>
                                    </Card>
                                </Col>
                            )}
                        </Row>


                        <Heading
                            HeadingText="Trending"
                            actionText="View All"
                            actionLink="/Trending-offers"
                        />
                        <Row align="middle" className="scrolledView" justify="space-around" gutter={30}>

                            {/* when no coupon found ====================*/}

                            <Col className="deals_box" span={24} style={{ display: 'none' }}>
                                <Card className="deals_container">
                                    <Row align="middle">
                                        <Col span={12} className="py-4 ">
                                            <img src="/Images/no_coupon.svg" height={200} style={{ width: '70%' }} />
                                        </Col>
                                        <Col span={12}>
                                            <h5>You haven’t pinned any coupons</h5>
                                            <p>Your preferences will help us keep you updated on
                                                offers relevant to your taste.</p>
                                            <Button type="primary" size="large">
                                                View All offers
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                            {/* when no coupon found ====================*/}


                            {trending && trending.map((item, i) =>
                                <Col key={i} className="deals_box trending_brands mb-3 text-left" span={6}>
                                    <Card
                                        className="deals_container ">

                                        <>
                                            <img className="dealicon_img_frame " src={item.image} />
                                            <p className="deals_title mb-0 mt-0" style={{ minHeight: 'auto' }}>{item.title}</p>
                                            <p>{item.content}</p>

                                        </>
                                    </Card>
                                </Col>
                            )}
                        </Row>

                    </Col>
                </Row>
            </div>
        </div>
    );
}
