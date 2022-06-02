import React, { useEffect, useState } from "react";
import "./index.css";
import { Col, Row, Card, Select } from "antd";

// import PopularOffers from "../../components/PopularOffers/PopularOffers";
import Breadcurms from "../../components/Breadcrums/Breadcurms";

import {
    CreditCardOutlined
    // ShopOutlined,
    // ShoppingOutlined
} from "@ant-design/icons";
import Badge from "../../components/Badge/Badge";
import Heading from "../../components/Heading/Heading";
import SideBar from "../../components/Sidebar/SideBar";
// import { render } from "@testing-library/react";
// const { Meta } = Card;


const sidebarData = [
    {
        title: 'Accessories', link: ''
    },
    {
        title: 'Auto & Tires', link: ''
    },
    {
        title: 'Baby & Kids Gear', link: ''
    },
    {
        title: 'Books & Media', link: ''
    },
    {
        title: 'Clothing', link: ''
    },
    {
        title: 'Electronics', link: ''
    },
    {
        title: 'Events & Activities', link: ''
    },
    {
        title: 'Flowers & Florists', link: ''
    },
    {
        title: 'Food & Restaurants', link: ''
    },
    {
        title: 'Gifts & Occasions', link: ''
    },
    {
        title: 'Pet Supplies', link: ''
    },
    {
        title: 'Books & Media', link: ''
    },
    {
        title: 'Food & Restaurants', link: ''
    },
    {
        title: 'Gifts & Occasions', link: ''
    },
    {
        title: 'Health & Beauty', link: ''
    },
    {
        title: 'Events & Activities', link: ''
    }

]

const allTredingBrands = [
    {
        image: "/Images/flipkart.png",
        title: "Flipkart",
        modeIcon: <CreditCardOutlined />,
        modeType: "oncard",
        modeText: "ON CARD",
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."
        ,
    },
    {
        image: "/Images/nykaa.png",
        title: "Nykaa",
        modeIcon: <CreditCardOutlined />,
        modeType: "oncard",
        modeText: "ON CARD",
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

    },
    {
        image: "/Images/flipkart.png",
        title: "Flipkart",
        modeIcon: <CreditCardOutlined />,
        modeType: "oncard",
        modeText: "ON CARD",
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

    },
    {
        image: "/Images/nykaa.png",
        title: "Nykaa",
        modeIcon: <CreditCardOutlined />,
        modeType: "oncard",
        modeText: "ON CARD",
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

    },
    {

        image: "/Images/flipkart.png",
        title: "Flipkart",
        modeIcon: <CreditCardOutlined />,
        modeType: "oncard",
        modeText: "ON CARD",
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

    },
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        modeIcon: <CreditCardOutlined />,
        modeType: "oncard",
        modeText: "ON CARD",
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

    }
]
const AllBrands = () => {
    const { Option } = Select;
    const [sideMenuItems,] = useState(sidebarData)
    const [dataArr,] = useState(allTredingBrands)
    const [openSidePanel, setOpenSidePanel] = useState(false)

    const closeSidebar = () => {
        !openSidePanel ? setOpenSidePanel(true) : setOpenSidePanel(false)
    }
    useEffect(() => {
        console.log(window.innerWidth)
        if (window.innerWidth > 993) {
            setOpenSidePanel(true)
        }
    }, [])
    return (
        <div className="home_container">
            <Row align="middle" className="list_view mb-0 pb-0">
                <Breadcurms
                    data={[{
                        pageName: 'Categories',
                        pageLink: '/categories'
                    }, {
                        pageName: 'All Brands',
                        pageLink: '/all-brands'
                    }]} />
            </Row>

            <div className="list_view">
                <Heading
                    HeadingText="Trending Brands"
                    actionText="View All"
                    actionLink="/all-brands"
                />
                <Row align="middle" className="scrolledView" justify="space-around" gutter={20}>
                    {dataArr && dataArr.map((item, i) =>
                        <Col key={i} className="deals_box trending_brands mb-3 " span={4}>
                            <Card
                                className="deals_container">
                                <Badge
                                    position={'mx-auto'}
                                    badgeType={item?.modeType}
                                    badgeText={item?.modeText}
                                    badgeIcon={item.modeIcon}
                                />
                                <>
                                    <img className="dealicon " src={item.image} />
                                    <p className="deals_title text-center" style={{ minHeight: 'auto' }}>{item.title}</p>
                                </>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>


            <div className="list_view">
                <Heading
                    HeadingText="Brands"
                    filter={
                        <>
                            <button onClick={() => closeSidebar()} className="filterBtn">Filter</button>
                            <Select defaultValue="Any Reward Type" allowClear>
                                <Option value="AnyRewardType">Any Reward Type</Option>
                            </Select>
                            <Select defaultValue="Popular" allowClear>
                                <Option value="Popular">Popular</Option>
                            </Select>
                        </>
                    }
                />

                <Row justify="space-around" gutter={20}>
                    <Col span={24} lg={{ span: 6 }}>
                        {
                            openSidePanel ?
                                <SideBar
                                    closePanel={() => closeSidebar()}
                                    type='list'
                                    mainTitle='Filter'
                                    data={sideMenuItems}
                                />
                                : ''
                        }

                    </Col>
                    <Col span={24} lg={{ span: 18 }}>
                        <Row align="middle" justify="space-around" >
                            {
                                dataArr && dataArr.map((item, i) => {
                                    return (

                                        <Col key={i} className="  overflow-hidden featuredOffers mb-4" span={24}>
                                            <Card className="deals_container popularOffers rounded1">
                                                <Row align="middle" className="w-100 flex-nowrap" >

                                                    <div>
                                                        <img className="dealicon_img_frame" src={item.image} />
                                                    </div>
                                                    <Col className="flex-grow-1">
                                                        <Row align="middle" justify="around">
                                                            <Col span={24} md={{ span: 6 }} className="d-flex align-items-center">
                                                                <p className="deals_title ml-3 my-0">{item.title}</p>

                                                            </Col>
                                                            <Col span={24} md={{ span: 18 }} className="flex-grow-1">

                                                                <p className="deals_content ml-3 mb-0">{item.content}</p>
                                                            </Col>

                                                        </Row>
                                                    </Col>
                                                    <div className="fixed-top-right">
                                                        <Badge
                                                            position={''}
                                                            badgeType={item?.modeType}
                                                            badgeText={item?.modeText}
                                                            badgeIcon={item.modeIcon}
                                                        />
                                                    </div>
                                                </Row>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AllBrands;
