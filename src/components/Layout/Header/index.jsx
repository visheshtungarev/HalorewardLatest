import React, { useEffect, useState } from "react";
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
import action from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { brandSearchAction } from "../../../actions/brandAction";
const { Search } = Input;

const Index = () => {
  const getAuthentication = async () => {
    try {
      let resp = await action.getSystemToken();
      console.log("response>>>", resp);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getAuthentication();
  }, []);

  const dispatch = useDispatch();

  const [second, setSecond] = useState(59);
  const [minute, setMinute] = useState(1);
  const [searchOpen, setSearchOpen] = useState(false);
  const [modalChange, setModalChange] = useState("login");
  const [heartActive, setHeartActive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const getSearchData = useSelector((state)=> state.auth?.brand);
  const urlLocation = window.location.pathname
  let params = new URLSearchParams(urlLocation);
  const currentUrl = params.has("/all-brands")

  const [searchValue, setSearchValue] = useState({
    name: "",
    typing: false,
    typingTimeout: 0,
  });

  const location = useLocation();
  console.log(location.pathname.split("/")[1]);

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

  function getData(e) {
   dispatch(brandSearchAction(e, "search"));
    e ? setSearchOpen(true) : setSearchOpen(false);
  }

  const pressSearchHandler = (event) => {
    if(event.key === "Enter"){
      if(currentUrl){
        dispatch(brandSearchAction(event.target.value, "enter"));
      }else{
        dispatch(brandSearchAction(event.target.value, "enter"));
        navigate("/all-brands")
      }
    }
  }

  const searchQuery = (e) => {
    // let timer;
    if (e.target.value) {
      if (searchValue.typingTimeout) clearTimeout(searchValue.typingTimeout);
      setSearchValue({
        name: e.target.value,
        typing: false,
        typingTimeout: setTimeout(() => {
          getData(e.target.value);
        }, 1000),
      });
    } else {
      let timer;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        getData(e.target.value);
      }, 1000)
    }
  };

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/saved" ? (
        <div className="headerSm">
          <div className="d-flex">
            <div>
              <img
                src="/Images/arrow_back.svg"
                onClick={() => navigate(-1)}
                height={20}
              />
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
                <TopMenu mobileView={false} />
              </span>
              <span className="d-inline-block px-2">
                <img src="/images/Bookmark_icon_outline.svg" />
              </span>
              <Link to={"/login"} className="d-inline-block px-2">
                <img src="/images/user_icon_outline.svg" />
              </Link>
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
          <img width={100} src="/Images/logo.png" />
        </Col>
        <Col>
          <Row align="middle" justify="center">
            <TopMenu mobileView={true} />
          </Row>
        </Col>
        <Col>
          <Search
            suffix={<img src="/images/arrow_up.svg" />}
            size="large"
            placeholder="Search stores"
            enterButton
            onChange={(e) => searchQuery(e)}
            onKeyPress={(e) => pressSearchHandler(e)}
          />
          <div
            className={
              searchOpen ? "searchHolder openSearchPanel" : "searchHolder"
            }
          >
            <SearchResult getSearchData={getSearchData}/>
          </div>
        </Col>

        <Col>
          <Row align="middle" justify="">
            <Button type="link" onClick={showModal}>
              Sign In
            </Button>
            <Button type="primary" onClick={() => joinModal()} size="large">
              Join Now
            </Button>
          </Row>
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
