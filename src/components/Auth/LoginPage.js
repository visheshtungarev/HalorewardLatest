import React, { useState } from "react";
import { Col } from "antd";

import "./index.css";
import Login from "./Login";
import Register from "./Register";
import ForgotPwd from "./ForgotPwd";
import SendRequestLink from "./SendRequestLink";
import LinkExpired from "./LinkExpired";
import SetPwd from "./SetPwd";
import ResetPwd from "./ResetPwd";
import PwdChangedSuccsessfully from "./PwdChangedSuccsessfully";

export default function LoginPage() {
  const [second, setSecond] = useState(59);
  const [minute, setMinute] = useState(1);
  const [modalChange, setModalChange] = useState("login");

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
  return (
    <Col span={24} className="bg-white px-3 pb-4">
      <div className="mb-4 pt-3 auth-title">
        {modalChange === "login"
          ? '<img src="/Images/mainLogo.svg" height={40} /> &nbsp; Welcome!'
          : modalChange === "register"
          ? '<img src="/Images/mainLogo.svg" height={40} /> &nbsp; Register'
          : modalChange === "forgotPwd"
          ? "Forgot Password"
          : modalChange === "sendRequestLink"
          ? "Link Sent"
          : modalChange === "sendRequestLink"
          ? "Link Sent"
          : modalChange === "linkExpired"
          ? ""
          : ""}
      </div>
      {modalChange === "login" ? (
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
        <ForgotPwd sendRequestLink={() => setModalChange("sendRequestLink")} />
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
      )}
    </Col>
  );
}
