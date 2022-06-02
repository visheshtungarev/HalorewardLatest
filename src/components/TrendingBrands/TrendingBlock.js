import React from "react";
import "./index.css";
import { Card, Col, Row } from "antd";


export default function TrendingBlock({ span, brandImage, brandOfferText, brandTitle }) {
    return (
        <Col className="deals_box trending_brands mb-3" span={span}>
            <Card
                className="deals_container">

                <>
                    <img className="dealicon " src={brandImage} />
                    <p className="deals_title text-center" style={{ minHeight: 'auto' }}>{brandTitle}</p>
                </>
                {
                    brandOfferText ?

                        <Row key="cashback" className="cashback_info">
                            {brandOfferText}
                        </Row>
                        : ''
                }
            </Card>
        </Col>
    )
}
