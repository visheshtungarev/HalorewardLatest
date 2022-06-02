import { Card, Col, Row } from 'antd'
import React from 'react'
import Breadcurms from '../../../components/Breadcrums/Breadcurms'
import Heading from '../../../components/Heading/Heading'
import "./index.css"
export default function FavoriteBrands() {
    return (
        <div className="home_container">
            <Row align="middle" className="list_view mb-0 pb-0">
                <Breadcurms
                    data={[{
                        pageName: 'Saved',
                        pageLink: '/saved'
                    }, {
                        pageName: 'Favorite Brands ',
                        pageLink: '/favorite-brands '
                    }]} />
            </Row>


            <div className="list_view">
                <Heading
                    HeadingText="Trending"
                    actionText="View All"
                    actionLink="/Trending-offers"
                />
                <Row align="middle" className="scrolledView" justify="space-around" gutter={30}>
                    <Col className="deals_box trending_brands mb-3 text-left" span={8}>
                        <Card className="deals_container text-center">

                            <img className=" " src="/Images/myntra.png" height={50} />
                            <p className=" h5 mt-3 mb-4 pb-2">dfgdgdf</p>

                            <div className='doubleFrameSec'>
                                <div className='flex-grow-1'>
                                    upto 11% cashback
                                </div>
                                <div className='flex-grow-1'>
                                    24 offers available
                                </div>
                            </div>

                        </Card>
                    </Col>
                    <Col className="deals_box trending_brands mb-3 text-left" span={8}>
                        <Card className="deals_container text-center">

                            <img className=" " src="/Images/myntra.png" height={50} />
                            <p className=" h5 mt-3 mb-4 pb-2">dfgdgdf</p>

                            <div className='doubleFrameSec'>
                                <div className='flex-grow-1'>
                                    upto 11% cashback
                                </div>
                                <div className='flex-grow-1'>
                                    24 offers available
                                </div>
                            </div>

                        </Card>
                    </Col>
                    <Col className="deals_box trending_brands mb-3 text-left" span={8}>
                        <Card className="deals_container text-center">

                            <img className=" " src="/Images/myntra.png" height={50} />
                            <p className=" h5 mt-3 mb-4 pb-2">dfgdgdf</p>

                            <div className='doubleFrameSec'>
                                <div className='flex-grow-1'>
                                    upto 11% cashback
                                </div>
                                <div className='flex-grow-1'>
                                    24 offers available
                                </div>
                            </div>

                        </Card>
                    </Col>
                    <Col className="deals_box trending_brands mb-3 text-left" span={8}>
                        <Card className="deals_container text-center">

                            <img className=" " src="/Images/myntra.png" height={50} />
                            <p className=" h5 mt-3 mb-4 pb-2">dfgdgdf</p>

                            <div className='doubleFrameSec'>
                                <div className='flex-grow-1'>
                                    upto 11% cashback
                                </div>
                                <div className='flex-grow-1'>
                                    24 offers available
                                </div>
                            </div>

                        </Card>
                    </Col>
                    <Col className="deals_box trending_brands mb-3 text-left" span={8}>
                        <Card className="deals_container text-center">

                            <img className=" " src="/Images/myntra.png" height={50} />
                            <p className=" h5 mt-3 mb-4 pb-2">dfgdgdf</p>

                            <div className='doubleFrameSec'>
                                <div className='flex-grow-1'>
                                    upto 11% cashback
                                </div>
                                <div className='flex-grow-1'>
                                    24 offers available
                                </div>
                            </div>

                        </Card>
                    </Col>
                    <Col className="deals_box trending_brands mb-3 text-left" span={8}>
                        <Card className="deals_container text-center">

                            <img className=" " src="/Images/myntra.png" height={50} />
                            <p className=" h5 mt-3 mb-4 pb-2">dfgdgdf</p>

                            <div className='doubleFrameSec'>
                                <div className='flex-grow-1'>
                                    upto 11% cashback
                                </div>
                                <div className='flex-grow-1'>
                                    24 offers available
                                </div>
                            </div>

                        </Card>
                    </Col>

                </Row>
            </div>

        </div>
    )
}
