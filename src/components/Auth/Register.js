import { Button, Checkbox, Col, Input, Row } from "antd";
import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import actions from "../../actions";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register({ goToLogin, forgotPwd }) {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const [isSubmitting, setIsSubmitting] = useState(false);

  const initvalues = {
    emailId: "",
    firstName: "",
  };

  const validationschema = Yup.object({
    firstName: Yup.string().required("Fist name is required"),
    emailId: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: initvalues,
    validationSchema: validationschema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      let result = actions.SignUp({
        emailId: values.emailId,
        isActive: false,
        firstName: values.firstName,
      });

      result.then((res) => {
        if (res.success === true) {
          setIsSubmitting(false);
          toast.success(res.message);
          goToLogin();
          //   setModalVisibel(false);
        } else {
          toast.success("something went wrong");
          setIsSubmitting(false);
        }
      });
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    formik;

  console.log("values .....", values);

  return (
    <form autoComplete="new-password" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label>First Name</label>
        <div className="lineinput">
          <Input
            placeholder="First Name"
            autoComplete="new-password"
            type={"text"}
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.firstName && errors.firstName ? (
            <div className="text-danger">{errors.firstName}</div>
          ) : null}
        </div>
      </div>
      <div className="mb-4">
        <label>Email address</label>
        <div className="lineinput">
          <Input
            placeholder="Email address"
            autoComplete="new-password"
            type={"email"}
            id="emailId"
            name="emailId"
            value={values.emailId}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.emailId && errors.emailId ? (
            <div className="text-danger">{errors.emailId}</div>
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
          type="primary"
          htmlType="submit"
          className="w-100"
          size="large"
          loading={isSubmitting}
        >
          Register
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
        Already have an account? &nbsp;
        <Link to="" onClick={() => goToLogin()}>
          Login
        </Link>
      </div>
    </form>
  );
}
