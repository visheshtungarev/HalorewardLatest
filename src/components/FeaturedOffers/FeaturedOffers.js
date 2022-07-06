import React from "react";
import "./index.css";
import { Card, Col, Row, Button } from "antd";
// import { HomeConstant } from "../../Constants";
import Badge from "../Badge/Badge";
import { useNavigate } from "react-router-dom";

export default function FeaturedOffers({ featuredData }) {
  const navigate = useNavigate();

  return (
    <Row
      align="middle"
      className="scrolledView"
      justify="space-around"
      gutter={30}
    >
      {featuredData?.products?.products &&
        featuredData?.products?.products.length > 0 &&
        featuredData?.products?.products.map((item, key) => (
          <Col key={key} className="deals_box featuredOffers" span={8}>
            <Card className="deals_container">
              <>
                <div className="badges">
                  <Badge
                    position={""}
                    badgeType={item.contentType}
                    badgeText={item.contentType}
                    badgeIcon={item.contentType}
                  />

                  <Badge
                    position={""}
                    badgeType={item.subcontentType}
                    badgeText={item.subcontentType}
                    badgeIcon={item.subcontentType}
                  />
                </div>
                <Row className="w-100 d-flex align-items-center" justify="">
                  <img className="dealicon_img_frame" src="" alt="no-image" />

                  <h5 className=" pl-3 my-0 ">
                    {featuredData?.products?.merchantName}
                  </h5>
                </Row>
                <p className="deals_title">
                  {item?.productMetaData?.map((element) => {
                    if (element.key === "title") {
                      return element.value;
                    }
                  })}
                </p>
              </>
              <Row key="time" className="featured_offer_action mb-3">
                <span>{item.expirationDate}</span>
              </Row>
              <Button
                type="primary"
                onClick={() =>
                  navigate(`/coupon?id=${item.productId}`, {
                    state: {
                      item: item,
                      name: featuredData?.products.merchantName,
                      ids: featuredData?.products.merchantId,
                    },
                  })
                }
                block
              >
                Go to site
              </Button>
            </Card>
          </Col>
        ))}
    </Row>
  );
}
