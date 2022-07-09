import { Card, Col, Row } from "antd";
import React from "react";
// import {
//     CreditCardOutlined
// } from "@ant-design/icons";
// const allTredingOffers = [
//     {
//         image: "/Images/flipkart.png",
//         title: "Flipkart",
//         modeIcon: <CreditCardOutlined />,
//         modeType: "oncard",
//         modeText: "ON CARD",
//         content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."
//         ,
//     },
//     {
//         image: "/Images/nykaa.png",
//         title: "Nykaa",
//         modeIcon: <CreditCardOutlined />,
//         modeType: "oncard",
//         modeText: "ON CARD",
//         content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

//     },
//     {
//         image: "/Images/flipkart.png",
//         title: "Flipkart",
//         modeIcon: <CreditCardOutlined />,
//         modeType: "oncard",
//         modeText: "ON CARD",
//         content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

//     },
//     {
//         image: "/Images/nykaa.png",
//         title: "Nykaa",
//         modeIcon: <CreditCardOutlined />,
//         modeType: "oncard",
//         modeText: "ON CARD",
//         content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

//     },
//     {

//         image: "/Images/flipkart.png",
//         title: "Flipkart",
//         modeIcon: <CreditCardOutlined />,
//         modeType: "oncard",
//         modeText: "ON CARD",
//         content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

//     },
//     {

//         image: "/Images/nykaa.png",
//         title: "Nykaa",
//         modeIcon: <CreditCardOutlined />,
//         modeType: "oncard",
//         modeText: "ON CARD",
//         content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."

//     }
// ]
export default function Active({ activeListing }) {
  return (
    <div className="list_view">
      <Row align="middle" className="" justify="flex-start" gutter={30}>
        {activeListing &&
          activeListing.length > 0 &&
          activeListing.map((item, i) => {
            return (
              <Col
                key={i}
                className="deals_box trending_brands mb-3 text-left"
                span={24}
                lg={{ span: 8 }}
              >
                <Card className="couponContainer">
                  <div className="couponLogo">
                    <img src="" height={50} alt="no-image" />
                  </div>
                  <div className="flex-grow-1 pl-3 ">
                    {/* <p className="mb-0">Grofers</p> */}
                    <p
                      className="fw-bold h6 my-2"
                      style={{ minHeight: "auto" }}
                    >
                      {item?.productMetaData?.map((element) => {
                        if (element.key === "title") {
                          return element.value;
                        }
                      })}
                    </p>
                    <small className="text-muted fw-300">
                      Expires {item.expirationDate}
                    </small>
                  </div>
                </Card>
              </Col>
            );
          })}
      </Row>

      {activeListing && activeListing.length <= 0 && (
        <h4>No active coupon found</h4>
      )}
    </div>
  );
}
