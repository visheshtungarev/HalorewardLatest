import React from "react";

function ForgotPassword() {
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
                    Forgot Password
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
                    Enter registered email
                  </h5>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      style={{
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderRadius: "0em",
                        fontFamily: "Lexend",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "12px",
                        lineHeight: "15px",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",

                        /* identical to box height */

                        color: "rgba(133, 133, 133, 0.8)",
                      }}
                    />
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    style={{
                      fontFamily: "Lexend",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "18px",
                      /* identical to box height */

                      textTransform: "uppercase",

                      /* Secondary / white */

                      color: "#FFFFFF",
                    }}
                  >
                    Request Reset Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgotPassword;
