import React, { useEffect, useState } from "react";
import "../index.css";
import { Col, Row, Card, Button } from "antd";
import Heading from "../../../components/Heading/Heading";
import Breadcurms from "../../../components/Breadcrums/Breadcurms";
import ModalComp from "../../../components/Modals/ModalComp";
import env from "../../../enviroment";
import { Delete_call, Put_call } from "../../../network/networkmanager";
import { getOfferAction } from "../../../actions/getOfferAction";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CutomerInfoCall,
  getProductfavCall,
} from "../../../actions/favouriteCall";

const values = env();
const { customerAuth } = values;

// customerAuth

export default function PickingFavoriteProduct() {
  const [, setOpenSidePanel] = useState(false);
  const [productList, setProductList] = useState([]);
  const [favProductList, setFavProductList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 993) {
      setOpenSidePanel(true);
    }
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const getCustomer = useSelector((state) => state.auth.user);
  const customerId = getCustomer?.customer?._id;

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
    let customerresult = CutomerInfoCall(customerId);
    customerresult.then((res) => {
      console.log("Res ...", res?.customer?.products);
      // setCustomerBrandList(res?.customer?.brands || [])
      let productResponse = getProductfavCall(res?.customer?.products);
      // console.log("productResponse ....", productResponse);
      productResponse.then((result) => {
        setFavProductList(result || []);
      });
    });
  }, []);

  useEffect(() => {
    let offerResult = getOfferAction();
    offerResult.then((data) => {
      data?.products?.products.map((item) => {
        item["isChecked"] = false;
      });
      setProductList(data?.products?.products);
    });
  }, [favProductList]);

  const handleOnChange = async (key, id, isFav) => {
    if (isFav) {
      try {
        let response = await Delete_call(`${customerAuth}/18/products/${id}`);
        if (response.status === 202) {
          let array = [...productList];
          array.filter((item, k) => {
            if (key === k) {
              item.isChecked = false;
            }
          });
          setProductList(array);
          let customerresult = CutomerInfoCall(customerId);
          customerresult.then((res) => {
            // setCustomerBrandList(res?.customer?.brands || [])
            let productResponse = getProductfavCall(res?.customer?.products);
            productResponse.then((result) => {
              setFavProductList(result || []);
            });
          });
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    } else {
      try {
        let response = await Put_call(
          `${customerAuth}/${customerId}/products/${id}`
        );
        if (response.status === 202) {
          let array = [...productList];
          array.filter((item, k) => {
            if (key === k) {
              item.isChecked = true;
            }
          });
          setProductList(array);

          let customerresult = CutomerInfoCall(customerId);
          customerresult.then((res) => {
            // setCustomerBrandList(res?.customer?.brands || [])
            let productResponse = getProductfavCall(res?.customer?.products);
            productResponse.then((result) => {
              setFavProductList(result || []);
            });
          });
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  };

  // function getNoPick() {
  //   let isNoPick = true;
  //   productList &&
  //     productList.length > 0 &&
  //     productList.find((item) => {
  //       if (item.isChecked) {
  //         isNoPick = false;
  //       }
  //     });
  //   return isNoPick;
  // }
  // const isNoPickResult = getNoPick();

  const removePickhandler = async (key, id) => {
    try {
      let response = await Delete_call(
        `${customerAuth}/${customerId}/products/${id}`
      );
      if (response.status === 202) {
        let array = [...productList];
        array.filter((item, k) => {
          if (key === k) {
            item.isChecked = false;
          }
        });
        setProductList(array);

        let customerresult = CutomerInfoCall(customerId);
        customerresult.then((res) => {
          // setCustomerBrandList(res?.customer?.brands || [])
          let productResponse = getProductfavCall(res?.customer?.products);
          productResponse.then((result) => {
            setFavProductList(result || []);
          });
        });
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  console.log(favProductList);

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
                onClick={() => navigate("/saved")}
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
              pageName: "Favorite Offers ",
              pageLink: "/all-offers ",
            },
          ]}
        />
        <Heading
          HeadingText={"Pick your favorite Offers"}
          subHeading={"Select atleast 3 Offers"}
          filter={
            favProductList &&
            favProductList.length > 0 && (
              <Button
                type="primary"
                onClick={() => showModal()}
                className="w-100"
                size="large"
              >
                Save
              </Button>
            )
          }
        />
        <Row justify="space-around" gutter={20}>
          <Col span={24} lg={{ span: 6 }}>
            <Card className="deals_container popularOffers rounded1">
              <h5 className="fw-bold mb-0">Your Picks</h5>

              {/* shows when you haven’t selected any brand ============*/}
              {favProductList && favProductList.length <= 0 && (
                <div className="text-center my-4">
                  <img src="/Images/no_coupon.svg" height={150} />
                  <p>You haven’t selected any Offers.</p>
                </div>
              )}

              {/* shows when you haven’t selected any brand ============*/}

              {favProductList && favProductList.length > 0 && (
                <Row>
                  {productList.map((element, id) => {
                    console.log(element);
                    return (
                      <Col key={id} span={8} className="p-3">
                        <div className="selectedBrands">
                          <span onClick={() => removePickhandler(id, 1)}>
                            <img
                              src="/Images/close.svg"
                              className="crossicon"
                              height={20}
                            />
                          </span>
                          {/* <img src="/Images/nykaa.png" className="logoimg" /> */}
                          <h5>Offer {id + 1}</h5>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              )}
            </Card>
          </Col>
          <Col span={24} lg={{ span: 18 }}>
            <Card className="deals_container popularOffers rounded1 px-md-4 ">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-0">Offers</h5>
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
                {productList &&
                  productList.length > 0 &&
                  productList.map((item, key) => {
                    return (
                      <li key={key} className="d-flex align-items-center py-3">
                        <div className="d-flex align-items-center flex-grow-1">
                          <div>
                            <img
                              src="/Images/logo.png"
                              className="dealicon_img_frame_sm"
                            />
                          </div>
                          <h5 className="pl-3">Nikey</h5>
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
                              onChange={() => handleOnChange(key, 1)}
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
