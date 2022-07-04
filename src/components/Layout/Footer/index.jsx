import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form } from "antd";
import "./index.css";

export const Index = () => {
  return (
    <footer>
      <div className="list_view themeBg mt-0 pt-4">
        <Row className="mt-4">
          <Col md={6} className="px-md-5 visibledesktop">
            <h5 className="text-white">Download our app</h5>

            <Form className="mt-4">
              <div className="customInputGroup">
                <span className="countryCode">(+44)</span>
                <input type="text" placeholder="Enter mobile phone number" />
                <button>
                  <img src="/Images/arrow_next.svg" height={15} />
                </button>
              </div>
            </Form>

            <Row gutter={10} className="mt-4">
              <Col span={10} className="px-2">
                <img src="/Images/gplay.png" className="w-100" />
              </Col>
              <Col span={10} className="px-2">
                <img src="/Images/appstore.png" className="w-100" />
              </Col>
            </Row>
          </Col>
          <Col md={18} xs={24}>
            <Row>
              <Col md={6} xs={12}>
                <p className="text-yellow">About</p>
                <ul>
                  <li>
                    <Link to="#">Hallo Rewards</Link>
                  </li>
                  <li>
                    <Link to="#">Getting Started</Link>
                  </li>
                  <li>
                    <Link to="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Cookie Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Help & Support</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                </ul>
              </Col>
              <Col md={6} xs={12}>
                <p className="text-yellow">Know more </p>
                <ul>
                  <li>
                    <Link to="#">Receiving Cashback</Link>
                  </li>
                  <li>
                    <Link to="#">Redeeming Coupons</Link>
                  </li>
                  <li>
                    <Link to="#">Winning Prize Draws</Link>
                  </li>
                  <li>
                    <Link to="#">In-Store Cashback</Link>
                  </li>
                  <li>
                    <Link to="#">In-Store Coupons</Link>
                  </li>
                </ul>
              </Col>
              <Col md={6} xs={12}>
                <p className="text-yellow">Rewards</p>
                <ul>
                  <li>
                    <Link to="#">Cashback</Link>
                  </li>
                  <li>
                    <Link to="#">Coupons</Link>
                  </li>
                  <li>
                    <Link to="#">Prize Draws</Link>
                  </li>
                  <li>
                    <Link to="#">Prize Draws</Link>
                  </li>
                </ul>
              </Col>
              <Col md={6} xs={12}>
                <p className="text-yellow">Categories</p>
                <ul>
                  <li>
                    <Link to="#">Clothing</Link>
                  </li>
                  <li>
                    <Link to="#">Electronics</Link>
                  </li>
                  <li>
                    <Link to="#">Travel</Link>
                  </li>
                  <li>
                    <Link to="#">Health & Beauty</Link>
                  </li>
                  <li>
                    <Link to="#">Accessories</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={6} xs={24} className="px-md-5 visiblemobile">
            <h5 className="text-white">Download our app</h5>

            <Form className="mt-4">
              <div className="customInputGroup">
                <span className="countryCode">(+44)</span>
                <input type="text" placeholder="Enter mobile phone number" />
                <button>
                  <img src="/Images/arrow_next.svg" height={15} />
                </button>
              </div>
            </Form>

            <Row gutter={10} className="mt-4">
              <Col span={10} className="px-2">
                <img src="/Images/gplay.png" className="w-100" />
              </Col>
              <Col span={10} className="px-2">
                <img src="/Images/appstore.png" className="w-100" />
              </Col>
            </Row>
          </Col>
          <Col md={18} xs={24} className="mt-5">
            <Row>
              <Link to="#" className="fw-bold text-white mr-5">
                Advertising Disclosure
              </Link>
              <p className="text-white mb-0">
                © 2021 Ebates Performance Marketing Inc., d/b/a HalloRewards
              </p>
            </Row>
          </Col>
          <Col md={6} xs={24} className="mt-5 text-md-right text-center">
            <Link to="#" className="ml-3">
              <img src="/Images/facebook.png" />
            </Link>
            <Link to="#" className="ml-3">
              <img src="/Images/instagram.png" />
            </Link>
            <Link to="#" className="ml-3">
              <img src="/Images/youtube.png" />
            </Link>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Index;
