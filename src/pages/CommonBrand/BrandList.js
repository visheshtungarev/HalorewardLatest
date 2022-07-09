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
import { Post_call } from "../../network/networkmanager";
import env from "../../enviroment";

const values = env();
const { getCategoriesByClientID } = values;

export default function BrandList() {
  const carouselState = useSelector((state) => state.auth.carousel);
  const [trendingCarousel, setTrendingCarousel] = useState();
  const [offerData, setOfferData] = useState([]);
  const [brandData, setBrandData] = useState([]);

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
    if (state.type === "featured-brand") {
      getBrandList();
    }
  }, []);

  const getBrandList = async () => {
    var raw = `{
      brands(siteId: 1, featured: true) {
          merchantId
          merchantRank
          merchantDescription
          merchantName
          status
          onCard
          provider
          modifiedDate
          customerRebate
          merchantLogo1
          merchantUrl
          categories {
              categoryId
              name
          }
          contentTypes {
              name
              size
          }
      }
  }`;
    try {
      let response = await Post_call(
        `${getCategoriesByClientID}/clients/1/brands`,
        raw,
        false
      );
      if (response.status === 200) {
        // setBrandBoolean(true)
        setBrandData(response.data);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="home_container">
      <Row align="middle" className="list_view mb-0 pb-0">
        {state.type === "trending-brand" && (
          <Breadcurms
            data={[
              {
                pageName: "Trending Brand",
                pageLink: "/all-brands",
              },
              {
                pageName: "Trending Brands",
                pageLink: "/list?=trending-brands",
              },
            ]}
          />
        )}

        {state.type === "popular-offer" && (
          <Breadcurms
            data={[
              {
                pageName: "Home",
                pageLink: "/",
              },
              {
                pageName: "Popular Offers",
                pageLink: "/list?=popular-offer",
              },
            ]}
          />
        )}

        {state.type === "featured-brand" && (
          <Breadcurms
            data={[
              {
                pageName: "Home",
                pageLink: "/",
              },
              {
                pageName: "Featured Brands",
                pageLink: "/list?=feature-brand",
              },
            ]}
          />
        )}
      </Row>

      {/* <Heading
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
           /> */}

      {state.type === "trending-brand" && (
        <div className="list_view">
          <Heading
            HeadingText="Trending Brands"
            // actionText="View All"
            actionLink="/list?=treding-brand"
          />
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
        </div>
      )}

      {state.type === "popular-offer" && (
        <div className="list_view">
          <Heading
            HeadingText="Popular offers"
            // actionText="View All"
            actionLink="/list?=popular-offer"
          />
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
        </div>
      )}

      {state.type === "featured-brand" && (
        <div className="list_view">
          <Heading
            HeadingText="Featured Brands"
            // actionText="View All"
            actionLink="/list?=feature-brand"
          />
          <Row align="middle" justify="flex-start" gutter={30}>
            {brandData &&
              brandData.length > 0 &&
              brandData?.map((item, key) => {
                return (
                  <Col
                    key={key}
                    className="deals_box featuredOffers mb-4"
                    span={12}
                    lg={{ span: 12 }}
                  >
                    <Link
                      to={`/brand?id=${item.merchantId}`}
                      state={{
                        totalCashback: item.customerRebate,
                        description: item.merchantDescription,
                        ids: item.merchantId,
                        isCard: item.onCard,
                      }}
                    >
                      <Card className="deals_container popularOffers rounded1">
                        <Row align="middle" className="w-100 flex-nowrap">
                          <div>
                            <img
                              className="dealicon_img_frame"
                              // src="/Images/logo.png"
                              src={`data:image/png;base64,${item.merchantLogo1}`}
                            />
                          </div>
                          <Col className="flex-grow-1">
                            <Row align="middle" justify="around">
                              <Col
                                span={24}
                                md={{ span: 6 }}
                                className="d-flex align-items-center"
                              >
                                <p className="deals_title ml-3 my-0">
                                  {item.merchantName}
                                </p>
                              </Col>
                              <Col
                                span={24}
                                md={{ span: 18 }}
                                className="flex-grow-1"
                              >
                                <p className="deals_content ml-3 mb-0">
                                  {item?.contentTypes.map((val) => {
                                    if (val.name === "Cashbacks") {
                                      return (
                                        <span>
                                          {"Upto " +
                                            val.size +
                                            "%" +
                                            " " +
                                            val.name}
                                          ,{" "}
                                        </span>
                                      );
                                    } else {
                                      return (
                                        <span>
                                          {val.size + " " + val.name},{" "}
                                        </span>
                                      );
                                    }
                                  })}
                                </p>
                              </Col>
                            </Row>
                          </Col>
                          {item.onCard && (
                            <div className="fixed-top-right">
                              <Badge
                                position={""}
                                badgeType={item?.modeType}
                                badgeText={item?.modeText}
                                badgeIcon={item.modeIcon}
                              />
                            </div>
                          )}
                        </Row>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
          </Row>
        </div>
      )}
    </div>
  );
}
