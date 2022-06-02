import React from 'react'
import { Row, Col, Card } from "antd";

import "./index.css"
import { Link } from 'react-router-dom';
export default function SearchResult() {
    return (
        <div className="searchSection">

            {/* ============search Results============ */}
            <div className='recentSearch' style={{ display: 'none' }}>
                <h5 className='fw-bold mb-3'>Results with ‘Tar’ &nbsp; <Link className='small' to="">See all results <img src='Images/arrow_next_blue.svg' height={10} /></Link></h5>
                <Row gutter={15}>
                    <Col lg={{ span: 12 }} className="mb-3">
                        <Card className="searchedResult">
                            <div className='Brandlogo'>
                                <img src='Images/myntra.png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3'>
                                <div className='d-flex'>
                                    <h5 className='flex-grow-1'>Nike</h5>
                                </div>
                                <p className='mb-0'>upto 70% cashback, 4 coupons,
                                    2 Prize Draws</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={{ span: 12 }} className="mb-3">
                        <Card className="searchedResult">
                            <div className='Brandlogo'>
                                <img src='Images/myntra.png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3'>
                                <div className='d-flex'>
                                    <h5 className='flex-grow-1'>Nike</h5>
                                </div>
                                <p className='mb-0'>upto 70% cashback, 4 coupons,
                                    2 Prize Draws</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={{ span: 12 }} className="mb-3">
                        <Card className="searchedResult">
                            <div className='Brandlogo'>
                                <img src='Images/myntra.png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3'>
                                <div className='d-flex'>
                                    <h5 className='flex-grow-1'>Nike</h5>
                                </div>
                                <p className='mb-0'>upto 70% cashback, 4 coupons,
                                    2 Prize Draws</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={{ span: 12 }} className="mb-3">
                        <Card className="searchedResult">
                            <div className='Brandlogo'>
                                <img src='Images/myntra.png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3'>
                                <div className='d-flex'>
                                    <h5 className='flex-grow-1'>Nike</h5>
                                </div>
                                <p className='mb-0'>upto 70% cashback, 4 coupons,
                                    2 Prize Draws</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
            {/* ============search Results============ */}



            {/* ============recent search Results============ */}
            <div className='recentSearch'>
                <h5 className='fw-bold mb-3'>Recent searches</h5>
                <Row gutter={15}>
                    <Col lg={{ span: 12 }} className="mb-3">
                        <Card className="searchedResult">
                            <div className='Brandlogo'>
                                <img src='Images/myntra.png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3'>
                                <div className='d-flex'>
                                    <h5 className='flex-grow-1'>Nike</h5>
                                    <img src='Images/arrow_up_.svg' height={15} />
                                </div>
                                <p className='mb-0'>upto 70% cashback, 4 coupons,
                                    2 Prize Draws</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={{ span: 12 }} className="mb-3">
                        <Card className="searchedResult">
                            <div className='Brandlogo'>
                                <img src='Images/myntra.png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3'>
                                <div className='d-flex'>
                                    <h5 className='flex-grow-1'>Nike</h5>
                                    <img src='Images/arrow_up_.svg' height={15} />
                                </div>
                                <p className='mb-0'>upto 70% cashback, 4 coupons,
                                    2 Prize Draws</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={{ span: 12 }} className="mb-3">
                        <Card className="searchedResult">
                            <div className='Brandlogo'>
                                <img src='Images/myntra.png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3'>
                                <div className='d-flex'>
                                    <h5 className='flex-grow-1'>Nike</h5>
                                    <img src='Images/arrow_up_.svg' height={15} />
                                </div>
                                <p className='mb-0'>upto 70% cashback, 4 coupons,
                                    2 Prize Draws</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={{ span: 12 }} className="mb-3">
                        <Card className="searchedResult">
                            <div className='Brandlogo'>
                                <img src='Images/myntra.png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3'>
                                <div className='d-flex'>
                                    <h5 className='flex-grow-1'>Nike</h5>
                                    <img src='Images/arrow_up_.svg' height={15} />
                                </div>
                                <p className='mb-0'>upto 70% cashback, 4 coupons,
                                    2 Prize Draws</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
            {/* ============recent search Results============ */}



            {/* ============trending search Results============ */}
            <div className='searchContainer' style={{ background: '#F7F7F7' }}>
                <h5 className='fw-bold my-3'>Trending searches</h5>
                <Row gutter={15}>
                    <Col lg={{ span: 12 }} className="mb-3">
                        <Card className="searchedResult">
                            <div className='Brandlogo'>
                                <img src='Images/myntra.png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3'>
                                <div className='d-flex'>
                                    <h5 className='flex-grow-1'>Nike</h5>
                                    <img src='Images/arrow_up_.svg' height={15} />
                                </div>
                                <p className='mb-0'>upto 70% cashback, 4 coupons,
                                    2 Prize Draws</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={{ span: 12 }} className="mb-3">
                        <Card className="searchedResult">
                            <div className='Brandlogo'>
                                <img src='Images/myntra.png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3'>
                                <div className='d-flex'>
                                    <h5 className='flex-grow-1'>Nike</h5>
                                    <img src='Images/arrow_up_.svg' height={15} />
                                </div>
                                <p className='mb-0'>upto 70% cashback, 4 coupons,
                                    2 Prize Draws</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={{ span: 12 }} className="mb-3">
                        <Card className="searchedResult">
                            <div className='Brandlogo'>
                                <img src='Images/myntra.png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3'>
                                <div className='d-flex'>
                                    <h5 className='flex-grow-1'>Nike</h5>
                                    <img src='Images/arrow_up_.svg' height={15} />
                                </div>
                                <p className='mb-0'>upto 70% cashback, 4 coupons,
                                    2 Prize Draws</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={{ span: 12 }} className="mb-3">
                        <Card className="searchedResult">
                            <div className='Brandlogo'>
                                <img src='Images/myntra.png' height={50} />
                            </div>
                            <div className='flex-grow-1 pl-3'>
                                <div className='d-flex'>
                                    <h5 className='flex-grow-1'>Nike</h5>
                                    <img src='Images/arrow_up_.svg' height={15} />
                                </div>
                                <p className='mb-0'>upto 70% cashback, 4 coupons,
                                    2 Prize Draws</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
            {/* ============trending search Results============ */}

        </div>
    )
}
