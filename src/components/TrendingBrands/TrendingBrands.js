import React from "react";
import "./index.css";
import { Row } from "antd";

import { HomeConstant } from '../../Constants'
import TrendingBlock from "./TrendingBlock";


export default function TrendingBrands({ span }) {

    return (
        <Row align="middle" className="scrolledView" justify="space-around" gutter={30}>
            {HomeConstant?.trendingBrands?.map((item, i) =>
                <TrendingBlock key={i}
                    span={span}
                    brandImage={item.image}
                    brandTitle={item.title}
                    brandOfferText={item.cashback}
                />
            )}
        </Row>

    )
}
