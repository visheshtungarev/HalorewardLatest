import React from "react";
import { Button } from "../../components/Button/button";

const LinkSent = ({ changeDialogType, name }) => {
  const onSubmit = (e) => {
    changeDialogType("setPassword");
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
                    Link Sent
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
                    A link to verify your email and set password has been sent
                    to {name}
                  </h5>

                  <br />
                  <br />
                  <br />
                  <Button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={onSubmit}
                    text="Continue"
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

export default LinkSent;
