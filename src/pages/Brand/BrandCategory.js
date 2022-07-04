import React, { useState } from "react";
// import "./index.css";
import { Col, Row, Card, Select } from "antd";

// import PopularOffers from "../../components/PopularOffers/PopularOffers";
import Breadcurms from "../../components/Breadcrums/Breadcurms";

import {
  CreditCardOutlined,
  // ShopOutlined,
  // ShoppingOutlined
} from "@ant-design/icons";
import Badge from "../../components/Badge/Badge";
import Heading from "../../components/Heading/Heading";
import SideBar from "../../components/Sidebar/SideBar";
// import { render } from "@testing-library/react";
// const { Meta } = Card;

const sidebarData = [
  {
    title: "Hats & Hair Accessories",
    link: "/Hats & Hair Accessories",
  },
  {
    title: "Jewelry",
    link: "/Luggage",
  },
  {
    title: "Optical & Reading Glasses",
    link: "/Optical & Reading Glasses",
  },
  {
    title: "Phone Cases & Tech",
    link: "/Phone Cases & Tech",
  },
];

const allTredingBrands = [
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
export default function BrandCategory() {
  const { Option } = Select;
  const [sideMenuItems] = useState(sidebarData);
  const [dataArr] = useState(allTredingBrands);
  return (
    <div className="home_container">
      <Row align="middle" className="list_view mb-0 pb-0">
        <Breadcurms
          data={[
            {
              pageName: "Categories",
              pageLink: "/categories",
            },
            {
              pageName: "All Brands",
              pageLink: "/all-brands",
            },
          ]}
        />
      </Row>

      <div className="list_view">
        <Heading
          HeadingText="Trending Brands"
          actionText="View All"
          actionLink="/all-brands"
        />
        <Row
          align="middle"
          className="scrolledView"
          justify="space-around"
          gutter={30}
        >
          {dataArr &&
            dataArr.map((item, i) => (
              <Col key={i} className="deals_box trending_brands mb-3" span={4}>
                <Card className="deals_container">
                  <Badge
                    position={"mx-auto"}
                    badgeType={item?.modeType}
                    badgeText={item?.modeText}
                    badgeIcon={item.modeIcon}
                  />
                  <>
                    <img className="dealicon " src={item.image} />
                    <p
                      className="deals_title text-center"
                      style={{ minHeight: "auto" }}
                    >
                      {item.title}
                    </p>
                  </>
                </Card>
              </Col>
            ))}
        </Row>
      </div>

      <div className="list_view">
        <Heading
          HeadingText="Accessories"
          filter={
            <>
              <Select defaultValue="Any Reward Type" allowClear>
                <Option value="AnyRewardType">Any Reward Type</Option>
              </Select>
              <Select defaultValue="Popular" allowClear>
                <Option value="Popular">Popular</Option>
              </Select>
            </>
          }
        />

        <Row gutter={5}>
          <Col span={6}>
            <SideBar
              type="checklist"
              mainTitle="Filter"
              subTitle="Accessories"
              data={sideMenuItems}
            />
          </Col>
          <Col span={18}>
            <Row align="middle" justify="space-around">
              {dataArr &&
                dataArr.map((item, i) => {
                  return (
                    <Col
                      key={i}
                      className="deals_box featuredOffers mb-4"
                      span={24}
                    >
                      <Card className="deals_container popularOffers">
                        <Row align="middle" justify="space-between ">
                          <Row align="middle">
                            <img
                              className="dealicon_img_frame"
                              src={item.image}
                            />

                            <p className="deals_title ml-3 my-0">
                              {item.title}
                            </p>
                          </Row>

                          <div>
                            <p className="deals_content ml-3 mb-0">
                              {item.content}
                            </p>
                          </div>
                          <Row key="time" className="featured_offer_action ">
                            <span>{item.time}</span>
                          </Row>
                          <Badge
                            position={""}
                            badgeType={item?.modeType}
                            badgeText={item?.modeText}
                            badgeIcon={item.modeIcon}
                          />
                        </Row>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
