import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import "./index.css";
import { Card, Col, Divider, Row, Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { HomeConstant } from "../../Constants";
import FeaturedOffers from "../../components/FeaturedOffers/FeaturedOffers";
// import TrendingBrands from "../../components/TrendingBrands/TrendingBrands";
// import PopularOffers from "../../components/PopularOffers/PopularOffers";
import Badge from "../../components/Badge/Badge";
import Heading from "../../components/Heading/Heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCarousel } from "../../actions/getCarouselAction";
import { singleConstant } from "../../Constants/HomeConstant";
import TrendingBlock from "../../components/TrendingBrands/TrendingBlock";
import { getOfferAction } from "../../actions/getOfferAction";
import {
  GlobalOutlined,
  CopyOutlined,
  //ShopOutlined,
  //ShoppingOutlined
} from "@ant-design/icons";
import { featuredCall } from "../../actions/favouriteCall";

// const { Meta } = Card;

const index = () => {
  const dispatch = useDispatch();
  const [expiringCarousel, setExpiringCarousel] = useState([]);
  const [trendingCarousel, setTrendingCarousel] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [offerData, setOfferData] = useState([]);

  const accessToken = localStorage.getItem("accessToken");

  const getCustomer = useSelector((state) => state.auth.user);
  let customerId = getCustomer?.customer?._id;

  useEffect(() => {
    accessToken && dispatch(getCarousel(customerId));

    let offerResult = getOfferAction();
    offerResult.then((data) => {
      setOfferData(data);
    });

    let featureResult = featuredCall();
    featureResult.then((res) => {
      setFeaturedData(res.data);
    });
  }, []);

  const carouselState = useSelector((state) => state.auth.carousel);
  // console.log("carouselState ....", carouselState);

  useEffect(() => {
    getCarouseItem();
  }, [carouselState]);

  const getCarouseItem = () => {
    if (carouselState && carouselState.length >= 0) {
      let expiringarray = [],
        trendingArray = [];
      carouselState[0]?.carousels.map((element) => {
        if (element.carouselName === singleConstant.trending_brand) {
          return trendingArray.push(element);
        }
        if (element.carouselName === singleConstant.expiring_deals) {
          return expiringarray.push(element);
        }
      });
      setExpiringCarousel(expiringarray);
      setTrendingCarousel(trendingArray);
    }
  };

  // console.log("featuredData .......", featuredData);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const offerCard = (item) => {
    return (
      <Card className="offer_card promoted_card ">
        <Row align="middle" justify="space-between" sx={{ height: "100%" }}>
          <Col className="offer_box">
            <img className="promo_icon" src={item.logo} />
            <h3 className="offer_text">{item.offer}</h3>
            <p className="offer_type">{item.type}</p>
          </Col>
          <Col>
            <img className="offer_image" src={item.image} />
          </Col>
        </Row>
      </Card>
    );
  };

  const giftCard = (item) => {
    return (
      <Card className="promoted_card giftCard">
        <div key={item.title}>
          <img className="gift_icon" src={item.image} />
          <h3 className="gift_title">{item.title}</h3>
          <p className="gift_des">{item.description}</p>
        </div>
      </Card>
    );
  };
  return (
    <div className="home_container">
      <Row align="middle" className="carousel_container">
        <Col lg={{ span: 10 }} xs={{ span: 24 }} className="mb-4">
          <Carousel
            className="leftSlider"
            list={HomeConstant.offerList}
            cardUI={(item) => offerCard(item)}
          />
        </Col>
        <Col lg={{ span: 8 }} xs={{ span: 24 }}>
          <div className="middle_carousel px-lg-3 mb-4">
            <Carousel
              className="centerSlider"
              list={HomeConstant.giftList}
              cardUI={(item) => giftCard(item)}
            />
          </div>
        </Col>
        <Col lg={{ span: 6 }} xs={{ span: 24 }}>
          <Card className="promoted_card promoted_brands mb-4">
            <h4 className="promotedBrandHeading">Promoted brands</h4>
            <div>
              {HomeConstant.promoList.map((item) => (
                <div className="promo_bar" key={item.title}>
                  <img className="promo_icon" src={item.icon} />
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      <div className="list_view">
        <Heading
          HeadingText="Expiring Deals"
          actionText="View All"
          actionLink="/all-offers"
        />
        <Row
          align="middle"
          className="scrolledView"
          justify="space-around"
          gutter={30}
        >
          {expiringCarousel &&
            expiringCarousel.length &&
            expiringCarousel[0].brands &&
            expiringCarousel[0].brands.length > 0 &&
            expiringCarousel[0].brands.map((item, key) => {
              if (item.products && item.products.length >= 0) {
                var products = item.products[0];
              }
              return (
                <Col key={key} className="deals_box" span={5}>
                  <Card className="deals_container" actions={[]}>
                    <>
                      <Badge
                        position={""}
                        badgeType={capitalizeFirstLetter(products.contentType)}
                        badgeText={products.contentType}
                        badgeIcon={products.contentType}
                      />

                      <Badge
                        position={""}
                        badgeType={capitalizeFirstLetter(
                          products.subcontentType
                        )}
                        badgeText={products.subcontentType}
                        badgeIcon={products.subcontentType}
                      />

                      <img
                        className="dealicon"
                        src={`data:image/png;base64,${item.merchantLogo1}`}
                      />
                      <p className="deals_title">
                        {products?.productMetaData?.map((element) => {
                          if (element.key === "title") {
                            return element.value;
                          }
                        })}
                      </p>
                    </>
                    <Divider />
                    <Row align="middle" key="time" className="deals_action">
                      <ClockCircleOutlined className="deals_offer_title" />
                      <span>{products.expirationDate}</span>
                    </Row>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>

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
          {trendingCarousel &&
            trendingCarousel.length &&
            trendingCarousel[0].brands &&
            trendingCarousel[0].brands.length > 0 &&
            trendingCarousel[0].brands
              .slice(0, 5)
              .map((item, i) => (
                <TrendingBlock
                  obj={item}
                  key={i}
                  span={"span"}
                  brandImage={`data:image/png;base64,${item.merchantLogo1}`}
                  brandTitle={item.merchantName}
                  brandOfferText={"upto 11% cashback"}
                />
              ))}
        </Row>
      </div>

      {/* <div className="list_view">
        <Heading
          HeadingText="Expiring Deals"
          actionText="View All"
          actionLink="/all-offers"
        />
        <Row
          align="middle"
          className="scrolledView"
          justify="space-around"
          gutter={30}
        >
          {HomeConstant?.expiringDeals?.map((item, key) => (
            <Col key={key} className="deals_box" span={4}>
              <Card className="deals_container" actions={[]}>
                <>
                  <Badge
                    position={""}
                    badgeType={item.offer}
                    badgeText={item.offer}
                    badgeIcon={item.offerIcon}
                  />

                  <Badge
                    position={""}
                    badgeType={item.mode}
                    badgeText={item.mode}
                    badgeIcon={item.modeIcon}
                  />

                  <img className="dealicon" src={item.image} />
                  <p className="deals_title">{item.title}</p>
                </>
                <Divider />
                <Row align="middle" key="time" className="deals_action">
                  <ClockCircleOutlined className="deals_offer_title" />
                  <span>{item.time}</span>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="list_view">
        <Heading
          HeadingText="Trending Brands"
          actionText="View All"
          actionLink="/all-brands"
        />
        <TrendingBrands span={4} />
      </div> */}

      <div className="list_view themeBg">
        <Heading
          HeadingText="Featured Offers"
          actionText="View All"
          actionLink="/all-offers"
          color="text-white"
        />
        <FeaturedOffers featuredData={featuredData} />
      </div>

      <div className="list_view">
        <Heading
          HeadingText="Popular Offers"
          actionText="View All"
          actionLink="/all-offers"
        />
        <Row align="middle" justify="space-around" gutter={30}>
          {offerData?.products &&
            offerData.products.products &&
            offerData.products.products.length > 0 &&
            offerData.products.products.slice(0, 3).map((item, key) => (
              <Col
                key={key}
                className="deals_box featuredOffers mb-4"
                span={6}
                lg={{ span: 6 }}
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
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default index;
