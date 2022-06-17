import React, { useEffect, useState } from "react";
import "./index.css";
import { Col, Row, Card, Button } from "antd";
import Heading from "../../../components/Heading/Heading";
import Breadcurms from "../../../components/Breadcrums/Breadcurms";
import ModalComp from "../../../components/Modals/ModalComp";
import env from "../../../enviroment";
import { Post_call } from "../../../network/networkmanager";

// import {
//     GlobalOutlined,
//     CopyOutlined,
//     ShopOutlined,
//     ShoppingOutlined
// } from "@ant-design/icons";
// import { FiClock } from 'react-icons/fi'
// import Heading from "../../../components/Heading/Heading";

const values = env();
const { getCategoriesByClientID } = values;

// customerAuth

export default function PickingFavoriteBrand() {
  const [, setOpenSidePanel] = useState(false);
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 993) {
      setOpenSidePanel(true);
    }
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    getBrandList();
  }, []);

  // const pickBrandHandler = async (id) => {
  // var myHeaders = new Headers();
  //  myHeaders.append("Cookie", "JSESSIONID=199836D58E8CA1C695724471E76FDBF5");

  //   var requestOptions = {
  //     method: "PATCH",
  //  //   headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     `http://customers-service.dxxrewards.click/api/customers/18/brands/${id}`,
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));

  // try {
  //   let response = await Patch_call(`${customerAuth}18/brands/${id}`, false);
  //   if (response.status === 200) {
  //     //   setBrandList(response.data);
  //     console.log(response);
  //   }
  // } catch (error) {
  //   console.error(error);
  //   throw error;
  // }
  // };

  const getBrandList = async () => {
    var raw =
      "{\n    brands(siteId: 1) {\n        merchantId\n        merchantRank\n        merchantName\n        status\n        onCard\n        provider\n        modifiedDate\n        customerRebate\n        merchantLogo1\n        merchantUrl\n        categories {\n            categoryId\n            name\n        }\n        contentTypes {\n            name\n            size\n        }\n    }\n}\n\n";
    try {
      let response = await Post_call(
        `${getCategoriesByClientID}/clients/1/brands`,
        raw,
        false
      );
      if (response.status === 200) {
        response.data.map((item) => {
          item["isChecked"] = false;
        });
        setBrandList(response.data);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleOnChange = (key) => {
    // const { checked } = e.target;
    let array = [...brandList];
    array.filter((item, k) => {
      if (key === k) {
        item.isChecked = !item.isChecked;
      }
    });
    setBrandList(array);
    getNoPick();
  };

  function getNoPick() {
    let isNoPick = true;
    brandList &&
      brandList.length > 0 &&
      brandList.find((item) => {
        if (item.isChecked) {
          isNoPick = false;
        }
      });
    return isNoPick;
  }
  const isNoPickResult = getNoPick();

  return (
    <div className="home_container">
      <ModalComp
        // modalTitle={'/Images/'}
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        ModalContent={
          <div className="px-md-5 px-3">
            <div className="text-center">
              <img className="my-4" src="/Images/thankyou.svg" height="150" />
              <h5 className="fw-bold purpleText">Thankyou!</h5>
              <h6 style={{ fontWeight: 300 }} className="text-muted mt-3">
                All your selected brands are saved sucessfully.
              </h6>
              <Button
                type="primary"
                onClick={() => showModal()}
                className="w-100 mt-3"
                size="large"
              >
                Done
              </Button>
            </div>
          </div>
        }
      />

      <div className="list_view">
        <Breadcurms
          data={[
            {
              pageName: "Saved",
              pageLink: "/saved",
            },
            {
              pageName: "Favorite Brands ",
              pageLink: "/favorite-brands ",
            },
          ]}
        />
        <Heading
          HeadingText={"Pick your favorite brands"}
          subHeading={"Select atleast 3 brands/merchants"}
          filter={
            <Button
              type="primary"
              onClick={() => showModal()}
              className="w-100"
              size="large"
            >
              Save
            </Button>
          }
        />
        <Row justify="space-around" gutter={20}>
          <Col span={24} lg={{ span: 6 }}>
            <Card className="deals_container popularOffers rounded1">
              <h5 className="fw-bold mb-0">Your Picks</h5>

              {/* shows when you haven’t selected any brand ============*/}
              {isNoPickResult && (
                <div className="text-center my-4">
                  <img src="/Images/no_coupon.svg" height={150} />
                  <p>You haven’t selected any brand.</p>
                </div>
              )}

              {/* shows when you haven’t selected any brand ============*/}

              {brandList && brandList.length > 0 && (
                <Row>
                  {brandList.map((element, id) => {
                    if (element.isChecked) {
                      return (
                        <Col key={id} span={8} className="p-3">
                          <div className="selectedBrands">
                            <span onClick={() => handleOnChange(id)}>
                              <img
                                src="/images/close.svg"
                                className="crossicon"
                                height={20}
                              />
                            </span>
                            {/* <img
                              src="/images/logo (3).png"
                              className="logoimg"
                            /> */}
                            <h5>{element.merchantName}</h5>
                          </div>
                        </Col>
                      );
                    }
                  })}
                </Row>
              )}
            </Card>
          </Col>
          <Col span={24} lg={{ span: 18 }}>
            <Card className="deals_container popularOffers rounded1 px-md-4 ">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0">Brands</h5>
                {/* <div className="searchBar">
                  <img
                    src="/Images/search.svg"
                    height={20}
                    className="searchIcon"
                  />
                  <input type="text" placeholder="Search for a brand" />
                </div> */}
              </div>

              <ul className="sideMenu devider">
                {brandList &&
                  brandList.length > 0 &&
                  brandList.map((item, key) => {
                    return (
                      <li key={key} className="d-flex align-items-center py-3">
                        <div className="d-flex align-items-center flex-grow-1">
                          <div>
                            <img
                              src="/images/logo.png"
                              className="dealicon_img_frame_sm"
                            />
                          </div>
                          <h5 className="pl-3">{item.merchantName}</h5>
                        </div>
                        <div>
                          <span
                            className="favoriteBtn"
                            // onClick={() => pickBrandHandler(item.merchantId)}
                          >
                            <input
                              name="makeFav"
                              type="checkbox"
                              checked={item.isChecked}
                              onChange={() => handleOnChange(key)}
                            />
                            <span className="checkimg"></span>
                          </span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
