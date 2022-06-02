import React from 'react';
import { Row, Col } from 'antd';
import "./index.css";
export default function Badge({ badgeType, badgeText, badgeIcon, position }) {
    {/* 
     Badge types -    
    coupon, online, oncard, instore_and_online, cashback, priceDraw, instore
 */ }

    return (
        <Row align='center' className={` cardbadge ${badgeType} ${position} mx-1`}>




            <Col
                className={!badgeIcon ? `deals_offer_title m-0` : `deals_offer_title`}
            >
                {badgeText}
            </Col>


        </Row >
    )
}