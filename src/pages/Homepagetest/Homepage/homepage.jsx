import React, { useState } from "react";

import Login from "../Login/login";
import ForgotPassword from "../ForgotPassword/forgotPassword";
import Register from "../Register/register";
import SetPassword from "../SetPassword/setpassword";
import ResetPassword from "../ResetPassword/resetPassword";
import LinkSent from "../Register/linkSent";
import RegisterSuccess from "../Register/registerSuccess";

const Homepage = () => {
  const [dialogType, setDialogType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const changeDialogType = (type) => {
    setDialogType(type);
  };

  const changeName = (name) => {
    setName(name);
  };

  const changeEmail = (email) => {
    setEmail(email);
  };

  return (
    <>
      <center>
        {dialogType === "" ? (
          <button onClick={() => changeDialogType("register")}>
            {" "}
            Register{" "}
          </button>
        ) : null}
      </center>
      {dialogType === "login" ? (
        <Login changeDialogType={changeDialogType} changeName={changeName} />
      ) : null}
      {dialogType === "forgotPassword" ? (
        <ForgotPassword changeDialogType={changeDialogType} />
      ) : null}
      {dialogType === "register" ? (
        <Register
          changeDialogType={changeDialogType}
          changeName={changeName}
          changeEmail={changeEmail}
        />
      ) : null}
      {dialogType === "setPassword" ? (
        <SetPassword changeDialogType={changeDialogType} name={email} />
      ) : null}
      {dialogType === "resetPassword" ? (
        <ResetPassword changeDialogType={changeDialogType} />
      ) : null}
      {dialogType === "login-success" ? (
        <div>
          <h1>Successfully logged in. Welcome {name}</h1>
        </div>
      ) : null}
      {dialogType === "reset-success" ? (
        <div>
          <h1>Password reset success</h1>
        </div>
      ) : null}
      {dialogType === "linksent" ? (
        <LinkSent changeDialogType={changeDialogType} name={email} />
      ) : null}
      {dialogType === "register-success" ? (
        <RegisterSuccess changeDialogType={changeDialogType} />
      ) : null}
      {dialogType === "registered" ? (
        <div>
          <h1>Registration Complete</h1>
          <button onClick={() => changeDialogType("login")}> Login </button>
        </div>
      ) : null}
    </>
  );
};

export default Homepage;
