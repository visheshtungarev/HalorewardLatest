import React, { useEffect, useState } from "react";
import "./index.css";
import Heading from "../../components/Heading/Heading";
import { CreditCardOutlined } from "@ant-design/icons";
import Breadcurms from "../../components/Breadcrums/Breadcurms";
import { Row, Col, Card } from "antd";
import Badge from "../../components/Badge/Badge";
import Coupon from "./Coupon/Coupon";
import PrizeDraw from "./PrizeDraws/PrizeDraw";
import Cashback from "./CashBack/Cashback";
import { Link } from "react-scroll";
import { getOfferAction } from "../../actions/getOfferAction";
import { useLocation, useNavigate } from "react-router-dom";
import { Delete_call, Put_call } from "../../network/networkmanager";
import env from "../../enviroment";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { CutomerInfoCall, getMerchantCall } from "../../actions/favouriteCall";
// import Coupon from './PrizeDraws/PrizeDraw';

const allTredingOffers = [
  {
    image: "/Images/flipkart.png",
    title: "Flipkart",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."
  },
  {
    image: "/Images/flipkart.png",
    title: "Flipkart",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."
  },
  {
    image: "/Images/flipkart.png",
    title: "Flipkart",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw..."
  }
];
export default function BrandDetails() {
  // const getSearchData = useSelector((state) => state.auth?.brand);

  const getData = useLocation();
  let ids = getData?.state?.ids;
  let onCard = getData?.state?.isCard;
  const navigate = useNavigate();
  const [dataArr] = useState(allTredingOffers);
  const [offerData, setOfferData] = useState(allTredingOffers);
  const [countofOffer, setCountofOffer] = useState({});
  const [isFavourite, setIsFavourite] = useState(false);
  const [brandName, setBrandName] = useState(getData?.state?.brandName);
  const [offerArrayData, setOfferArrayData] = useState({
    cashback: [],
    coupon: [],
    prize: []
  });

  const getCustomer = useSelector((state) => state.auth.user);

  useEffect(() => {
    let customerId = getCustomer?.customer?._id;
    let customerresult = CutomerInfoCall(customerId);
    customerresult.then((res) => {
      // setCustomerBrandList(res?.customer?.brands || [])
      let merchantResponse = getMerchantCall(res?.customer?.brands);
      merchantResponse.then((result) => {
        if (result && result.length > 0) {
          var isFav =
            result.filter(function (val) {
              return val.merchantId === ids;
            }).length > 0;

          setIsFavourite(isFav);
        }
      });
    });
  }, []);

  useEffect(() => {
    let offerResult = getOfferAction(ids);
    let prizeDrawCount = 0,
      couponCount = 0,
      cashbackCount = 0;

    let cashbackArray = [],
      couponArray = [],
      prizeDrawArray = [];

    offerResult.then((data) => {
      data?.products?.products.forEach((item) => {
        if (item.contentType === "prize draw") {
          prizeDrawCount++;
          prizeDrawArray.push(item);
        }
        if (item.contentType === "coupon") {
          couponCount++;
          couponArray.push(item);
        }
        if (item.contentType === "cashback") {
          cashbackCount++;
          cashbackArray.push(item);
        }
      });
      setOfferArrayData({
        cashback: cashbackArray,
        coupon: couponArray,
        prize: prizeDrawArray
      });
      setCountofOffer({
        prize: prizeDrawCount,
        coupon: couponCount,
        cashback: cashbackCount
      });
      setOfferData(data?.products);
    });
    setBrandName(getData?.state?.brandName);
  }, [ids]);

  const addTofav = async () => {
    const values = env();
    const { customerAuth } = values;
    let customerId = getCustomer?.customer?._id;

    if (isFavourite) {
      try {
        let response = await Delete_call(
          `${customerAuth}/${customerId}/brands/${ids}`
        );
        if (response.status === 202) {
          toast.success("Brand has been remove from favorite");
          setIsFavourite(false);
        }
      } catch (error) {
        console.leg(error);
        throw error;
      }
    } else {
      try {
        let response = await Put_call(
          `${customerAuth}/${customerId}/brands/${ids}`
        );
        if (response.status === 202) {
          toast.success("Brand has been added to favorite");
          setIsFavourite(true);
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  };

  useEffect(() => {
    getBreadCrum();
  }, [ids, brandName]);

  const getBreadCrum = () => {
    return (
      <Breadcurms
        data={[
          {
            pageName: "Home",
            pageLink: "/"
          },
          {
            pageName: "All Brands",
            pageLink: "/all-brands"
          },
          {
            pageName: brandName,
            pageLink: `/${brandName}`
          }
        ]}
      />
    );
  };

  // console.log("offerData.....", offerData);

  return (
    <div className="home_container">
      <Row align="middle" className="list_view mb-0 pb-0">
        {getBreadCrum()}
      </Row>
      <div className="position-relative ">
        <Row
          align="middle"
          className="mb-0 pb-0 brandWall d-none d-lg-block"
          style={{
            background: "url('/Images/offerBanner.jpg')"
          }}
        ></Row>
        <div className="list_view">
          <Row className=" brandProfile" gutter={30} lg={{ gutter: 0 }}>
            <Col span={6} className="d-none d-lg-block">
              <div className="brandImage">
                <img
                  src={`data:image/png;base64,${getData?.state?.brandLogo}`}
                  alt="img"
                />
              </div>
              <div className="whiteFrame">
                <h5>About {getData.state?.brandName}</h5>
                <p>{getData.state.description}</p>
              </div>
            </Col>
            <Col className="brandInfo" span={24} lg={{ span: 18 }}>
              <img
                className="dealicon_img_frame d-block d-lg-none mx-auto"
                // src="/Images/myntra.png"
              />
              <div className="d-flex mb-2">
                <h4 className="fw-bold text-lg-left text-center py-3 py-lg-0 text-white m-0">
                  {getData.state?.brandName}
                </h4>
                <span
                  className="favoriteBtn"
                  style={{ margin: "5px 10px", cursor: "pointer" }}
                >
                  <input
                    style={{ cursor: "pointer" }}
                    name="makeFav"
                    type="checkbox"
                    checked={isFavourite}
                    onChange={() => addTofav()}
                  />
                  <span className="checkimg"></span>
                </span>
              </div>
              <p className="align-items-center d-none d-lg-flex">
                {getData.state.totalCashback}
                {getData.state.totalCashback && (
                  <span className="deviderWhite"></span>
                )}{" "}
                {countofOffer?.coupon} coupons{" "}
                <span className="deviderWhite"></span> {countofOffer?.prize}{" "}
                prize draws
              </p>

              <ul className="list-group list-group-horizontal p-0">
                <li className="list-group-item bg-transparent border-0 pl-0">
                  <Link
                    activeClass="active"
                    to="cashback"
                    spy={true}
                    smooth={true}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/Images/cashback.svg" height={40} /> &nbsp;{" "}
                      <h6 className="mb-0">Cashbacks</h6>
                    </div>
                  </Link>
                </li>

                <li className="list-group-item bg-transparent border-0 pl-0">
                  <Link
                    activeClass="active"
                    to="coupon"
                    spy={true}
                    smooth={true}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/Images/coupon.svg" height={40} /> &nbsp;{" "}
                      <h6 className="mb-0">Coupon</h6>
                    </div>
                  </Link>
                </li>

                <li className="list-group-item bg-transparent border-0 pl-0">
                  <Link
                    activeClass="active"
                    to="prizedraw"
                    spy={true}
                    smooth={true}
                  >
                    <div className="d-flex align-items-center">
                      <img src="/Images/prizeDraw.svg" height={40} /> &nbsp;{" "}
                      <h6 className="mb-0">PrizeDraw</h6>
                    </div>
                  </Link>
                </li>
              </ul>
              {onCard && (
                <div
                  className="onCardOfferBanner mb-4"
                  onClick={() => navigate("/oncardOffer")}
                  style={{ cursor: "pointer" }}
                >
                  <h4 className="mb-2">On Card Offers</h4>
                  <p className="mb-4">Upfront cost must be £50+</p>
                  <h3 className="d-inline-block">10% OFF </h3>{" "}
                  <small>Terms and Conditions*</small>
                </div>
              )}

              <Cashback
                idname={"cashback"}
                cashbackList={offerArrayData?.cashback}
                brandName={offerData?.merchantName}
                merchantId={ids}
              />
              <Coupon
                idname={"coupon"}
                couponList={offerArrayData?.coupon}
                brandName={offerData?.merchantName}
                merchantId={ids}
              />
              <PrizeDraw
                idname={"prizedraw"}
                prizeList={offerArrayData?.prize}
                brandName={offerData?.merchantName}
                merchantId={ids}
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="list_view">
        <Heading
          HeadingText="Similar Brands"
          actionText="View All"
          actionLink="/Similar-offers"
        />
        <Row
          align="middle"
          className="scrolledView"
          justify="space-around"
          gutter={30}
        >
          {dataArr &&
            dataArr.map((item, i) => (
              <Col
                key={i}
                className="deals_box trending_brands mb-3 text-left"
                span={4}
              >
                <Card className="deals_container">
                  <Badge
                    badgeType={item?.modeType}
                    badgeText={item?.modeText}
                    badgeIcon={item.modeIcon}
                  />
                  <>
                    <img className="dealicon " src={item.image} />
                    <p className="deals_title" style={{ minHeight: "auto" }}>
                      {item.title}
                    </p>

                    <Row className=" cashback_info">upto 11% cashback</Row>
                  </>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}
