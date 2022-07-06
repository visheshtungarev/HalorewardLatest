import React, { useState } from "react";
import "./index.css";
import { Button, Card, Col, Divider, Row } from "antd";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import Breadcurms from "../../components/Breadcrums/Breadcurms";
import { ClockCircleOutlined } from "@ant-design/icons";
import Heading from "../../components/Heading/Heading";
import { HomeConstant } from "../../Constants";
import Badge from "../../components/Badge/Badge";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import {
  addtoFavProduct,
  CutomerInfoCall,
  getProductfavCall,
} from "../../actions/favouriteCall";
import { toast } from "react-toastify";

export default function Coupon() {
  //   const [codeType] = useState("qrcode");
  const location = useLocation();
  console.log("getdetail.......", location.state);

  const objectItem = location?.state?.item;
  const merchantId = location?.state?.ids;

  let IsQrType = "",
    codeType = "";

  objectItem?.productMetaData.map((item) => {
    if (item.key === "code") {
      IsQrType = item.value;
    }
    if (item.key === "codeType") {
      codeType = item.value;
    }
  });

  const [addBookmark, setAddBookmark] = useState(true);

  const getCustomer = useSelector((state) => state.auth.user);
  const customerId = getCustomer?.customer?._id;

  const Pickfav = () => {
    let addtofavCall = addtoFavProduct(customerId, merchantId);
    addtofavCall.then((res) => {
      if (res.status === true) {
        toast.success(res.msg);
        setAddBookmark(false);
        let customerresult = CutomerInfoCall(customerId);
        customerresult.then((res) => {
          let productResponse = getProductfavCall(res?.customer?.products);
          productResponse.then((result) => {
            console.log(result);
          });
        });
      }
    });
  };

  // const addBookmarkEvent = () => {
  //   addBookmark ? setAddBookmark(false) : setAddBookmark(true);
  // };
  return (
    <>
      <div className="home_container">
        <Row align="middle" className="list_view mb-0 pb-0">
          <Breadcurms
            data={[
              {
                pageName: "Home",
                pageLink: "/",
              },
              {
                pageName: "All Brands",
                pageLink: "/all-brands",
              },
              {
                pageName: "Myntra",
                pageLink: "/Myntra",
              },
              {
                pageName: "Coupon",
                pageLink: "/Coupon",
              },
            ]}
          />
        </Row>
      </div>
      <div className="home_container bg-white">
        <div className="list_view ">
          <Row>
            <Col md={{ span: 18 }} className="mx-auto">
              <div className="couponFrame text-center">
                <span
                  className="fixed-top-right p-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => Pickfav()}
                >
                  {addBookmark ? (
                    <MdBookmarkBorder style={{ fontSize: "2rem" }} />
                  ) : (
                    <MdBookmark
                      style={{ fontSize: "2rem", color: "#120078" }}
                    />
                  )}
                </span>
                <div className="text-center d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <div className="logo">
                      <img src="Images/myntra.png" width="100%" />
                    </div>
                    <h5 className="mb-0 ml-3">{location?.state?.name}</h5>
                  </div>
                </div>
                <h5 className="text-center fw-bold py-4">
                  {objectItem?.subcontentType}: &nbsp;
                  {objectItem?.productMetaData.map((item) => {
                    if (item.key === "productDescription") {
                      return item.value;
                    }
                  })}
                </h5>

                {codeType && (
                  <div className="barcode">
                    <div style={{ background: "white", padding: "25px" }}>
                      <QRCode value={objectItem?.productId} />
                    </div>
                    <p>{IsQrType}</p>
                    <p className="codeIntruction mt-4">
                      Scan code instfdfdore or ‘Copy & Go to Site’
                    </p>
                  </div>
                )}

                {/* {codeType === "cardcode" ? (
                  <div className="barcode">
                    <img
                      src="/Images/barcode.png"
                      className="codeImg"
                      height={80}
                    />
                    <p className="codeIntruction mt-4">
                      Scan code instore or ‘Copy & Go to Site’
                    </p>
                  </div>
                ) : codeType === "qrcode" ? (
                  <div className="barcode">
                    <img
                      src="/Images/qrcode.png"
                      className="codeImg"
                      height={100}
                    />
                    <p className="codeIntruction mt-4">
                      Scan code instfdfdore or ‘Copy & Go to Site’
                    </p>
                  </div>
                ) : codeType === "coupon" ? (
                  <div className="couponNumber">
                    <p className="text-muted">Coupon Code</p>
                    <span className="couponCode px-5">
                      {objectItem?.productMetaData.map((item) => {
                        if (item.key === "code") {
                          return item.value;
                        }
                      })}
                    </span>
                  </div>
                ) : (
                  ""
                )} */}

                <Button
                  type="primary"
                  className="px-5 justify-content-center align-items-center d-flex mx-auto"
                >
                  Copy & GO to site
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="home_container mt-4">
        <div className="list_view">
          <Row justify="space-around" gutter={25}>
            <Col
              className="  overflow-hidden featuredOffers mb-4"
              span={24}
              lg={{ span: 10 }}
            >
              <Card className="deals_container rounded1 popularOffers">
                <h4 className="fw-bold mb-3">
                  Coupon in <span className="theme-color">3 steps</span>
                </h4>
                <div className="threeSteps">
                  <div className="steps finished">
                    <div className="d-flex align-items-center pr-4">
                      <div className="stepicons ">
                        <img src="/Images/step1.svg" />
                      </div>
                      <h6 className="text-muted mb-0 ">Step 1</h6>
                    </div>
                    <h6 className="">
                      Copy the code and go to merchant’s site.
                    </h6>
                  </div>
                  <div className="steps ">
                    <div className="d-flex align-items-center pr-4">
                      <div className="stepicons ">
                        <img src="/Images/step2.svg" />
                      </div>
                      <h6 className="text-muted mb-0 ">Step 1</h6>
                    </div>
                    <h6 claasName="">
                      We’ll automatically paste the code at the time of
                      checkout.
                    </h6>
                  </div>
                  <div className="steps">
                    <div className="d-flex align-items-center pr-4">
                      <div className="stepicons ">
                        <img src="/Images/step3.svg" />
                      </div>
                      {/* <h6 claasName="text-muted mb-0 ">Step 1</h6> */}
                    </div>
                    {/* <h6 claasName="">Copy the code and go to merchant’s site.</h6> */}
                  </div>
                </div>
                <div className="stepsText d-lg-none d-block">
                  <h6>
                    <span className="text-muted mb-0 ">Step 1</span> &nbsp; Copy
                    the code and go to merchant’s site.
                  </h6>
                </div>
              </Card>
            </Col>
            <Col
              className="  overflow-hidden featuredOffers mb-4"
              span={24}
              lg={{ span: 14 }}
            >
              <Card className="deals_container rounded1 popularOffers">
                <h4 className="fw-bold mb-3">Terms & Conditions</h4>
                <h5 className="my-4">Key Terms</h5>
                <ul className="pl-3">
                  <li className="mb-3">
                    Purchases of Apple products, Wetsuits, Jordan products &
                    Giftcards will not be eligible for cashback. Cashback cannot
                    be earned for purchases made.
                  </li>
                  <li className="mb-3">
                    Cashback will not be paid on SNEAKRS products.
                  </li>
                  <li className="mb-3">
                    In an effort to protect the Nike brand, any transactions
                    suspected to be involved with reseller activity will be
                    reviewed by Nike. This could lead to only partial cashback
                    being rewarded.
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>
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
      </div>
    </>
  );
}
