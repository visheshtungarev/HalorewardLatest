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

  const handleOnChange = async (key) => {
  

    let response = await fetch(
      "https://customers-service.dxxrewards.click/api/customers/18/brands/1",
      {
        method:"put",
        body:"",
        headers:{
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIxOFBWV1JRdFMzOVdoVFdxa0dWSUd0SUVRcWJIZWJESXlTOTI0dXFtMC1rIn0.eyJleHAiOjE2NTYwMzU2MzYsImlhdCI6MTY1NjAwNjgzNiwianRpIjoiY2VhZDYwNDItOTFiYy00Y2RhLTk0OWQtZWUwMDAwZmQ3MjE1IiwiaXNzIjoiaHR0cDovLzU0LjgzLjI4LjEwNDo4MDgwL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6WyJtYXN0ZXItcmVhbG0iLCJhY2NvdW50Il0sInN1YiI6ImQ4NjVkZGViLTcyZTMtNDQ1YS1iMTA5LTQ4NGNlMzA5YTUyYyIsInR5cCI6IkJlYXJlciIsImF6cCI6InN6ZWxscy1zZXJ2ZXIiLCJzZXNzaW9uX3N0YXRlIjoiOWQzMDk2OTMtZDBiNC00YjkyLWIyYzctMDAzNjczYTU0YzU0IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJjcmVhdGUtcmVhbG0iLCJkZWZhdWx0LXJvbGVzLW1hc3RlciIsIm9mZmxpbmVfYWNjZXNzIiwiYWRtaW4iLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7Im1hc3Rlci1yZWFsbSI6eyJyb2xlcyI6WyJ2aWV3LXJlYWxtIiwidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJtYW5hZ2UtaWRlbnRpdHktcHJvdmlkZXJzIiwiaW1wZXJzb25hdGlvbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiOWQzMDk2OTMtZDBiNC00YjkyLWIyYzctMDAzNjczYTU0YzU0IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImhhbG9yZXdhcmRzQHRlc3QuY29tIn0.HZr7Vd3rq-N6mWNbfVvfIbZpb9dv8EB21qqXHZ0PcP5V2-GqNQOTVinEHzfcd_rLhOWJ98e9z42tDvYm9-S4zKeG1Hi0ozBYXVCl9r06qtlXc6GoXTOAPTTsxldNTmfceuy4z3RfB2rr2XBRx8616PRYnq1Aoooqc3cDAKqjad6KmuFNjMOqG4IyPIp1oIT_LiqFfcqpTXjnGsQDccuoLxJ0_FRqJd2q9SOEwA48e7PalA785TWvytDIAF1UCE_MZ97VTsNrMC2F06zJ6nwE4Vq0KneogOibtYbvIMjz1vbLQn6P8_Kv2vn3kSGJ9hcJnFzZNJ6ND2837czWn5JnEg",
          "Content-Length": 0,
          "accepts":"*/*",
          "Accept-Encoding":"gzip, deflate, br"
        }
      }
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log("response", response);
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
                            <img
                              src={`data:image/png;base64,${element.merchantLogo1}`}
                              className="logoimg"
                            />
                            {/* <h5>{element.merchantName}</h5> */}
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