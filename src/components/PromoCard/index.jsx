import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";

const PromoCard = ({ heading, images }) => {
  return (
    <>
      <Card>
        <h1>{heading}</h1>
        {images.map((item) => {
          <img src={item.src} />;
        })}
      </Card>
    </>
  );
};

export default PromoCard;

PromoCard.propTypes = {
  heading: PropTypes.string,
  images: PropTypes.array,
};
