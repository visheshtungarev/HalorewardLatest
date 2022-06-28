import { Button, Form } from "antd";
import React from "react";

export default function LinkExpired({ goToRegister }) {
  return (
    <Form autoComplete="new-password">
      <div className="mb-4 text-center">
        <img src="/Images/link_expired.svg" height={150} />
        <h4 className="ant-modal-title_sm text-center mb-4">
          {" "}
          Set Password Link Expired
        </h4>

        <p className="text-muted">
          You can resend a new link by
          <br />
          registering your email ID.
        </p>
      </div>
      {/* <p className='text-center' style={{
                color: '#FB5607'
            }}>Link expires in <b>00:00</b></p> */}
      <div className="mb-4">
        <Button
          type="primary"
          onClick={() => goToRegister()}
          className="w-100"
          size="large"
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
    </Form>
  );
}
