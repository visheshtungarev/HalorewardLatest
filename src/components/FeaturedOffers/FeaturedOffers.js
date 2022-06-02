import React from "react";
import "./index.css";
import { Card, Col, Row, Button } from "antd";
import { HomeConstant } from '../../Constants'
import Badge from "../Badge/Badge";

export default function FeaturedOffers() {
    return (
        <Row align="middle" className="scrolledView" justify="space-around" gutter={30} >
            {HomeConstant?.featureOffers?.map((item, key) =>
                <Col key={key} className="deals_box featuredOffers" span={8}>
                    <Card
                        className="deals_container"
                        actions={[

                        ]}
                    >
                        <>
                            <div className="badges">
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
                            </div>
                            <Row className="w-100 d-flex align-items-center" justify="">
                                <img className="dealicon_img_frame" src={item.image} />

                                <h5 className=" pl-3 my-0 ">{item.brand}</h5>
                            </Row>
                            <p className="deals_title">{item.title}</p>
                        </>
                        <Row key="time" className="featured_offer_action mb-3">
                            <span>{item.time}</span>
                        </Row>
                        <Button type="primary" block>Go to site</Button>

                    </Card>
                </Col>

            )}
        </Row>

    )
}
