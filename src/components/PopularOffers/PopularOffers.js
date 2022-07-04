import React from "react";
import "./index.css";
import { Card, Col, Row, Button } from "antd";
// import { HomeConstant } from '../../Constants'
import Badge from "../Badge/Badge";
import {
  GlobalOutlined,
  CopyOutlined,
  //ShopOutlined,
  //ShoppingOutlined
} from "@ant-design/icons";

export default function PopularOffers({ offerData }) {
  console.log("offerData ....", offerData);
  return (
    <Row align="middle" justify="space-around" gutter={30}>
      {offerData?.products &&
        offerData.products.products &&
        offerData.products.products.length > 0 &&
        offerData.products.products.map((item, key) => (
          <Col
            key={key}
            className="deals_box featuredOffers mb-4"
            span={12}
            lg={{ span: 12 }}
          >
            <Card className="deals_container popularOffers" actions={[]}>
              <div className="d-flex w-100 ">
                <div>
                  <p>
                    Image not available <br />
                    from database
                  </p>
                  <p className="deals_title">
                    {offerData.products.merchantName}
                  </p>
                  {/* <img
                    className="dealicon_img_frame_lg"
                    src="/Images/flipkart.png"
                  /> */}
                </div>
                <div className="flex-grow-1">
                  <div>
                    <div className="w-100 d-flex align-items-center justify-content-between">
                      <div className="d-md-flex">
                        <Badge
                          position={""}
                          badgeType={item.contentType}
                          badgeText={item.contentType}
                          badgeIcon={<CopyOutlined />}
                        />
                        <Badge
                          position={""}
                          badgeType={item.subcontentType}
                          badgeText={item.subcontentType}
                          badgeIcon={<GlobalOutlined />}
                        />
                      </div>
                      <p className="mb-0 viewAllOffer">{`view all offer (${item.productMetaData.length})`}</p>
                    </div>
                    <div className="py-3 py-md-0">
                      <img
                        className="dealicon_img_frame_lg_mobile"
                        src="/Images/flipkart.png"
                      />
                    </div>
                    <p className="deals_title">
                      {item.productMetaData.map((element) => {
                        if (element.key === "productDescription") {
                          return element.value;
                        }
                      })}
                    </p>
                  </div>
                  {/* <Row key="time" className="featured_offer_action ">
                                    <span>{item.time}</span>
                                </Row> */}
                  <Button type="primary" className="w-100">
                    Reveal Code
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
    </Row>
  );
}

{
  /* <Badge
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
/> */
}
