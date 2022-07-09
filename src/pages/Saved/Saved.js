import React, { useEffect, useState } from "react";
import "./index.css";
import { Col, Row, Card, Divider, Button } from "antd";

// import {
//     GlobalOutlined,
//     CopyOutlined,
//     ShopOutlined,
//     ShoppingOutlined
// } from "@ant-design/icons";
import { FiClock } from "react-icons/fi";

// import Badge from "../../components/Badge/Badge";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { getMerchantAction } from "../../actions/merchantActions";
// import { getProductAction } from "../../actions/getOfferAction";
// import { getCustomerInfoAction } from "../../actions/userActions";
import {
  CutomerInfoCall,
  getMerchantCall,
  getProductfavCall,
} from "../../actions/favouriteCall";
import SideMenu from "../../components/SideMenu";
// import { render } from "@testing-library/react";
// const { Meta } = Card;

// const expiringDeals = [
//     {
//         offer: "Coupon",
//         mode: "Online",
//         image: "/Images/flipkart.png",
//         title: "Win a chance to get voucher of worth £280",
//         time: "1d 2h 21m",
//         offerIcon: <CopyOutlined />,
//         modeIcon: <GlobalOutlined />
//     },
//     {
//         offer: "Cashback",
//         mode: "Instore",
//         image: "/Images/nykaa.png",
//         title: "Win a chance to get voucher of worth £280",
//         time: "1d 2h 21m",
//         offerIcon: <ShoppingOutlined />,
//         modeIcon: <ShopOutlined />
//     },
//     {
//         offer: "Prize Draw",
//         mode: "Instore & online",
//         image: "/Images/flipkart.png",
//         title: "Win a chance to get voucher of worth £280",
//         time: "1d 2h 21m",
//         offerIcon: <CopyOutlined />,
//         modeIcon: <GlobalOutlined />
//     },
//     {
//         offer: "Coupon",
//         mode: "Instore & online",
//         image: "/Images/nykaa.png",
//         title: "Win a chance to get voucher of worth £280",
//         time: "1d 2h 21m",
//         offerIcon: <CopyOutlined />,
//         modeIcon: <GlobalOutlined />
//     },
// ]
// const trendingDeals = [
//     {
//         title: "Myntra",
//         image: "/Images/flipkart.png",
//         content: "1 coupons,2 Prize Draws",
//         time: "1d 2h 21m",

//     },
//     {
//         title: "Nike",
//         image: "/Images/nykaa.png",
//         content: "12 Prize Draws",
//         time: "1d 2h 21m",

//     },
//     {
//         title: "Flipkart",
//         image: "/Images/flipkart.png",
//         content: "upto 7% cashback, 2 Prize Draws",
//         time: "1d 2h 21m",

//     },
//     {
//         title: "GAP",
//         image: "/Images/nykaa.png",
//         content: "upto 7% cashback, 4 coupons, 2 Prize Draws",
//         time: "1d 2h 21m",

//     }
// ]

export default function Saved() {
  // const [trending,] = useState(trendingDeals)
  const [, setOpenSidePanel] = useState(false);

  const [brandList, setBrandList] = useState([]);
  const [couponListing, setCouponListing] = useState([]);
  const [cashbackListing, setCashbackListing] = useState([]);

  const getCustomer = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 993) {
      setOpenSidePanel(true);
    }
  }, []);

  useEffect(() => {
    let customerId = getCustomer?.customer?._id;
    let customerresult = CutomerInfoCall(customerId);
    let coupon = [],
      cashback = [];
    customerresult.then((res) => {
      // setCustomerBrandList(res?.customer?.brands || [])
      let merchantResponse = getMerchantCall(res?.customer?.brands);
      merchantResponse.then((result) => {
        setBrandList(result || []);
      });

      let productResponse = getProductfavCall(res?.customer?.products);
      productResponse.then((result) => {
        result &&
          result.length > 0 &&
          result.map((item) => {
            if (item.contentType === "coupon") {
              coupon.push(item);
            }
            if (item.contentType === "cashback") {
              cashback.push(item);
            }
          });
        setCouponListing(coupon || []);
        setCashbackListing(cashback || []);
      });
    });
  }, []);

  return (
    <div className="home_container">
      <div className="list_view">
        <Row justify="space-around" gutter={20}>
          <Col span={24} lg={{ span: 6 }}>
            <SideMenu />
          </Col>
          <Col span={24} lg={{ span: 18 }}>
            {/* <Row gutter={30} className="mb-4">
              <Col className="deals_box" span={24}>
                <Card className="deals_container">
                  <div className="d-flex align-items-center">
                    <div>
                      <img src="/Images/prize.svg" height={30} />
                    </div>
                    <h5 className="mb-0 fw-bold flex-grow-1 pl-3">
                      Prize Draws
                    </h5>
                    <div className="DrwaCount mr-3">4</div>
                    <span>
                      <img src="/Images/arrow_next.svg" height={20} />
                    </span>
                  </div>
                </Card>
              </Col>
            </Row> */}
            <Heading
              HeadingText="Coupons"
              // actionText={couponListing.length > 4 ? "View All" : ""}
              actionText="View All"
              actionLink="/saved/saved-coupon"
            />
            <Row
              align="middle"
              className="scrolledView mb-4"
              justify="flex-start"
              gutter={30}
            >
              {couponListing && couponListing.length <= 0 && (
                <Col className="deals_box" span={24}>
                  <Card className="deals_container">
                    <Row align="middle">
                      <Col span={12} className="py-4 ">
                        <img
                          src="/Images/no_offer.svg"
                          height={200}
                          style={{ width: "70%" }}
                        />
                      </Col>
                      <Col span={12}>
                        <h5>You haven’t pinned any offers</h5>
                        <p>
                          Your preferences will help us keep you updated on
                          offers relevant to your taste.
                        </p>
                        <Link to="/all-brands">
                          <Button type="primary" size="large">
                            View All offers
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              )}

              {/* when no offer found ====================*/}

              {couponListing &&
                couponListing.length > 0 &&
                couponListing.map((item, key) => (
                  <Col key={key} className="deals_box" span={6}>
                    <Card
                      className="deals_container"
                      // onClick={()=>navigate("/saved/saved-coupon")}
                      // onClick={() =>
                      //   navigate(`/coupon?id=${item.productId}`, {
                      //     state: {
                      //       item: item,
                      //       name: brandName,
                      //       ids: merchantId,
                      //     },
                      //   })
                      // }
                    >
                      <>
                        <img className="dealicon" src="/Images/flipkart.png" />
                        <p className="deals_title" style={{ height: "60px" }}>
                          {item?.productMetaData?.map((element) => {
                            if (element.key === "title") {
                              return element.value;
                            }
                          })}
                        </p>
                      </>
                      <Divider />
                      <Row align="middle" key="time" className="deals_action">
                        {/* <ClockCir className="deals_offer_title" /> */}
                        <span className="d-flex align-items-center timer fw-bold">
                          {" "}
                          <FiClock /> &nbsp; {item.expirationDate}
                        </span>
                      </Row>
                    </Card>
                  </Col>
                ))}
            </Row>

            <Heading
              HeadingText="Cashback"
              actionText={cashbackListing.length > 4 ? "View All" : ""}
              // actionText="View All"
              actionLink="/saved/saved-cashback"
            />
            <Row
              align="middle"
              className="scrolledView mb-4"
              justify="flex-start"
              gutter={30}
            >
              {cashbackListing && cashbackListing.length <= 0 && (
                <Col className="deals_box" span={24}>
                  <Card className="deals_container">
                    <Row align="middle">
                      <Col span={12} className="py-4 ">
                        <img
                          src="/Images/no_offer.svg"
                          height={200}
                          style={{ width: "70%" }}
                        />
                      </Col>
                      <Col span={12}>
                        <h5>You haven’t pinned any offers</h5>
                        <p>
                          Your preferences will help us keep you updated on
                          offers relevant to your taste.
                        </p>
                        <Link to="/all-brands">
                          <Button type="primary" size="large">
                            View All offers
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              )}

              {/* when no offer found ====================*/}

              {cashbackListing &&
                cashbackListing.length > 0 &&
                cashbackListing.map((item, key) => (
                  <Col key={key} className="deals_box" span={6}>
                    <Card
                      className="deals_container"
                      // onClick={()=>navigate("/saved/saved-coupon")}
                    >
                      <>
                        <img className="dealicon" src="/Images/flipkart.png" />
                        <p className="deals_title">
                          {item?.productMetaData?.map((element) => {
                            if (element.key === "title") {
                              return element.value;
                            }
                          })}
                        </p>
                      </>
                      <Divider />
                      <Row align="middle" key="time" className="deals_action">
                        {/* <ClockCir className="deals_offer_title" /> */}
                        <span className="d-flex align-items-center timer fw-bold">
                          {" "}
                          <FiClock /> &nbsp; {item.expirationDate}
                        </span>
                      </Row>
                    </Card>
                  </Col>
                ))}
            </Row>

            <Heading
              HeadingText="Favourite Brands"
              actionText="View All"
              actionLink="/saved/favorite-brand"
            />
            <Row
              align="middle"
              className="scrolledView"
              justify="space-around"
              gutter={30}
            >
              {/* when no coupon found ====================*/}

              {brandList && brandList.length <= 0 && (
                <Col className="deals_box" span={24}>
                  <Card className="deals_container">
                    <Row align="middle">
                      <Col span={12} className="py-4 ">
                        <img
                          src="/Images/no_coupon.svg"
                          height={200}
                          style={{ width: "70%" }}
                        />
                      </Col>
                      <Col span={12}>
                        <h5>You haven’t pinned any brands</h5>
                        <p>
                          Your preferences will help us keep you updated on
                          offers relevant to your taste.
                        </p>
                        <Link to="/all-offers">
                          <Button type="primary" size="large">
                            View All Brand
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              )}

              {/* when no coupon found ====================*/}

              {brandList &&
                brandList.length > 0 &&
                brandList.map((item, i) => {
                  return (
                    <Col
                      key={i}
                      className="deals_box trending_brands mb-3 text-left"
                      span={6}
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
                        <Card
                          className="deals_container"
                          // onClick={()=>navigate('/saved/favorite-brand')}
                        >
                          <>
                            <img
                              className="dealicon_img_frame "
                              src={`data:image/png;base64,${item.merchantLogo1}`}
                            />
                            <p
                              className="deals_title mb-0 mt-0"
                              style={{ minHeight: "auto" }}
                            >
                              {item.merchantName}
                            </p>
                            <p>upto 7% cashback, 2 Prize Draw</p>
                          </>
                        </Card>
                      </Link>
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
