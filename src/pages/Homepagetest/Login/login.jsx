import React, { useState } from "react";
import WelcomeImage from "../../image 18.png";
// import { login } from "../../api/userAction";
import "./login.css";
import { Input, Checkbox } from "../../components/Input/input";
import { Button, SocialButton } from "../../components/Button/button";

const Login = ({ changeDialogType, changeName }) => {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const [emailInvalid, setEmailInvalid] = useState();

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
    if (e.target.name === "email") validateEmail(e.target.value);
    console.log(this.state);
  };

  const validateEmail = (value) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      setEmailInvalid(true);
    else setEmailInvalid(false);
  };

  const handleChange = async (e) => {
    e.preventDefault();
    /**
     * NORMAL
     */
    // var headers = {
    //   "Content-type": "application/json",
    // };
    // try{
    //   let data = await login(headers, JSON.stringify(creds));
    //   console.log(data);
    //   if (localStorage.token) {
    //     window.location.assign("/");
    //   } else {
    //     //this.setState({ message: data.message });
    //   }
    // }
    // catch(err){
    //   console.log(err);
    // }

    /**
     * TESTING
     */
    try {
      changeName(creds.email);
      changeDialogType("login-success");
    } catch (err) {
      console.log("err");
    }
  };

  return (
    <div>
      <section classNameName="vh-100">
        <div className="container py-5 h-100" style={{ marginTop: "100px" }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5 h3-main">
                    <span>
                      <img src={WelcomeImage} alt="WelcomeImage" />
                    </span>{" "}
                    Welcome
                  </h3>
                  <form action="" onSubmit={handleChange} noValidate>
                    <Input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      name="email"
                      required={true}
                      onChange={onChange}
                      is_invalid={emailInvalid}
                      invalid_text="Please provide a valid email address."
                      valid_text="Looks Good!"
                    />
                    <Input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      onChange={onChange}
                      name="password"
                      required={true}
                      placeholder="Password"
                    />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div className="form-check d-flex justify-content-start mb-4">
                        <Checkbox
                          className="form-check-input"
                          value=""
                          id="form1Example3"
                        />
                        <label
                          className="form-check-label"
                          for="form1Example3"
                          style={{
                            fontFamily: "Lexend",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "12px",
                            lineHeight: "15px",
                            /* identical to box height */

                            /* Font / Gray */

                            color: "#6E6C7B",
                            paddingTop: "4px",

                            opacity: "0.8",
                          }}
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "Lexend",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "12px",
                            lineHeight: "15px",
                            /* identical to box height */

                            /* Secondary / Azure */

                            color: "#3A86FF",
                            cursor: "pointer",
                          }}
                          onClick={() => changeDialogType("forgotPassword")}
                        >
                          Forgot Password ?
                        </p>
                      </div>
                    </div>

                    <Button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                      // onClick={() => handleChange()}
                      text="Login"
                    />
                  </form>
                  <div style={{ position: "relative", margin: "10px 0px" }}>
                    <div
                      style={{
                        width: "30px",
                        position: "absolute",
                        left: "126px",
                        top: "0px",
                      }}
                    >
                      {" "}
                      <hr className="my-4" />
                    </div>
                    <div>
                      <p
                        style={{
                          paddingTop: "12px",
                          fontFamily: "Lexend",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "10px",
                          lineHeight: "12px",
                          /* identical to box height */

                          color: "rgba(133, 133, 133, 0.8)",
                        }}
                      >
                        OR
                      </p>
                    </div>
                    <div
                      style={{
                        width: "30px",
                        position: "absolute",
                        top: "0px",
                        right: "126px",
                      }}
                    >
                      {" "}
                      <hr className="my-4" />
                    </div>{" "}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "Lexend",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "12px",
                        lineHeight: "15px",
                        /* identical to box height */

                        /* Font / Black */

                        color: "#1D1C24",
                      }}
                    >
                      Sign In With
                    </h4>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "10px 0px",
                    }}
                  >
                    <SocialButton icon="fa fa-facebook" bgColor="#3B5998" />
                    <SocialButton icon="fa fa-google" bgColor="#fff" />
                  </div>
                  <div style={{ position: "relative" }}>
                    <div className="div-account">
                      Dont have a account yet?{" "}
                      <span
                        style={{ color: "#3A86FF" }}
                        onClick={() => changeDialogType("register")}
                      >
                        Register
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
