import React, { useEffect, useState } from "react";
import "./index.css";
import { Card, Col, Row } from "antd";
import SideBar from "../../components/Sidebar/SideBar";

const sidebarData = [
  {
    title: "About Us",
    link: "",
  },
  {
    title: "Terms & Conditions",
    link: "",
  },
  {
    title: "Privacy Policy",
    link: "",
  },
  {
    title: "Cookie Policy",
    link: "",
  },
  {
    title: "Contact Us",
    link: "",
  },
];
export default function About() {
  const [sideMenuItems] = useState(sidebarData);
  const [openSidePanel, setOpenSidePanel] = useState(false);

  const closeSidebar = () => {
    !openSidePanel ? setOpenSidePanel(true) : setOpenSidePanel(false);
  };
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth > 993) {
      setOpenSidePanel(true);
    }
  }, []);
  return (
    <div className="home_container">
      <div className="position-relative">
        <Row
          align="middle"
          className="mb-0 pb-0 brandWall"
          style={{
            background: "#120078",
          }}
        ></Row>
      </div>
      <Row className="list_view brandProfile">
        <Col span={6}>
          <div className="brandImage p-4">
            <img src="/Images/logo.png" alt="img" />
          </div>
          <div className="">
            {openSidePanel ? (
              <SideBar
                devider={true}
                closePanel={() => closeSidebar()}
                type="list"
                data={sideMenuItems}
              />
            ) : (
              ""
            )}
          </div>
        </Col>
        <Col className="brandInfo pl-4" span={18}>
          <h4 className="fw-bold text-white mb-5">About Us</h4>

          <Col
            span={24}
            md={{ span: 24 }}
            className="overflow-hidden featuredOffers mb-4"
          >
            <Card className="deals_container popularOffers rounded1 w-100">
              <Row>
                <Col lg={{ span: 12 }} className="p-md-5 p-3 text-center">
                  <img src="/Images/logo.png" height={90} />
                </Col>
                <Col lg={{ span: 12 }}>
                  <p className="text-muted">
                    Since our founding in 1997, HalloRewards has helped shape
                    the way people shop online, offering Cash Back,deals and
                    shopping rewards on the world’s largest selection of
                    products and services. To date, our 12 million members in
                    the U.S. have earned over $1 billion in Cash Back at their
                    favorite stores.
                  </p>
                </Col>
                <Col span={24} className="text-center my-3">
                  <h5 className="fw-bold">Our Promise</h5>
                  <p className="text-muted">
                    Since our founding in 1997,{" "}
                    <b>we promise to never show you invalid offers</b>, offering
                    Cash Back, deals and shopping rewards on the world’s largest
                    selection of products and services. To date, our 12 million
                    members in the U.S. have earned over $1 billion in Cash Back
                    at their favorite stores.
                  </p>
                </Col>
                <Col span={24} className="text-center mt-5 mb-3">
                  <h5 className="fw-bold text-center">Why us?</h5>
                </Col>
                <Col lg={{ span: 8 }} className="text-center my-3">
                  <span className="greyBox"></span>
                  <h5 className="subheading">Trustworthy</h5>
                  <p className="text-muted">
                    Since our founding in 1997, Rakuten has helped shape the way
                    people shop online, offering Cash Back.
                  </p>
                </Col>
                <Col lg={{ span: 8 }} className="text-center my-3">
                  <span className="greyBox"></span>
                  <h5 className="subheading">Secure</h5>
                  <p className="text-muted">
                    Since our founding in 1997, Rakuten has helped shape the way
                    people shop online, offering Cash Back.
                  </p>
                </Col>
                <Col lg={{ span: 8 }} className="text-center my-3">
                  <span className="greyBox"></span>
                  <h5 className="subheading">Easy</h5>
                  <p className="text-muted">
                    Since our founding in 1997, Rakuten has helped shape the way
                    people shop online, offering Cash Back.
                  </p>
                </Col>

                <Col span={24} className="text-center mt-5 my-3">
                  <span className="greyBox"></span>
                  <h5 className="fw-bold">Key features</h5>
                  <p className="text-muted">
                    Since our founding in 1997, Rakuten has helped shape the way
                    people shop online, offering Cash Back, deals and shopping
                    rewards on the world’s largest selection of products and
                    services. To date, our 12 million members in the U.S. have
                    earned over $1 billion in Cash Back at their favorite
                    stores.
                  </p>
                </Col>

                <Col lg={{ span: 12 }} className="text-center my-3">
                  <span className="greyBox"></span>
                  <h5 className="subheading">Save coupons</h5>
                  <p className="text-muted">
                    Personalise your experience according to what you like.
                  </p>
                </Col>
                <Col lg={{ span: 12 }} className="text-center my-3">
                  <span className="greyBox"></span>
                  <h5 className="subheading">Donnate</h5>
                  <p className="text-muted">
                    We will love to notify you about new offers from your
                    favourite brands
                  </p>
                </Col>
                <Col lg={{ span: 8 }} className="text-center my-3">
                  <span className="greyBox"></span>
                  <h5 className="subheading">Personalize</h5>
                  <p className="text-muted">
                    Personalise your experience according to what you like.
                  </p>
                </Col>
                <Col lg={{ span: 8 }} className="text-center my-3">
                  <span className="greyBox"></span>
                  <h5 className="subheading">Notification</h5>
                  <p className="text-muted">
                    We will love to notify you about new offers from your
                    favourite brands
                  </p>
                </Col>
                <Col lg={{ span: 8 }} className="text-center my-3">
                  <span className="greyBox"></span>
                  <h5 className="subheading">Valid offers only</h5>
                  <p className="text-muted">
                    We will make sure that you will never see an invalid offer
                  </p>
                </Col>

                <Col span={24} className="text-center mt-5 my-3">
                  <h5 className="fw-bold">Top merchants</h5>
                  <Row>
                    <Col lg={{ span: 6 }} className="py-4">
                      <img src="/Images/brands/01.png" className="w-80" />
                    </Col>
                    <Col lg={{ span: 6 }} className="py-4">
                      <img src="/Images/brands/02.png" className="w-80" />
                    </Col>
                    <Col lg={{ span: 6 }} className="py-4">
                      <img src="/Images/brands/03.png" className="w-80" />
                    </Col>
                    <Col lg={{ span: 6 }} className="py-4">
                      <img src="/Images/brands/04.png" className="w-80" />
                    </Col>
                    <Col lg={{ span: 6 }} className="py-4">
                      <img src="/Images/brands/05.png" className="w-80" />
                    </Col>
                    <Col lg={{ span: 6 }} className="py-4">
                      <img src="/Images/brands/06.png" className="w-80" />
                    </Col>
                    <Col lg={{ span: 6 }} className="py-4">
                      <img src="/Images/brands/07.png" className="w-80" />
                    </Col>
                    <Col lg={{ span: 6 }} className="py-4">
                      <img src="/Images/brands/08.png" className="w-80" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Col>
      </Row>
    </div>
  );
}
