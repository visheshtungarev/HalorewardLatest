import React from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
export default function SideBar({
  type,
  mainTitle,
  subTitle,
  data,
  closePanel,
  devider,
  filterPanel,
}) {
  return (
    <Row className={mainTitle}>
      <Col className="  overflow-hidden featuredOffers mb-4" span={24}>
        <Card className="deals_container popularOffers rounded1">
          {mainTitle ? (
            <>
              <div className="d-flex">
                <h5 className="fw-bold mb-1 flex-grow-1">{mainTitle}</h5>
                <span onClick={() => closePanel()} className="closeBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                    />
                  </svg>
                </span>
              </div>
              <hr />
            </>
          ) : (
            ""
          )}

          {type === "list" ? (
            <ul className={devider ? "sideMenu devider" : "sideMenu"}>
              {data &&
                data.map((item, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => filterPanel(item.categoryId, item.name)}
                    >
                      <a
                        className={item.isActive ? "activethis" : ""}
                        href="javascript:void(0)"
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
            </ul>
          ) : type === "checklist" ? (
            <ul className="sideMenu">
              <li>
                <Link to="">{subTitle}</Link>
              </li>
              {data &&
                data.map((item, i) => {
                  return (
                    <li key={i} className="pl-2">
                      <label className="customCheckbox">
                        <input type="checkbox" /> {item.name}
                      </label>
                    </li>
                  );
                })}
            </ul>
          ) : type === "radiolist" ? (
            <ul className="sideMenu">
              <li>
                <Link to="">{subTitle}</Link>
              </li>
              {data &&
                data.map((item, i) => {
                  <li className="pl-2" key={i}>
                    <label className="customCheckbox">
                      <input type="radio" />
                      {item.title}
                    </label>
                  </li>;
                })}
            </ul>
          ) : (
            ""
          )}
        </Card>
      </Col>
    </Row>
  );
}
