import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

// const data =
export default function Breadcurms({ data }) {
  const [currentRoute] = useState(data);

  return (
    <div className="breadcrums">
      {currentRoute &&
        currentRoute.map((item, i) => {
          return item.onClick || Boolean(currentRoute.length === i + 1) ? (
            <span
              className={`navLink ${
                currentRoute.length === i + 1 ? " " : " btn"
              }`}
              key={i}
              onClick={() =>
                Boolean(currentRoute.length !== i + 1) && item.onClick()
              }
            >
              {item.pageName}
            </span>
          ) : (
            <Link className="navLink" key={i} to={item?.pageLink}>
              {item.pageName}
            </Link>
          );
        })}
    </div>
  );
}
