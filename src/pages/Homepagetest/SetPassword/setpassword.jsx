import React, { useState } from "react";
import { Input } from "../../components/Input/input";
import { Button } from "../../components/Button/button";

const SetPassword = ({ name, changeDialogType }) => {
  const [creds, setCreds] = useState({
    password: "",
    confirmPassword: "",
  });
  const [passInvalid, setPassInvalid] = useState();
  const [cpassInvalid, setCpassInvalid] = useState();
  var flag = 0;

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
    if (e.target.name === "password") {
      validatePassword(e.target.value);
      if (flag === 1)
        validateConfirmPassword(e.target.value, creds.confirmPassword);
    }
    if (e.target.name === "confirmPassword") {
      validateConfirmPassword(creds.password, e.target.value);
      flag = 1;
    }
    //console.log(creds.password);
  };

  const validatePassword = (value) => {
    if (
      !/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/i.test(
        value
      )
    )
      setPassInvalid(true);
    else setPassInvalid(false);
  };

  const validateConfirmPassword = (value1, value2) => {
    //console.log(creds.password, creds.confirmPassword);
    if (value1 !== value2) setCpassInvalid(true);
    else setCpassInvalid(false);
  };

  const onSubmit = () => {
    changeDialogType("register-success");
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
                    className=""
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
                      marginBottom: "6px",
                    }}
                  >
                    Set Password
                  </h3>
                  <h5
                    style={{
                      fontFamily: "Lexend",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "18px",
                      /* identical to box height */
                      textAlign: "left",

                      /* Font / Gray */

                      color: "#858585",
                    }}
                  >
                    set password for {name}
                  </h5>

                  <div className="form-outline mb-4">
                    <Input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      onChange={onChange}
                      required={true}
                      is_invalid={passInvalid}
                      invalid_text="Password should contain. Minimum 6 characters, At least 1 upper case English letter,
                      At least 1 lower case English letter,
                      At least 1 letter and
                      At least 1 special character"
                      valid_text="Looks Good!"
                    />
                  </div>
                  {/* confirm passowrd */}
                  <div className="form-outline mb-4">
                    <Input
                      type="password"
                      id="typePasswordX-2c"
                      name="confirmPassword"
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                      onChange={onChange}
                      required={true}
                      is_invalid={cpassInvalid}
                      invalid_text="Passwords should match"
                      valid_text="Looks Good!"
                    />
                  </div>
                  <Button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={onSubmit}
                    text="Set Password"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SetPassword;
