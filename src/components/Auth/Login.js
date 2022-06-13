/* eslint-disable no-useless-escape */
import { Button, Checkbox, Col, Form, Input, message, Row } from "antd";
import React, { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import "./index.css";
import { Link } from "react-router-dom";
import actions from "../../actions";

export default function Login({ goToRegister, forgotPwd }) {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async () => {
    console.log("email", RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(email));
    console.log("password", password);
    if (!RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(email)) {
      message.error("Please enter the valid email.");
    }
   let result = actions.Login({
      emailId: email,
      password: password,
      username: "sb22",
    });

    result.then((res)=>{
      if(res.success === true){
        window.location.reload();
      }
    })
  };
  return (
    <Form autoComplete="new-password">
      <div className="mb-4">
        <label>Email</label>
        <div className="lineinput">
          <Input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="new-password"
            type={"email"}
            value={email}
          />
        </div>
      </div>
      <div className="mb-4">
        <label>Password</label>
        <div className="lineinput">
          <Input
            placeholder="Password"
            autoComplete="new-password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            suffix={<EyeOutlined />}
          />
        </div>
      </div>
      <Row className="pb-4">
        <Col span={12}>
          <Checkbox onChange={onChange}>Remember Me</Checkbox>
        </Col>
        <Col span={12} className="text-right">
          <Link
            to=""
            onClick={() => forgotPwd()}
            className="text-decoration-none"
          >
            Forgot password?
          </Link>
        </Col>
      </Row>
      <div className="mb-4">
        <Button
          onClick={() => {
            handleLogin();
          }}
          type="primary"
          className="w-100"
          size="large"
        >
          Login
        </Button>
      </div>
      <div className="mb-4 d-flex align-items-center justify-content-center">
        <span className="orDevider">or</span>
      </div>
      <div className="mb-4 text-center">
        <p className="fw-bold">Sign in with</p>
        <a href="google.com" target="_blank">
          <img src="/Images/google.svg" height={40} />
        </a>{" "}
        &nbsp;
        <a href="facebook.com" target="_blank">
          <img src="/Images/facebook.svg" height={40} />
        </a>
      </div>
      <div className="py-md-4 py-0"></div>
      <div className="mb-4 text-center fw-bold">
        Don’t have an account yet? &nbsp;
        <Link to="" onClick={() => goToRegister()}>
          Register
        </Link>
      </div>
    </Form>
  );
}
