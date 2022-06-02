import React, { useState } from 'react'
import Heading from '../../components/Heading/Heading'
import PopularOffers from '../../components/PopularOffers/PopularOffers'
import {
    CreditCardOutlined
    // ShopOutlined,
    // ShoppingOutlined
} from "@ant-design/icons";
import Breadcurms from '../../components/Breadcrums/Breadcurms';
import { Row } from 'antd';
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
export default function AllPopularOffers() {
    const [popularOffers,] = useState(allTredingOffers)
    console.log(popularOffers)
    return (
        <div className="home_container">
            <Row align="middle" className="list_view mb-0 pb-0">
                <Breadcurms
                    data={[{
                        pageName: 'Categories',
                        pageLink: '/categories'
                    }, {
                        pageName: 'Popular Offers',
                        pageLink: '/popular-offers'
                    }]} />
            </Row>
            <div className="list_view">

                <Heading
                    HeadingText="Trending Brands"
                    actionText="View All"
                    actionLink="/all-brands"
                />
                <PopularOffers />
            </div>
        </div>
    )
}
