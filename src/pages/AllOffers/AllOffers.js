import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import PopularOffers from "../../components/PopularOffers/PopularOffers";

import Breadcurms from "../../components/Breadcrums/Breadcurms";
import { Row, Col, Select } from "antd";
import SideBar from "../../components/Sidebar/SideBar";
import { getOfferAction } from "../../actions/getOfferAction";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../actions/CategoryAction";
import { useNavigate } from "react-router-dom";

export default function AllOffers() {
  const categoryList = useSelector((state) => state.auth.all_category);
  const [openSidePanel, setOpenSidePanel] = useState(false);
  const [offerData, setOfferData] = useState([]);
  const [merchantId, setMerchantId] = useState(1);
  const [categoryListing, setCategoryListing] = useState([]);

  const [filterArrayCategory, setFilterArrayCategory] = useState([]);

  const [offerObject, setOfferObject] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Option } = Select;
  const closeSidebar = () => {
    !openSidePanel ? setOpenSidePanel(true) : setOpenSidePanel(false);
  };
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 993) {
      setOpenSidePanel(true);
    }
    dispatch(getCategoryAction);
    let offerResult = getOfferAction();
    offerResult.then((data) => {
      setMerchantId(data.products?.merchantId ? data.products?.merchantId : 1);
      setOfferObject(data);
      if (data.products?.products.length > 0) {
        setOfferData(data.products.products);
      } else {
        setOfferData([]);
      }
    });

    if (categoryList && categoryList?.data && categoryList.data.length > 0) {
      setCategoryListing(categoryList?.data || []);
    }
  }, []);

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
              pageName: "All Offers",
              pageLink: "/all-offers"
            }
          ]}
        />
      </Row>

      <div className="list_view">
        <Heading
          HeadingText="All Offers"
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
            {categoryListing ? (
              <SideBar
                closePanel={() => closeSidebar()}
                type="checklist"
                mainTitle="Filter"
                data={categoryListing}
                filterPanel={(categoryId) => {
                  const fac = [...filterArrayCategory];
                  if (!fac.includes(categoryId)) {
                    fac.push(categoryId);
                  } else {
                    fac.splice(fac.indexOf(categoryId), 1);
                  }
                  setFilterArrayCategory(fac);
                }}
              />
            ) : (
              ""
            )}
          </Col>
          <Col span={24} lg={{ span: 18 }}>
            <PopularOffers
              merchantId={merchantId}
              filterArrayCategory={filterArrayCategory}
              offerData={offerData}
              offerObject={offerObject}
              navigate={navigate}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
