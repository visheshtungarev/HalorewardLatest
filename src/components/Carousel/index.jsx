import React from "react";
import { Carousel } from "antd";

const index = ({ list, cardUI }) =>
  <Carousel autoplay>
    {list.map(item => cardUI(item))}
  </Carousel>;

export default index;
