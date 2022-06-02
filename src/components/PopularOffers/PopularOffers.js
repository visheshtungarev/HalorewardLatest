import React from "react";
import "./index.css";
import { Card, Col, Row, Button } from "antd";
import { HomeConstant } from '../../Constants'
import Badge from "../Badge/Badge";


export default function PopularOffers() {
    return (
        <Row align="middle" justify="space-around" gutter={30}>
            {HomeConstant?.popularOffers?.map((item, key) =>
                <Col key={key} className="deals_box featuredOffers mb-4" span={12} lg={{ span: 12 }}>
                    <Card
                        className="deals_container popularOffers"
                        actions={[

                        ]}
                    >
                        <div className="d-flex w-100 ">
                            <div>
                                <img className="dealicon_img_frame_lg" src={item.image} />
                            </div>
                            <div className="flex-grow-1">
                                <div>
                                    <div className="w-100 d-flex align-items-center justify-content-between">
                                        <div className="d-md-flex">
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
                                        <p className="mb-0 viewAllOffer">{item.viewAll}</p>
                                    </div>
                                    <div className="py-3 py-md-0">
                                        <img className="dealicon_img_frame_lg_mobile" src={item.image} />
                                    </div>
                                    <p className="deals_title">{item.title}</p>
                                </div>
                                <Row key="time" className="featured_offer_action ">
                                    <span>{item.time}</span>
                                </Row>
                                <Button type="primary" className="w-100">Reveal Code</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
            )}
        </Row>
    )
}
