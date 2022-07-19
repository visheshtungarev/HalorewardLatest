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
  RightOutlined,
  //ShoppingOutlined
} from "@ant-design/icons";
import {
  CutomerInfoCall,
  featuredCall,
  getMerchantCall,
} from "../../actions/favouriteCall";
import { useNavigate, Link } from "react-router-dom";
import env from "../../enviroment";
import { Post_call } from "../../network/networkmanager";
import { getFavouriteBrand } from "../../actions/brandAction";

const values = env();
const { getCategoriesByClientID } = values;

const index = () => {
  const dispatch = useDispatch();
  const [expiringCarousel, setExpiringCarousel] = useState([]);
  const [trendingCarousel, setTrendingCarousel] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [offerData, setOfferData] = useState([]);
  const [brandData, setBrandData] = useState([]);

  const navigate = useNavigate();

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

    let customerresult = CutomerInfoCall(customerId);
    customerresult.then((res) => {
      // setCustomerBrandList(res?.customer?.brands || [])
      let merchantResponse = getMerchantCall(res?.customer?.brands);
      merchantResponse.then((result) => {
        dispatch(getFavouriteBrand(result || []));
      });
    });
  }, []);

  const carouselState = useSelector((state) => state.auth.carousel);
  // console.log("carouselState ....", carouselState);

  useEffect(() => {
    getCarouseItem();
    getBrandList();
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
          shortTitle
          customerMaxRebate
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
          actionText={
            expiringCarousel && expiringCarousel[0]?.brands?.length > 5
              ? "View All"
              : ""
          }
          actionLink="/all-offers"
        />
        <Row
          align="middle"
          className="scrolledView"
          justify="flex-start"
          gutter={30}
        >
          {expiringCarousel &&
            expiringCarousel.length > 0 &&
            expiringCarousel[0].brands &&
            expiringCarousel[0].brands.length > 0 &&
            expiringCarousel[0].brands.map((item, key) => {
              if (item.products && item.products.length >= 0) {
                var products = item.products[0];
              }
              return (
                <Col key={key} className="deals_box" span={5}>
                  <Card
                    className="deals_container"
                    style={{ cursor: "pointer" }}
                    actions={[]}
                    onClick={() =>
                      navigate(`/cashback?id=${products.productId}`, {
                        state: {
                          item: products,
                          name: item.merchantName,
                          ids: item.merchantId,
                        },
                      })
                    }
                  >
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
        {/* <Heading
          HeadingText="Trending Brands"
          actionText={trendingCarousel[0]?.brands?.length > 6 ? "View All" : ""}
          actionLink="/all-brands"
        /> */}
        <Row
          className="headingFancy mt-md-4"
          align="middle"
          justify="space-between"
        >
          <Col className="list_title">Trending Brands</Col>

          <Col className="list_action">
            {trendingCarousel[0]?.brands?.length < 6 && (
              <Link
                className="d-flex align-items-center"
                to="/list?=trending-brand"
                state={{ type: "trending-brand" }}
              >
                View All
                <RightOutlined />
              </Link>
            )}
          </Col>
        </Row>
        <Row
          align="middle"
          className="scrolledView"
          justify="flex-start"
          gutter={30}
        >
          {trendingCarousel &&
            trendingCarousel.length > 0 &&
            trendingCarousel[0].brands &&
            trendingCarousel[0].brands.length > 0 &&
            trendingCarousel[0].brands
              .slice(0, 6)
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
          actionText={
            featuredData?.products?.products.length > 3 ? "View All" : ""
          }
          actionLink="/all-offers"
          color="text-white"
        />
        <FeaturedOffers featuredData={featuredData} />
      </div>

      <div className="list_view">
        <Row
          className="headingFancy mt-md-4"
          align="middle"
          justify="space-between"
        >
          <Col className="list_title">Popular offers</Col>

          <Col className="list_action">
            {offerData?.products &&
              offerData.products.products &&
              offerData.products.products.length > 0 && (
                <Link
                  className="d-flex align-items-center"
                  to="/list?=popular-offer"
                  state={{ type: "popular-offer" }}
                >
                  View All
                  <RightOutlined />
                </Link>
              )}
          </Col>
        </Row>
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

      <div className="list_view">
        <Row
          className="headingFancy mt-md-4"
          align="middle"
          justify="space-between"
        >
          <Col className="list_title">Featured Brand</Col>

          <Col className="list_action">
            {brandData && brandData.length > 0 && (
              <Link
                className="d-flex align-items-center"
                //to="/list?=feature-brand"
                to="/all-brands"
                // state={{ type: "featured-brand" }}
              >
                View All
                <RightOutlined />
              </Link>
            )}
          </Col>
        </Row>
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
                      totalCashback: item.shortTitle,
                      description: item.merchantDescription,
                      ids: item.merchantId,
                      isCard: item.onCard,
                      brandName: item?.merchantName,
                      brandLogo: item?.merchantLogo1,
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
                                      <span>{val.size + " " + val.name}, </span>
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

      {/* <Footer /> */}
    </div>
  );
};

export default index;
