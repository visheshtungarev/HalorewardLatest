import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import { Col, Row, Card, Select } from "antd";
// import PopularOffers from "../../components/PopularOffers/PopularOffers";
import Breadcurms from "../../components/Breadcrums/Breadcurms";
import env from "../../enviroment";
// import {
//   CreditCardOutlined
//   // ShopOutlined,
//   // ShoppingOutlined
// } from "@ant-design/icons";
import Badge from "../../components/Badge/Badge";
import Heading from "../../components/Heading/Heading";
import SideBar from "../../components/Sidebar/SideBar";
import { Post_call } from "../../network/networkmanager";
import { useDispatch, useSelector } from "react-redux";
import { resetMerchantAction } from "../../actions/brandAction";
import { singleConstant } from "../../Constants/HomeConstant";
import { getCategoryAction } from "../../actions/CategoryAction";
// import { brandListAction } from "../../actions/brandAction";
// import actions from "../../actions";
// import { render } from "@testing-library/react";
// const { Meta } = Card;

const values = env();
const { getCategoriesByClientID } = values;

const AllBrands = () => {
  const { Option } = Select;
  const getMerachandData = useSelector((state) => state.auth?.all_brand);
  // const [dataArr] = useState(allTredingBrands);
  const [openSidePanel, setOpenSidePanel] = useState(false);
  // const [brandBoolean, setBrandBoolean] = useState(false);
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [, setMerchantList] = useState([]);
  const [trendingCarousel, setTrendingCarousel] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const getToggle = useSelector((state) => state.auth);

  const { state } = useLocation();
  let categoryId = state?.id;

  const closeSidebar = () => {
    !openSidePanel ? setOpenSidePanel(true) : setOpenSidePanel(false);
  };

  const carouselState = useSelector((state) => state.auth.carousel);

  useEffect(() => {
    getCarouseItem();
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
    if (window.innerWidth > 993) {
      setOpenSidePanel(true);
    }
    dispatch(getCategoryAction);
    // getCategoryList();
    getBrandList(categoryId || null);
    setMerchantList(getMerachandData);
  }, []);

  useEffect(() => {
    getBrandList(categoryId || null);
  }, [getMerachandData, categoryId]);

  const categorylist = useSelector((state) => state.auth.all_category);

  useEffect(() => {
    let objCategory = [{ name: "All" }];
    categorylist?.data &&
      categorylist?.data.length > 0 &&
      categorylist.data.map((item) => {
        if (categoryId) {
          if (categoryId === item.categoryId) {
            item["isActive"] = true;
            return objCategory.push(item);
          } else {
            item["isActive"] = false;
            return objCategory.push(item);
          }
        } else {
          item["isActive"] = false;
          return objCategory.push(item);
        }
      });
    setCategoryData(objCategory);
  }, [categoryId]);

  const getBrandList = async (value) => {
    var raw = `{
      brands(siteId: 1) {
          merchantId
          merchantRank
          shortTitle
          merchantDescription
          merchantName
          status
          onCard
          provider
          modifiedDate
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
        let filterarray = [];
        if (value) {
          response?.data?.forEach((val) => {
            val?.categories &&
              val.categories.filter((itm) => {
                if (itm.categoryId === value) {
                  filterarray.push(val);
                }
              });
          });
        }
        filterarray && filterarray.length > 0
          ? setBrandData(filterarray)
          : setBrandData(response.data);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // const getCategoryList = async () => {
  //   var data =
  //     "{\n    categories(siteId: 1)  {\n        categoryId\n        name\n        description\n        status\n    }\n}";

  //   try {
  //     let response = await Post_call(
  //       `${getCategoriesByClientID}/clients/1/categories`,
  //       data,
  //       false
  //     );
  //     if (response.status === 200) {
  //       let objCategory = [{ name: "All" }];
  //       response?.data?.map((item) => {
  //         return objCategory.push(item);
  //       });
  //       setCategoryData(objCategory);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // };

  const filterHandler = (key, val) => {
    navigate(`/all-brands?category=${val}`, {
      state: {
        id: key
      }
    });
    // let array = [...categoryData];
    // array.filter((item) => {
    //   if (item.categoryId === key) {
    //     item.isActive = true;
    //   } else {
    //     item.isActive = false;
    //   }
    // });
    // setCategoryData(array);
    // // setMerchantList([])
    dispatch(resetMerchantAction);
    // getBrandList(key);

    // dispatch(brandListAction(key))
  };

  return (
    <div className="home_container">
      <Row align="middle" className="list_view mb-0 pb-0">
        <Breadcurms
          data={[
            {
              pageName: "Categories",
              pageLink: "/categories"
            },
            {
              pageName: "All Brands",
              pageLink: "/all-brands"
            }
          ]}
        />
      </Row>

      <div className="list_view">
        <Heading
          HeadingText="Trending Brands"
          actionText="View All"
          actionLink="/list?=trending-brand"
          type={"trending-brand"}
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
              <Col key={i} className="deals_box trending_brands mb-3 " span={4}>
                <Link
                  to={`/brand?id=${item.merchantId}`}
                  state={{
                    totalCashback: item?.customerRebate,
                    description: trendingCarousel[0]?.description,
                    ids: item?.merchantId,
                    isCard: item?.onCard,
                    brandName: item?.merchantName,
                    brandLogo: item?.merchantLogo1
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

      <div className="list_view">
        {/* {getMerachandData && getMerachandData.length > 0 && (
          <div className="list_title">{getMerachandData.length} </div>
        )} */}
        <Heading
          HeadingText="Brands"
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
          // getMerachandData={getMerachandData}
        />

        <Row justify="space-around" gutter={20}>
          <Col span={24} lg={{ span: 6 }}>
            {openSidePanel ? (
              <SideBar
                closePanel={() => closeSidebar()}
                type="list"
                mainTitle="Filter"
                data={categoryData}
                filterPanel={(k, e) => filterHandler(k, e)}
              />
            ) : (
              ""
            )}
          </Col>
          <Col span={24} lg={{ span: 18 }}>
            <Row align="middle" justify="space-around">
              {Array.isArray(brandData) &&
                brandData.length > 0 &&
                brandData.map((item, i) => {
                  return (
                    <Col
                      key={i}
                      className="  overflow-hidden featuredOffers mb-4"
                      span={24}
                    >
                      <Link
                        to={`/brand?id=${item.merchantId}`}
                        state={{
                          totalCashback: item.shortTitle,
                          description: item.merchantDescription,
                          ids: item.merchantId,
                          isCard: item.onCard,
                          brandName: item?.merchantName,
                          brandLogo: item?.merchantLogo1
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
                                    {item?.contentTypes &&
                                      item?.contentTypes.map((val) => {
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
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AllBrands;
