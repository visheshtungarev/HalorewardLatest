import React from "react";
import { Row, Col, Card } from "antd";

import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { brandSearchAction } from "../../actions/brandAction";
export default function SearchResult({
  getSearchData,
  value,
  setValue,
  currentUrl,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = () => {
    if (currentUrl) {
      dispatch(brandSearchAction(value, "enter"));
      setValue("");
    } else {
      dispatch(brandSearchAction(value, "enter"));
      setValue("");
      navigate(`/search-offers/${value}`);
    }
  };

  return (
    <div className="searchSection">
      {/* ============search Results============ */}
      <div className="recentSearch" style={{ display: "none" }}>
        <h5 className="fw-bold mb-3">
          Results with ‘Tar’ &nbsp;{" "}
          <Link className="small" to="">
            See all results <img src="Images/arrow_next_blue.svg" height={10} />
          </Link>
        </h5>
        <Row gutter={15}>
          <Col lg={{ span: 12 }} className="mb-3">
            <Card className="searchedResult">
              <div className="Brandlogo">
                <img src="Images/myntra.png" height={50} />
              </div>
              <div className="flex-grow-1 pl-3">
                <div className="d-flex">
                  <h5 className="flex-grow-1">Nike</h5>
                </div>
                <p className="mb-0">
                  upto 70% cashback, 4 coupons, 2 Prize Draws
                </p>
              </div>
            </Card>
          </Col>
          <Col lg={{ span: 12 }} className="mb-3">
            <Card className="searchedResult">
              <div className="Brandlogo">
                <img src="Images/myntra.png" height={50} />
              </div>
              <div className="flex-grow-1 pl-3">
                <div className="d-flex">
                  <h5 className="flex-grow-1">Nike</h5>
                </div>
                <p className="mb-0">
                  upto 70% cashback, 4 coupons, 2 Prize Draws
                </p>
              </div>
            </Card>
          </Col>
          <Col lg={{ span: 12 }} className="mb-3">
            <Card className="searchedResult">
              <div className="Brandlogo">
                <img src="Images/myntra.png" height={50} />
              </div>
              <div className="flex-grow-1 pl-3">
                <div className="d-flex">
                  <h5 className="flex-grow-1">Nike</h5>
                </div>
                <p className="mb-0">
                  upto 70% cashback, 4 coupons, 2 Prize Draws
                </p>
              </div>
            </Card>
          </Col>
          <Col lg={{ span: 12 }} className="mb-3">
            <Card className="searchedResult">
              <div className="Brandlogo">
                <img src="Images/myntra.png" height={50} />
              </div>
              <div className="flex-grow-1 pl-3">
                <div className="d-flex">
                  <h5 className="flex-grow-1">Nike</h5>
                </div>
                <p className="mb-0">
                  upto 70% cashback, 4 coupons, 2 Prize Draws
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      {/* ============search Results============ */}

      {/* ============recent search Results============ */}

      <div className="recentSearch">
        {value && getSearchData && getSearchData.length > 0 && (
          <div className="d-flex mb-3 align-items-center">
            <h5 className="fw-bold mb-0 mr-3">Results with {`'${value}'`}</h5>
            <a
              href="javascript:void(0)"
              onClick={() => searchHandler()}
              style={{ fontSize: "13px", fontWeight: "500" }}
            >
              {" "}
              See all results &nbsp; <img src="/Images/arrow_next.svg" />{" "}
            </a>
          </div>
        )}
        {getSearchData && getSearchData.length > 0 && (
          <Row gutter={15}>
            {getSearchData &&
              getSearchData.length > 0 &&
              getSearchData.map((element, key) => {
                return (
                  <Col key={key} lg={{ span: 12 }} className="mb-3">
                    <Link
                      to={`/brand?id=${element.merchantId}`}
                      state={{
                        totalCashback: "",
                        description: "",
                        ids: element.merchantId,
                      }}
                      onClick={() => setValue("")}
                    >
                      <Card className="searchedResult">
                        <div className="Brandlogo">
                          <img src="/Images/myntra.png" height={50} />
                        </div>
                        <div className="flex-grow-1 pl-3">
                          <div className="d-flex">
                            <h5 className="flex-grow-1">
                              {element.merchantName}
                            </h5>
                            <img src="/Images/arrow_up_.svg" height={15} />
                          </div>
                          <p className="mb-0">
                            upto 70% cashback, 4 coupons, 2 Prize Draws
                          </p>
                        </div>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
          </Row>
        )}
        {getSearchData && getSearchData.length <= 0 && (
          <p>No results found for {`'${value}'`}</p>
        )}
      </div>

      {/* ============recent search Results============ */}

      {/* ============trending search Results============ */}
      {/* <div className="searchContainer" style={{ background: "#F7F7F7" }}>
        <h5 className="fw-bold my-3">Trending searches</h5>
        <Row gutter={15}>
          <Col lg={{ span: 12 }} className="mb-3">
            <Card className="searchedResult">
              <div className="Brandlogo">
                <img src="Images/myntra.png" height={50} />
              </div>
              <div className="flex-grow-1 pl-3">
                <div className="d-flex">
                  <h5 className="flex-grow-1">Nike</h5>
                  <img src="Images/arrow_up_.svg" height={15} />
                </div>
                <p className="mb-0">
                  upto 70% cashback, 4 coupons, 2 Prize Draws
                </p>
              </div>
            </Card>
          </Col>
          <Col lg={{ span: 12 }} className="mb-3">
            <Card className="searchedResult">
              <div className="Brandlogo">
                <img src="Images/myntra.png" height={50} />
              </div>
              <div className="flex-grow-1 pl-3">
                <div className="d-flex">
                  <h5 className="flex-grow-1">Nike</h5>
                  <img src="Images/arrow_up_.svg" height={15} />
                </div>
                <p className="mb-0">
                  upto 70% cashback, 4 coupons, 2 Prize Draws
                </p>
              </div>
            </Card>
          </Col>
          <Col lg={{ span: 12 }} className="mb-3">
            <Card className="searchedResult">
              <div className="Brandlogo">
                <img src="Images/myntra.png" height={50} />
              </div>
              <div className="flex-grow-1 pl-3">
                <div className="d-flex">
                  <h5 className="flex-grow-1">Nike</h5>
                  <img src="Images/arrow_up_.svg" height={15} />
                </div>
                <p className="mb-0">
                  upto 70% cashback, 4 coupons, 2 Prize Draws
                </p>
              </div>
            </Card>
          </Col>
          <Col lg={{ span: 12 }} className="mb-3">
            <Card className="searchedResult">
              <div className="Brandlogo">
                <img src="Images/myntra.png" height={50} />
              </div>
              <div className="flex-grow-1 pl-3">
                <div className="d-flex">
                  <h5 className="flex-grow-1">Nike</h5>
                  <img src="Images/arrow_up_.svg" height={15} />
                </div>
                <p className="mb-0">
                  upto 70% cashback, 4 coupons, 2 Prize Draws
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div> */}
      {/* ============trending search Results============ */}
    </div>
  );
}
