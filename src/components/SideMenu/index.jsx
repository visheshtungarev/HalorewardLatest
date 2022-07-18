import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <Card className="deals_container popularOffers rounded1">
      <ul className="sideMenu devider">
        <li>
          <Link to={"/account-profile"}>Account Settings</Link>
        </li>
        <li>
          <Link className="d-flex justify-content-between" to={"/wallet"}>
            <span>Wallet</span>
            <span className="fw-bold">£12.65</span>
          </Link>
        </li>
        <li>
          <Link to={"/cashback-activity"}>Cashback Activity</Link>
        </li>
        <li>
          <Link to={"/wallet-statement"}>Account Statement</Link>
        </li>
        <li>
          <Link to={"/earn-cash"}>Gift Cards</Link>
        </li>
        <li>
          <Link to={"/personalized"}>Personalized</Link>
        </li>
        <li>
          <Link to={"/claims"}>Claims</Link>
        </li>
        <li>
          <Link className="savedcolor" to={"/saved"}>
            Saved
          </Link>
        </li>
        <li>
          <Link to={"/Help-Support"}>Help & Support</Link>
        </li>
        <li>
          <a className="logoutColor" href="javascript:void(0)">
            Logout
          </a>
        </li>
      </ul>
    </Card>
  );
};

export default SideMenu;
