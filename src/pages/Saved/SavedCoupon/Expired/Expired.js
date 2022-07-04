import { Card, Col, Row } from "antd";
import React from "react";

import { CreditCardOutlined } from "@ant-design/icons";
import Badge from "../../../../components/Badge/Badge";
const allTredingOffers = [
  {
    image: "/Images/flipkart.png",
    title: "Flipkart",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/flipkart.png",
    title: "Flipkart",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/flipkart.png",
    title: "Flipkart",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
];
export default function Expired() {
  return (
    <div className="list_view">
      <Row align="middle" className="" justify="space-around" gutter={30}>
        {allTredingOffers &&
          allTredingOffers.map((item, i) => (
            <Col
              key={i}
              className="deals_box trending_brands mb-3 text-left expiredCard"
              span={24}
              lg={{ span: 8 }}
            >
              <Card className="couponContainer">
                <span className="fixedTopRight">
                  <img src="/Images/cross.svg" />
                </span>
                <div className="d-flex">
                  <div className="couponLogo">
                    <img src="/Images/logo (3).png" height={50} />
                  </div>
                  <div className="flex-grow-1 pl-3 ">
                    <p className="mb-0">Grofers</p>
                    <p
                      className="fw-bold h6 my-2"
                      style={{ minHeight: "auto" }}
                    >
                      Get 20% off on an order of £150{" "}
                    </p>
                    <small className="text-muted fw-300">
                      Expires Sep 4, 2021
                    </small>
                    <Badge badgeType={"oncard"} badgeText={"Expired"} />
                  </div>
                </div>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
