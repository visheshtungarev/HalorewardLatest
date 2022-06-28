/* eslint-disable no-useless-escape */
import { Button, Checkbox, Col, Input, Row } from "antd";
import React, { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import "./index.css";
import { Link } from "react-router-dom";
import actions from "../../actions";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login({ goToRegister, forgotPwd, setModalVisibel }) {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const [revealPassword, setRevealPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initvalues = {
    email: "",
    password: "",
  };

  const validationschema = Yup.object({
    password: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: initvalues,
    validationSchema: validationschema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      let result = actions.Login({
        emailId: values.email,
        password: values.password,
        username: "halorewards@test.com",
      });

      result.then((res) => {
        if (res.success === true) {
          setIsSubmitting(false);
          toast.success(res.message);
          setModalVisibel(false);
          setTimeout(() => {
            window.location.reload();
          }, 500);
        } else {
          toast.success("something went wrong");
          setIsSubmitting(false);
        }
      });

      // var myHeaders = new Headers();
      // myHeaders.append("tenant-id", "1");
      // myHeaders.append("Content-Type", "application/json");

      // var raw = JSON.stringify({
      //   emailId: values.email,
      //   password: values.password,
      //   username: "sb22",
      // });

      // var requestOptions = {
      //   method: "POST",
      //   headers: myHeaders,
      //   body: raw,
      //   redirect: "follow",
      // };

      // fetch(
      //   "https://customers-service.dxxrewards.click/api/customers/login",
      //   requestOptions
      // )
      //   .then((response) => response.text())
      //   .then((result) => console.log(result))
      //   .catch((error) => console.log("error", error));
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    formik;
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label>Email</label>
        <div className="lineinput">
          <Input
            placeholder="Email"
            name="email"
            id="email"
            onChange={handleChange}
            value={values.email}
            autoComplete="new-password"
            type={"email"}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <div className="text-danger">{errors.email}</div>
          ) : null}
        </div>
      </div>
      <div className="mb-4">
        <label>Password</label>
        <div className="lineinput">
          <Input
            placeholder="Password"
            autoComplete="new-password"
            type={revealPassword ? "text" : "password"}
            name="password"
            id="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            suffix={
              revealPassword ? (
                <EyeInvisibleOutlined
                  onClick={() => setRevealPassword(!revealPassword)}
                />
              ) : (
                <EyeOutlined
                  onClick={() => setRevealPassword(!revealPassword)}
                />
              )
            }
          />
          {touched.password && errors.password ? (
            <div className="text-danger">{errors.password}</div>
          ) : null}
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
          htmlType="submit"
          type="primary"
          className="w-100"
          size="large"
          loading={isSubmitting}
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
    </form>
  );
}
