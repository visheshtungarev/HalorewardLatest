import { Card, Col, Row, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Breadcurms from "../../components/Breadcrums/Breadcurms";
import Heading from "../../components/Heading/Heading";
import { singleConstant } from "../../Constants/HomeConstant";
import "../AllBrands/index.css";
import { getOfferAction } from "../../actions/getOfferAction";
import {
  GlobalOutlined,
  CopyOutlined,
  //ShopOutlined,
  //ShoppingOutlined
} from "@ant-design/icons";
import Badge from "../../components/Badge/Badge";
export default function BrandList() {
  const carouselState = useSelector((state) => state.auth.carousel);
  const [trendingCarousel, setTrendingCarousel] = useState();
  const [offerData, setOfferData] = useState([]);

  const { state } = useLocation();
  console.log(state);
  useEffect(() => {
    if (state.type === "trending-brand") {
      getCarouseItem();
    }
  }, [carouselState]);

  const getCarouseItem = () => {
    if (carouselState && carouselState.length >= 0) {
      let trendingArray = [];
      carouselState[0]?.carousels.map((element) => {
        if (element.carouselName === singleConstant.trending_brand) {
          return trendingArray.push(element);
        }
      });
      setTrendingCarousel(trendingArray);
    }
  };

  useEffect(() => {
    if (state.type === "popular-offer") {
      let offerResult = getOfferAction();
      offerResult.then((data) => {
        setOfferData(data);
      });
    }
  }, []);

  return (
    <div className="home_container">
      <Row align="middle" className="list_view mb-0 pb-0">
        <Breadcurms
          data={[
            {
              pageName: state.type === "popular-offer" ? "Home" : "All Brand",
              pageLink: state.type === "popular-offer" ? "/" : "/all-brands",
            },
            {
              pageName:
                state.type === "popular-offer"
                  ? "Popular Offers"
                  : "Trending Brands ",
              pageLink:
                state.type === "popular-offer"
                  ? "/list?=popular-offer"
                  : "/Trending-brands ",
            },
          ]}
        />
      </Row>

      <div className="list_view">
        <Heading
          HeadingText={
            state.type === "popular-offer"
              ? "Popular offers"
              : "Trending Brands"
          }
          // actionText="View All"
          actionLink={
            state.type === "popular-offer"
              ? "list?=popular-offer"
              : "/list?=treding-brand"
          }
        />
        {state.type === "trending-brand" && (
          <Row
            align="middle"
            className="scrolledView"
            justify="space-around"
            gutter={20}
          >
            {trendingCarousel &&
              trendingCarousel.length &&
              trendingCarousel[0].brands &&
              trendingCarousel[0].brands.length > 0 &&
              trendingCarousel[0].brands.map((item, i) => (
                <Col
                  key={i}
                  className="deals_box trending_brands mb-3 "
                  span={4}
                >
                  <Link
                    to={`/brand?id=${item.merchantId}`}
                    state={{
                      totalCashback: item?.customerRebate,
                      description: trendingCarousel[0]?.description,
                      ids: item?.merchantId,
                      isCard: item?.onCard,
                    }}
                  >
                    <Card className="deals_container">
                      {/* <Badge
                    position={"mx-auto"}
                    badgeType={"oncard"}
                    badgeText={"ON CARD"}
                    badgeIcon={"ON CARD"}
                  /> */}
                      <>
                        <img
                          className="dealicon "
                          src={`data:image/png;base64,${item.merchantLogo1}`}
                        />
                        <p
                          className="deals_title text-center"
                          style={{ minHeight: "auto" }}
                        >
                          {item.merchantName}
                        </p>
                      </>
                    </Card>
                  </Link>
                </Col>
              ))}
          </Row>
        )}

        {state.type === "popular-offer" && (
          <Row align="middle" justify="space-around" gutter={30}>
            {offerData?.products &&
              offerData.products.products &&
              offerData.products.products.length > 0 &&
              offerData.products.products.slice(0, 12).map((item, key) => {
                let url = "";
                item.productMetaData.map((element) => {
                  if (element.key === "productUrl") {
                    return (url = element.value);
                  }
                });
                return (
                  <Col
                    key={key}
                    className="deals_box featuredOffers mb-4"
                    span={12}
                    lg={{ span: 12 }}
                  >
                    <Card className="deals_container popularOffers">
                      <div className="d-flex w-100 ">
                        <div>
                          {/* <p>
                          Image not available <br />
                          from database
                        </p> */}
                          <img
                            className="dealicon_img_frame_lg"
                            src=""
                            alt="no-image"
                          />
                          {/* <p className="deals_title">
                          {offerData.products.merchantName}
                        </p> */}
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
                          <Button type="primary">
                            <a
                              // rel="noreferrer"
                              rel="noopener noreferrer"
                              target="_blank"
                              href={
                                (item.contentType === "coupon" ||
                                  item.contentType === "cashback") &&
                                (item.subcontentType === "online" ||
                                  item.subcontentType === "store")
                                  ? `${url}`
                                  : "javascript:void(0)"
                              }
                            >
                              {item.contentType === "prize draw"
                                ? "Enter Draw"
                                : (item.contentType === "coupon" ||
                                    item.contentType === "cashback") &&
                                  (item.subcontentType === "online" ||
                                    item.subcontentType === "store")
                                ? "Go to site"
                                : (item.contentType === "coupon" ||
                                    item.contentType === "cashback") &&
                                  item.subcontentType === "instore"
                                ? "Reveal code"
                                : ""}
                              {/* Reveal Code */}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        )}
      </div>
    </div>
  );
}
