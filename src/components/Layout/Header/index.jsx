import React, { useState, useEffect } from "react";
import { Row, Button, Input, Col } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import "./index.css";
import TopMenu from "../../TopMenu/TopMenu";
import Login from "../../Auth/Login";
import ModalComp from "../../Modals/ModalComp";
import SearchResult from "../../SearchResult/SearchResult";
import Register from "../../Auth/Register";
import ForgotPwd from "../../Auth/ForgotPwd";
import SendRequestLink from "../../Auth/SendRequestLink";
import LinkExpired from "../../Auth/LinkExpired";
import SetPwd from "../../Auth/SetPwd";
import ResetPwd from "../../Auth/ResetPwd";
import PwdChangedSuccsessfully from "../../Auth/PwdChangedSuccsessfully";
// import action from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import {
  brandSearchAction,
  resetMerchantAction,
} from "../../../actions/brandAction";
import { TOGGLELOADING } from "../../../Constants/ActionsConstants";
import { getCategoryAction } from "../../../actions/CategoryAction";
import { useRef } from "react";
const { Search } = Input;

const Index = () => {
  const getAuthentication = async () => {
    try {
      // let resp = await action.getSystemToken();
      // console.log("response>>>", resp);
    } catch (error) {
      console.log("error", error);
    }
  };

  // const getSystemToken = localStorage.getItem("accessToken")

  useEffect(() => {
    getAuthentication();
    dispatch(getCategoryAction);
  }, []);

  const dispatch = useDispatch();

  const [second, setSecond] = useState(59);
  const [minute, setMinute] = useState(1);
  // const [searchOpen, setSearchOpen] = useState(false);
  const [modalChange, setModalChange] = useState("login");
  const [heartActive, setHeartActive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const getSearchData = useSelector((state) => state.auth?.brand);
  const isLoading = useSelector((state) => state.auth?.isLoading);

  // console.log("isLoading ...", isLoading);

  const categorylist = useSelector((state) => state.auth.all_category);
  // const getFavouriteBrand = useSelector((state) => state.auth.fav_brand);

  // console.log("getFavouriteBrand ....", getFavouriteBrand);

  const urlLocation = window.location.pathname;
  let params = new URLSearchParams(urlLocation);
  const currentUrl = params.has("/search-offers/:id");

  let systemToken = localStorage.getItem("accessToken");

  const [searchValue, setSearchValue] = useState();

  const location = useLocation();
  // console.log(location.pathname.split("/")[1]);

  const pageTitle = location.pathname
    .split("/")[1]
    .replace("-", " ")
    .replace("/", "")
    .toLowerCase();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setModalChange("login");
    setSecond(59);
    setMinute(1);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setModalChange("login");
    setSecond(59);
    setMinute(1);
  };

  React.useEffect(() => {
    if (modalChange === "sendRequestLink") {
      if (second > 0) {
        setTimeout(() => setSecond(second - 1), 1000);
      } else {
        if (minute > 0) {
          setSecond(59);
        } else {
          setSecond("0");
          setModalChange("linkExpired");
        }
      }

      if (minute > 0) {
        setTimeout(() => setMinute(minute - 1), 59000);
      } else {
        setMinute("0");
      }
    }
  });

  const joinModal = () => {
    setIsModalVisible(true);
    setModalChange("register");
  };
  const makeFav = () => {
    !heartActive ? setHeartActive(true) : setHeartActive(false);
  };

  const pressSearchHandler = (event) => {
    if (event.key === "Enter") {
      if (currentUrl) {
        dispatch({ type: TOGGLELOADING });
        dispatch(brandSearchAction(event.target.value, "enter"));
        setSearchValue("");
      } else {
        dispatch({ type: TOGGLELOADING });
        dispatch(brandSearchAction(event.target.value, "enter"));
        setSearchValue("");
        navigate(`/search-offers/${searchValue}`);
      }
    }
  };

  const searchQuery = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    if (value.length > 2) {
      dispatch({ type: TOGGLELOADING });
      dispatch(brandSearchAction(value, "search"));
    } else if (!value) {
      dispatch({ type: TOGGLELOADING });
      setSearchValue(value);
      dispatch(resetMerchantAction);
      dispatch(brandSearchAction(value, "search"));
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (searchValue && ref.current && !ref.current.contains(e.target)) {
        setSearchValue("")(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [searchValue]);

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/saved" ? (
        <div className="headerSm">
          <div className="d-flex">
            <div>
              <Link to="/">
                <img
                  src="/Images/arrow_back.svg"
                  onClick={() => navigate(-1)}
                  height={20}
                />
              </Link>
            </div>
            <div className="flex-grow-1 pageTitle pl-3">{pageTitle}</div>
            {location.pathname === "/brand" ? (
              <div className="px-3 rightsideCation">
                <span>
                  <AiOutlineInfoCircle />
                </span>
                &nbsp;&nbsp;
                <span onClick={() => makeFav()}>
                  {!heartActive ? <AiOutlineHeart /> : <AiFillHeart />}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <>
          <Row
            className="header_container mobileview px-3"
            align="middle"
            justify="space-between"
          >
            <Col>
              <img width={100} src="/Images/logo.png" />
            </Col>

            <Col className="d-flex align-items-center">
              <span className="d-inline-block px-2">
                <TopMenu mobileView={false} category={categorylist?.data} />
              </span>
              <span className="d-inline-block px-2">
                <img src="/Images/Bookmark_icon_outline.svg" />
              </span>
              {systemToken ? (
                <Link to={"/account-profile"} className="d-inline-block px-2">
                  <img src="/Images/user_icon_outline.svg" />
                </Link>
              ) : (
                <Link to={"/login"} className="d-inline-block px-2">
                  <img src="/Images/user_icon_outline.svg" />
                </Link>
              )}
            </Col>

            <Col xs={24} className="mt-3">
              <Search
                size="large"
                placeholder="Search stores"
                enterButton
                onChange={() => searchQuery(true)}
              />
            </Col>
          </Row>
        </>
      )}

      <Row
        className="header_container webview"
        align="middle"
        justify="space-between"
      >
        <Col>
          <Link to="/">
            <img width={100} src="/Images/logo.png" />
          </Link>
        </Col>
        <Col>
          <Row align="middle" justify="center">
            <TopMenu mobileView={true} category={categorylist?.data} />
          </Row>
        </Col>
        <Col ref={ref}>
          <Search
            suffix={<img src="/Images/arrow_up.svg" />}
            size="large"
            placeholder="Search stores"
            enterButton
            value={searchValue}
            onChange={(e) => searchQuery(e)}
            onKeyPress={(e) => pressSearchHandler(e)}
            // onClick={() => searchClickHandler()}
            loading={isLoading}
          />
          <div
            className={
              searchValue ? "searchHolder openSearchPanel" : "searchHolder"
            }
          >
            <SearchResult
              getSearchData={getSearchData}
              value={searchValue}
              setValue={setSearchValue}
              currentUrl={currentUrl}
            />
          </div>
        </Col>

        <Col>
          {systemToken ? (
            <Row align="middle" justify="">
              <Col>
                <Link to="/saved" className="text-dark fw-bold">
                  <img src="Images/Bookmark_icon_outline.svg" />{" "}
                  <span>Saved</span>
                </Link>
              </Col>

              <div className="dropdown">
                <button
                  className="btn btn-light bg-transparent dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/saved">
                    My Profile
                  </Link>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0)"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </a>
                </div>
              </div>
            </Row>
          ) : (
            <Row align="middle" justify="">
              <Button type="link" onClick={showModal}>
                Sign In
              </Button>
              <Button type="primary" onClick={() => joinModal()} size="large">
                Join Now
              </Button>
            </Row>
          )}
        </Col>
      </Row>

      <ModalComp
        modalTitle={
          modalChange === "login"
            ? "Welcome!"
            : modalChange === "register"
            ? "Register"
            : modalChange === "forgotPwd"
            ? "Forgot Password"
            : modalChange === "sendRequestLink"
            ? "Link Sent"
            : modalChange === "sendRequestLink"
            ? "Link Sent"
            : modalChange === "linkExpired"
            ? ""
            : ""
        }
        logoShow={
          modalChange === "login"
            ? true
            : modalChange === "register"
            ? true
            : modalChange === "forgotPwd"
            ? false
            : modalChange === "sendRequestLink"
            ? false
            : modalChange === "linkExpired"
            ? false
            : ""
        }
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        ModalContent={
          modalChange === "login" ? (
            <Login
              goToRegister={() => setModalChange("register")}
              forgotPwd={() => setModalChange("forgotPwd")}
              setModalVisibel={setIsModalVisible}
            />
          ) : modalChange === "register" ? (
            <Register
              registered={() => setModalChange("sendRequestLink")}
              goToLogin={() => setModalChange("login")}
            />
          ) : modalChange === "forgotPwd" ? (
            <ForgotPwd
              sendRequestLink={() => setModalChange("sendRequestLink")}
            />
          ) : modalChange === "sendRequestLink" ? (
            <SendRequestLink
              timer={minute + ":" + second}
              sendRequestLink={() => setModalChange("sendRequestLink")}
            />
          ) : modalChange === "linkExpired" ? (
            <LinkExpired goToRegister={() => setModalChange("register")} />
          ) : modalChange === "setPwd" ? (
            <SetPwd pwdChanged={() => setModalChange("pwdChanged")} />
          ) : modalChange === "resetPwd" ? (
            <ResetPwd pwdChanged={() => setModalChange("pwdChanged")} />
          ) : modalChange === "pwdChanged" ? (
            <PwdChangedSuccsessfully
              pwdChanged={() => setModalChange("pwdChanged")}
            />
          ) : (
            ""
          )
        }
      />
    </>
  );
};

export default Index;

// if (searchValue.typingTimeout) clearTimeout(searchValue.typingTimeout);
// setSearchValue({
//   name: e.target.value,
//   typing: false,
//   typingTimeout: setTimeout(() => {
//     getData(e.target.value);
//   }, 1000),
// });
