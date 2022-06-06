import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading/Heading'
import PopularOffers from '../../components/PopularOffers/PopularOffers'
import {
    CreditCardOutlined
} from "@ant-design/icons";
import Breadcurms from '../../components/Breadcrums/Breadcurms';
import { Row, Col, Card, Select } from 'antd';
import Badge from '../../components/Badge/Badge';
import SideBar from '../../components/Sidebar/SideBar';
import { Post_call } from '../../network/networkmanager';
import env from '../../enviroment';
const allTredingOffers = [
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

const values = env();
const { getCategoriesByClientID } = values;

export default function AllOffers() {
    const [dataArr,] = useState(allTredingOffers)

    const [sideMenuItems,] = useState(sidebarData)
    const [openSidePanel, setOpenSidePanel] = useState(false)
    const { Option } = Select;
    const closeSidebar = () => {
        !openSidePanel ? setOpenSidePanel(true) : setOpenSidePanel(false)
    }
    useEffect(() => {
        console.log(window.innerWidth)
        if (window.innerWidth > 993) {
            setOpenSidePanel(true)
        }
        getOfferList();
    }, [])

    const getOfferList = async () => {
        var data = "{\n    products(siteId: 1, merchantId: 1) {\n        merchantId\n        merchantName\n        provider\n        categories {\n            categoryId\n            name\n        }\n        products {\n            productId\n            status\n            contentType\n            subcontentType\n            expirationDate\n            productMetaData {\n                key\n                value\n            }\n        }\n    }\n}\n";
  
      try {
        let response = await Post_call(
          `${getCategoriesByClientID}/clients/1/products`,
          data,
          false
        );
        if (response.status === 200) {
          console.log(response)
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

    console.log("dataarr ....",dataArr)
    return (
        <div className="home_container">
            <Row align="middle" className="list_view mb-0 pb-0">
                <Breadcurms
                    data={[{
                        pageName: 'Categories',
                        pageLink: '/categories'
                    }, {
                        pageName: 'All Offers',
                        pageLink: '/all-offers'
                    }]} />
            </Row>


            <div className="list_view">
                <Heading
                    HeadingText="Trending"
                    actionText="View All"
                    actionLink="/Trending-offers"


                />
                <Row align="middle" className="scrolledView" justify="space-around" gutter={30}>
                    {dataArr && dataArr.map((item, i) =>
                        <Col key={i} className="deals_box trending_brands mb-3 text-left" span={4}>
                            <Card
                                className="deals_container">
                                <Badge
                                    badgeType={item?.modeType}
                                    badgeText={item?.modeText}
                                    badgeIcon={item.modeIcon}
                                />
                                <>
                                    <img className="dealicon " src={item.image} />
                                    <p className="deals_title" style={{ minHeight: 'auto' }}>{item.title}</p>
                                    <p>{item.content}</p>

                                </>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
            <div className="list_view">
                <Heading
                    HeadingText="All Offers"
                    // actionText="View All"
                    // actionLink="/all-offers"
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
                <Row justify="space-around" gutter={30}>

                    <Col span={24} lg={{ span: 6 }}  >
                        {
                            openSidePanel ?
                                <SideBar
                                    closePanel={() => closeSidebar()}
                                    type='checklist'
                                    mainTitle='Filter'
                                    data={sideMenuItems}
                                />
                                : ''
                        }

                    </Col>
                    <Col span={24} lg={{ span: 18 }}>



                        <PopularOffers />
                    </Col>
                </Row>

            </div>
        </div >
    )
}
