import React, { useState } from "react";
import WelcomeImage from "../../image 18.png";
// import { register } from "../../api/userAction";
import { Input, Checkbox } from "../../components/Input/input";
import { Button } from "../../components/Button/button";

const Register = ({ changeDialogType, changeName, changeEmail }) => {
  const [creds, setCreds] = useState({
    name: "",
    email: "",
  });
  const [emailInvalid, setEmailInvalid] = useState();
  const [nameInvalid, setNameInvalid] = useState();

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
    if (e.target.name === "email") validateEmail(e.target.value);
    if (e.target.name === "name") validateName(e.target.value);
    console.log(creds);
  };

  const validateEmail = (value) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      setEmailInvalid(true);
    else setEmailInvalid(false);
  };

  const validateName = (value) => {
    if (!/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/i.test(value))
      setNameInvalid(true);
    else setNameInvalid(false);
  };

  const handleChange = async () => {
    /**  
      NORMAL FLOW
    */
    // var headers = {
    //   "Content-type": "application/json",
    // };
    // try{
    //   let data = await register(headers, JSON.stringify(creds));
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
      FOR TESTING
    */
    changeName(creds.name);
    changeEmail(creds.email);
    changeDialogType("linksent");
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
                  <h3
                    className="mb-5"
                    style={{
                      fontFamily: "Lexend",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "32px",
                      lineHeight: "40px",
                      /* identical to box height */

                      /* Primary / Navy Blue */
                      textAlign: "left",
                      color: "#120078",
                    }}
                  >
                    <span>
                      <img src={WelcomeImage} alt="WelcomeImage" />
                    </span>{" "}
                    Register
                  </h3>
                  <form
                  // onSubmit={this.handleChange}
                  >
                    <Input
                      type="text"
                      id="typeNameX-2"
                      className="form-control form-control-lg"
                      placeholder="Name"
                      value={creds ? creds.name : null}
                      onChange={onChange}
                      name="name"
                      is_invalid={nameInvalid}
                      invalid_text="Please provide a valid name."
                      valid_text="Looks Good!"
                    />
                    <Input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      value={creds ? creds.email : null}
                      onChange={onChange}
                      name="email"
                      is_invalid={emailInvalid}
                      invalid_text="Please provide a valid email."
                      valid_text="Looks Good!"
                    />
                  </form>

                  {/* <!-- Checkbox --> */}
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
                      >
                        Forgot Password ?
                      </p>
                    </div>
                  </div>

                  <Button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={handleChange}
                    text="Register"
                  />
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
                    <div>
                      {" "}
                      <a
                        className="btn btn-primary btn-lg btn-floating"
                        style={{
                          backgroundColor: "#3B5998",
                          border: "none",
                          borderRadius: "50%",
                          cursor: "pointer",
                          margin: "0 5px",
                        }}
                        href="#!"
                        role="button"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </div>

                    <div>
                      <a
                        className="btn btn-primary btn-lg btn-floating"
                        style={{
                          backgroundColor: " #e64522",
                          border: "none",
                          borderRadius: "50%",
                          cursor: "pointer",
                          margin: "0 5px",
                        }}
                        href="#!"
                        role="button"
                      >
                        <i className="fa fa-google"></i>
                      </a>
                    </div>
                  </div>
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        fontFamily: "Lexend",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "12px",
                        lineHeight: "15px",
                        /* identical to box height */

                        /* Font / Black */

                        color: "#1D1C24",
                        marginTop: "50px",
                        marginBottom: "10px",
                      }}
                    >
                      Already have a account ?{" "}
                      <span
                        style={{ color: "#3A86FF" }}
                        onClick={() => changeDialogType("login")}
                      >
                        Login
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

export default Register;
