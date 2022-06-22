import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
// import PopularOffers from "../../components/PopularOffers/PopularOffers";
import Breadcurms from "../../components/Breadcrums/Breadcurms";
import { Row, Col, Select } from "antd";
import SideBar from "../../components/Sidebar/SideBar";
// import { Post_call } from '../../network/networkmanager';
// import env from '../../enviroment';
import { Card, Button } from "antd";
import { getOfferAction } from "../../actions/getOfferAction";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// import {
//   // GlobalOutlined,
//   CopyOutlined,
//   //ShopOutlined,
//   //ShoppingOutlined
// } from "@ant-design/icons";
// import Badge from "../../components/Badge/Badge";

// const values = env();
// const { getCategoriesByClientID } = values;

const sidebarData = [
  {
    title: "Accessories",
    link: "",
  },
  {
    title: "Auto & Tires",
    link: "",
  },
  {
    title: "Baby & Kids Gear",
    link: "",
  },
  {
    title: "Books & Media",
    link: "",
  },
  {
    title: "Clothing",
    link: "",
  },
  {
    title: "Electronics",
    link: "",
  },
  {
    title: "Events & Activities",
    link: "",
  },
  {
    title: "Flowers & Florists",
    link: "",
  },
  {
    title: "Food & Restaurants",
    link: "",
  },
  {
    title: "Gifts & Occasions",
    link: "",
  },
  {
    title: "Pet Supplies",
    link: "",
  },
  {
    title: "Books & Media",
    link: "",
  },
  {
    title: "Food & Restaurants",
    link: "",
  },
  {
    title: "Gifts & Occasions",
    link: "",
  },
  {
    title: "Health & Beauty",
    link: "",
  },
  {
    title: "Events & Activities",
    link: "",
  },
];

export default function OfferSearch() {
  const [dataArr] = useState();
  const { id } = useParams();
  const [sideMenuItems] = useState(sidebarData);
  const [openSidePanel, setOpenSidePanel] = useState(false);
  const [offerData, setOfferData] = useState([]);

  const getMerachandData = useSelector((state) => state.auth?.all_brand);

  console.log("getMerachandData ...", getMerachandData);

  const { Option } = Select;
  const closeSidebar = () => {
    !openSidePanel ? setOpenSidePanel(true) : setOpenSidePanel(false);
  };
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 993) {
      setOpenSidePanel(true);
    }

    let offerResult = getOfferAction();
    offerResult.then((data) => {
      console.log(data);
      setOfferData(data?.products);
    });
  }, []);

  const navigate = useNavigate();

  // const getMerchantByIds = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "text/plain");
  //   myHeaders.append("Cookie", "JSESSIONID=3054A8F6D1AED4F5314369EFD871CA30");

  //   var raw =
  //     "{\n    merchantsById(id: [1,2,3,4,5,6,7,8]) {\n        merchantId \n        merchantName \n        merchantDescription \n        merchantRank \n        status \n        customerMaxRebate \n        provider\n        externalMaxRebate \n        modifiedDate \n        merchantLogo1 \n        merchantUrl \n        createdDate\n    }\n}";

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "https://merchants-query.dxxrewards.click/api/merchants",
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };

  console.log("offerdata.....", offerData);

  console.log("dataarr ....", dataArr);
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
              pageName: `All Results With '${id}'`,
              pageLink: "/all-offers",
            },
          ]}
        />
      </Row>

      <div className="list_view">
        <Heading
          HeadingText={`All Results With '${id}'`}
          // actionText="View All"
          // actionLink="/all-offers"
          filter={
            <>
              <button onClick={() => closeSidebar()} className="filterBtn">
                Filter
              </button>
              <Select defaultValue="Any Reward Type" allowClear>
                <Option value="AnyRewardType">Any Reward Type</Option>
              </Select>
              <Select defaultValue="Popular" allowClear>
                <Option value="Popular">Popular</Option>
              </Select>
            </>
          }
        />
        <Row justify="space-around" gutter={30}>
          <Col span={24} lg={{ span: 6 }}>
            {openSidePanel ? (
              <SideBar
                closePanel={() => closeSidebar()}
                type="checklist"
                mainTitle="Filter"
                data={sideMenuItems}
              />
            ) : (
              ""
            )}
          </Col>

          <Col span={24} lg={{ span: 18 }}>
            {/* <PopularOffers offerData={offerData} /> */}
            {getMerachandData && getMerachandData.length > 0 && (
              <Row align="middle" gutter={30}>
                {getMerachandData.map((item, key) => {
                  return (
                    // <Col
                    //   key={key}
                    //   className="deals_box featuredOffers mb-4"
                    //   span={6}
                    //   lg={{ span: 6 }}
                    // >
                    //   <Card className="deals_container popularOffers">
                    //     <div className="d-flex w-100 mb-3">
                    //       <div className="py-3 py-md-0 pr-3 border-right">
                    //         <img src="/Images/myntra.png" height={50} />
                    //       </div>

                    //       <div className="flex-grow-1 pl-3">
                    //         <p className="deals_title">{item.merchantName}</p>

                    //         {/* <Row key="time" className="featured_offer_action ">
                    //                 <span>{item.time}</span>
                    //             </Row> */}
                    //       </div>
                    //     </div>
                    //     <Button
                    //       type="primary"
                    //       className="w-100"
                    //       onClick={() =>
                    //         navigate(`/brand?id=${item.merchantId}`, {
                    //           state: {
                    //             totalCashback: "NA",
                    //             description: "NA",
                    //             ids: item.merchantId,
                    //           },
                    //         })
                    //       }
                    //       to={`/brand?id=${item.merchantId}`}
                    //     >
                    //       Go To Detail
                    //     </Button>
                    //   </Card>
                    // </Col>

                    <Col
                      key={key}
                      className="deals_box featuredOffers mb-4"
                      span={12}
                      lg={{ span: 12 }}
                    >
                      <Card
                        className="deals_container popularOffers"
                        actions={[]}
                      >
                        <div className="d-flex w-100 ">
                          <div>
                            <img
                              className="dealicon_img_frame_lg"
                              src={`data:image/png;base64,${item.merchantLogo1}`}
                            />
                          </div>
                          <div className="flex-grow-1">
                            <div>
                              <div className="w-100 d-flex align-items-center justify-content-between">
                                <div className="d-md-flex">
                                  {/* <Badge
                                    position={""}
                                    badgeType={"Cashback"}
                                    badgeText={"Cashback"}
                                    badgeIcon={<CopyOutlined />}
                                  /> */}

                                  <Row
                                    align="center"
                                    className={` cardbadge Cashback mx-1`}
                                  >
                                    <Col
                                      className="deals_offer_title m-0"
                                    >
                                      Cashback
                                    </Col>
                                    <Col>
                                    <img width="25px" src="/Images/cashback.svg" />
                                    </Col>
                                  </Row>
                                  {/* <Badge
                                    position={""}
                                    badgeType={"Coupon"}
                                    badgeText={"Coupon"}
                                    badgeIcon={<GlobalOutlined />}
                                  /> */}
                                </div>
                                <p className="mb-0 viewAllOffer">
                                  view all offer (24)
                                </p>
                              </div>
                              <div className="py-3 py-md-0">
                                <img
                                  className="dealicon_img_frame_lg_mobile"
                                  src="/Images/flipkart.png"
                                />
                              </div>
                              <p className="deals_title">
                                {/* {item.productMetaData.map((element) => {
                                  if (element.key === "productDescription") {
                                    return element.value;
                                  }
                                })} */}
                                Sitewide Savings: up to 50% off + extra 20% off
                                £50+ purchase!
                              </p>
                            </div>
                            {/* <Row key="time" className="featured_offer_action ">
                                    <span>{item.time}</span>
                                </Row> */}
                            <Button
                              type="primary"
                              className="px-5"
                              onClick={() =>
                                navigate(`/brand?id=${item.merchantId}`, {
                                  state: {
                                    totalCashback: "NA",
                                    description: "NA",
                                    ids: item.merchantId,
                                  },
                                })
                              }
                            >
                              GO TO SITE
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            )}

            {getMerachandData && getMerachandData.length <= 0 && (
              <h4>No Search Found !</h4>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}
