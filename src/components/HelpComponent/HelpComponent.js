import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const HelpComponent = () => {
    return (
        <Row className="help-contents" gutter={5}>

        <Col  xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }}>
        <Row>
            <Col className="deals_box featuredOffers mb-4" span={24}>
                <div className="help-container">
                        <h5>Why didn’t I earn cash back?</h5>
                        <div className="help-content">
                            If you made a purchase and don’t see Cash Back in your account, it may be due to one of these reasons:

                            Using coupons you found outside of Rakuten. Using or even attempting to use any coupon codes, offers or
                            promotions that are not on Rakuten can void your Cash Back. There could be conflicts between Cash Back and the
                            discounts offered by other coupon sites, exclusive emails or rewards programs.

                            Visiting other sites during your shopping session. Going to other sites, especially ones that offer shopping rewards,
                            coupons or discounts, can result in the store giving the credit for your purchase to another site. In addition, browser
                            extensions from other shopping programs (such as Honey or Invisible Hand) can interfere with linking your purchase
                            to your Rakuten account.
                            Switching to a different browser window or tab. You should only use the initial tab opened for you by Rakuten at the
                            beginning of your shopping session. If you complete your purchase in a different tab or window, we may be unable
                            to link your purchase to your Rakuten account.

                            Waiting too long after activating Cash Back to complete your purchase. Additionally, some stores do not allow us to
                            linka purchase to your Rakuten account if items were added to your shopping cart before you activated Cash Back.
                            It’s best to activate Cash Back before adding items to your cart and check out as soon.
                        </div>
                </div>
            </Col>
            </Row>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }}>
            <div className="related-article">
                <h5>Related Articles</h5>
                <div className="link-container">
                    <Link to={'/'}>Supported Browsers</Link>
                    <Link to={'/'}>Travel Purchases for Hallorewards</Link>
                    <Link to={'/'}>How to Earn Cash Back ?</Link>
                    <Link to={'/'}>How Can I Tell If I’m earning Cashback ?</Link>
                </div>
            </div>
        </Col>
    </Row>
    )

}

export default HelpComponent;