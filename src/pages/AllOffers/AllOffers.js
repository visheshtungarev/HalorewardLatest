import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import PopularOffers from "../../components/PopularOffers/PopularOffers";
import { CreditCardOutlined } from "@ant-design/icons";
import Breadcurms from "../../components/Breadcrums/Breadcurms";
import { Row, Col, Select } from "antd";
// import Badge from "../../components/Badge/Badge";
import SideBar from "../../components/Sidebar/SideBar";
// import { Post_call } from '../../network/networkmanager';
// import env from '../../enviroment';
import { getOfferAction } from "../../actions/getOfferAction";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../actions/CategoryAction";
import { helperFunction } from "../../Helpers/helperFunction";
const allTredingOffers = [
  {
    image: "/Images/flipkart.png",
    title: "Flipkart",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/flipkart.png",
    title: "Flipkart",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/flipkart.png",
    title: "Flipkart",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    modeIcon: <CreditCardOutlined />,
    modeType: "oncard",
    modeText: "ON CARD",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
  },
];

// const sidebarData = [
//   {
//     title: "Accessories",
//     link: "",
//   },
//   {
//     title: "Auto & Tires",
//     link: "",
//   },
//   {
//     title: "Baby & Kids Gear",
//     link: "",
//   },
//   {
//     title: "Books & Media",
//     link: "",
//   },
//   {
//     title: "Clothing",
//     link: "",
//   },
//   {
//     title: "Electronics",
//     link: "",
//   },
//   {
//     title: "Events & Activities",
//     link: "",
//   },
//   {
//     title: "Flowers & Florists",
//     link: "",
//   },
//   {
//     title: "Food & Restaurants",
//     link: "",
//   },
//   {
//     title: "Gifts & Occasions",
//     link: "",
//   },
//   {
//     title: "Pet Supplies",
//     link: "",
//   },
//   {
//     title: "Books & Media",
//     link: "",
//   },
//   {
//     title: "Food & Restaurants",
//     link: "",
//   },
//   {
//     title: "Gifts & Occasions",
//     link: "",
//   },
//   {
//     title: "Health & Beauty",
//     link: "",
//   },
//   {
//     title: "Events & Activities",
//     link: "",
//   },
// ];

// const values = env();
// const { getCategoriesByClientID } = values;

export default function AllOffers() {
  const [dataArr] = useState(allTredingOffers);

  // const [sideMenuItems] = useState(sidebarData);
  const [openSidePanel, setOpenSidePanel] = useState(false);
  const [offerData, setOfferData] = useState([]);
  const dispatch = useDispatch();

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
      setOfferData(data);
    });
  }, []);

  const filterHandler = (id) => {
    console.log("id ,,,", id);
    let array = [];
    array.push(id);
    helperFunction.getFilterDataList(
      offerData?.products?.products,
      [{ key: "productId", value: array }],
      callbackFunc
    );
  };

  function callbackFunc(dataArr) {
    console.log("dataArr ....", dataArr);
    return dataArr;
  }

  // console.log("sideMenuItems.....", sideMenuItems);

  const categoryList = useSelector((state) => state.auth.all_category);

  console.log("dataArr ...", dataArr);

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
              pageName: "All Offers",
              pageLink: "/all-offers",
            },
          ]}
        />
      </Row>

      {/* <div className="list_view">
        <Heading
          HeadingText="Trending"
          actionText="View All"
          actionLink="/Trending-offers"
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
                    <p>{item.content}</p>
                  </>
                </Card>
              </Col>
            ))}
        </Row>
      </div> */}
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
            {categoryList ? (
              <SideBar
                closePanel={() => closeSidebar()}
                type="checklist"
                mainTitle="Filter"
                data={categoryList?.data}
                filterPanel={(id) => filterHandler(id)}
              />
            ) : (
              ""
            )}
          </Col>
          <Col span={24} lg={{ span: 18 }}>
            <PopularOffers offerData={offerData} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
