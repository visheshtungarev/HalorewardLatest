import React, { useEffect, useState } from "react";
import "./index.css";
import { Row, Tabs } from "antd";

// import Badge from "../../components/Badge/Badge";
import Breadcurms from "../../../components/Breadcrums/Breadcurms";
import Active from "./Active/Active";
import Claimed from "./Claimed/Claimed";
import Expired from "./Expired/Expired";
import { useSelector } from "react-redux";
import {
  CutomerInfoCall,
  getProductfavCall,
} from "../../../actions/favouriteCall";
// import { render } from "@testing-library/react";
// const { Meta } = Card;

export default function SavedCoupon() {
  const [, setOpenSidePanel] = useState(false);
  const [activeListing, setActiveListing] = useState([]);

  const getCustomer = useSelector((state) => state.auth.user);

  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  // const offerResult = useSelector((state) => state.auth.productById);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 993) {
      setOpenSidePanel(true);
    }
    // getSeparateData();
  }, []);

  useEffect(() => {
    let activeArray = [];
    let customerId = getCustomer?.customer?._id;
    let customerresult = CutomerInfoCall(customerId);
    customerresult.then((res) => {
      // setCustomerBrandList(res?.customer?.brands || [])
      let productResponse = getProductfavCall(res?.customer?.products);
      productResponse.then((result) => {
        result.forEach((item) => {
          if (item.status == "Active") {
            activeArray.push(item);
          }
        });
      });
    });
    setActiveListing(activeArray);
  }, [getCustomer]);

  // function getSeparateData() {

  // }

  console.log("activeListing ....", activeListing);

  return (
    <div className="home_container">
      <Row align="middle" className="list_view mb-0 pb-0">
        <Breadcurms
          data={[
            {
              pageName: "Saved",
              pageLink: "/saved",
            },
            {
              pageName: "Coupons",
              pageLink: "/coupons",
            },
          ]}
        />
      </Row>
      <Tabs defaultActiveKey="1" className="whiteTab mt-4" onChange={callback}>
        <TabPane
          tab={
            <div className="d-flex align-items-center py-2">
              <h6 className="mb-0">Active</h6>
            </div>
          }
          key="1"
        >
          <Active activeListing={activeListing} />
        </TabPane>

        <TabPane
          tab={
            <div className="d-flex align-items-center py-2">
              <h6 className="mb-0">Claimed</h6>
            </div>
          }
          key="2"
        >
          <Claimed />
        </TabPane>

        <TabPane
          tab={
            <div className="d-flex align-items-center py-2">
              <h6 className="mb-0">Expired</h6>
            </div>
          }
          key="3"
        >
          <Expired />
        </TabPane>
      </Tabs>
    </div>
  );
}
