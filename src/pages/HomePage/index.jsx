import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import "./index.css";
import { Card, Col, Divider, Row } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { HomeConstant } from "../../Constants";
import FeaturedOffers from "../../components/FeaturedOffers/FeaturedOffers";
// import TrendingBrands from "../../components/TrendingBrands/TrendingBrands";
import PopularOffers from "../../components/PopularOffers/PopularOffers";
import Badge from "../../components/Badge/Badge";
import Heading from "../../components/Heading/Heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCarousel } from "../../actions/getCarouselAction";
import { singleConstant } from "../../Constants/HomeConstant";
import TrendingBlock from "../../components/TrendingBrands/TrendingBlock";

// const { Meta } = Card;

const index = () => {
  const dispatch = useDispatch();
  const [expiringCarousel, setExpiringCarousel] = useState([]);
  const [trendingCarousel, setTrendingCarousel] = useState([]);

  const accessToken = localStorage.getItem("accessToken")

  useEffect(() => {
    accessToken && dispatch(getCarousel());
  }, []);

  const carouselState = useSelector((state) => state.auth.carousel);

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

  console.log("expiringCarousel ....", expiringCarousel);
  // console.log("trendingcarousel .......", trendingCarousel);

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
          {trendingCarousel &&
            trendingCarousel.length &&
            trendingCarousel[0].products &&
            trendingCarousel[0].products.length > 0 &&
            trendingCarousel[0].products.splice(1, 6).map((item, key) => {
            return  (
                <Col key={key} className="deals_box" span={4}>
                  <Card className="deals_container" actions={[]}>
                    <>
                      <Badge
                        position={""}
                        badgeType={capitalizeFirstLetter(
                          item.contentType
                        )}
                        badgeText={item.contentType}
                        badgeIcon={item.contentType}
                      />
  
                      <Badge
                        position={""}
                        badgeType={capitalizeFirstLetter(item.subcontentType)}
                        badgeText={item.subcontentType}
                        badgeIcon={item.subcontentType}
                      />
  
                      <img
                        className="dealicon"
                        src="/Images/flipkart.png"
                      />
                      <p className="deals_title">{
                        item?.productMetaData?.map((element)=>{
                          if(element.key === "title"){
                            return element.value
                          }
                        })
                      }</p>
                    </>
                    <Divider />
                    <Row align="middle" key="time" className="deals_action">
                      <ClockCircleOutlined className="deals_offer_title" />
                      <span>{item.expirationDate}</span>
                    </Row>
                  </Card>
                </Col>
              )
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
            trendingCarousel[0].brands.map((item, i) => (
              <TrendingBlock
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
        <FeaturedOffers />
      </div>

      <div className="list_view">
        <Heading
          HeadingText="Popular Offers"
          actionText="View All"
          actionLink="/all-offers"
        />
        <PopularOffers />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default index;
