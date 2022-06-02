import { Card, Col, Row } from 'antd';
import React from 'react';
import { FiClock } from 'react-icons/fi'

import {
    CreditCardOutlined
} from "@ant-design/icons";
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
export default function Claimed() {
    return (
        <div className='list_view'>

            <Row align="middle" className="" justify="space-around" gutter={30}>
                {allTredingOffers && allTredingOffers.map((item, i) =>
                    <Col key={i} className="deals_box trending_brands mb-3 text-left" span={24} lg={{ span: 8 }}>
                        <Card className="couponContainer">
                            <div className='couponLogo'>
                                <img src='/images/logo (3).png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3 '>
                                <p className='mb-0'>Grofers</p>
                                <p className="fw-bold h6 my-2" style={{ minHeight: 'auto' }}>Get 20% off on an   order of £150  </p>
                                <small className='text-muted fw-300'>Expires Sep 4, 2021</small>
                                <span className='d-flex align-items-center timer fw-bold'> <FiClock /> &nbsp; 1d 2h 21m</span>

                            </div>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    )
}
