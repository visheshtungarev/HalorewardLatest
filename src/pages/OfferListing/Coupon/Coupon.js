import React, { useState } from 'react'
// import Heading from '../../components/Heading/Heading'
import { FiClock } from 'react-icons/fi'
import { Row, Col, Card, Button } from 'antd'
import "./index.css"
// import { Link } from 'react-router-dom'
import Heading from '../../../components/Heading/Heading'
import ModalComp from '../../../components/Modals/ModalComp'
import { useNavigate } from 'react-router-dom'

const allTredingOffers = [
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        tag: 'Generic',
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
        time: "1d 2h 21m"

    },
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        tag: 'Site wide',
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
        time: "1d 2h 21m"

    },
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        tag: 'Category',
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
        time: "1d 2h 21m"

    },
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        tag: 'Category',
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
        time: "1d 2h 21m"

    },
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        tag: 'Generic',
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
        time: "1d 2h 21m"

    },
    {

        image: "/Images/nykaa.png",
        title: "Nykaa",
        tag: 'Generic',
        content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
        time: "1d 2h 21m"
    }
]


export default function Coupon({idname,couponList, brandName}) {
    console.log(allTredingOffers);
    // const [dataArr,] = useState(allTredingOffers)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    console.log("couponList", couponList)
    
    return (
        <>
            <ModalComp
                // modalTitle={'/Images/'}
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                ModalContent={
                    <div className="px-md-5 px-3">
                        <div className="text-center">
                            <div className="smLogo mx-auto">
                                <img src="/Images/myntra.png" />
                            </div>
                            <h6 className=" my-3">Myntra</h6>
                            <h6 style={{ fontWeight: 300 }} className="text-muted">One second please, we are just opening
                                Myntra site for you....</h6>
                            <img className="my-4" src="Images/redirecting.svg" height="150" />
                            <h5 className="fw-bold purpleText">Just shop as normal and
                                we take care of the rest</h5>
                            <h6 style={{ fontWeight: 300 }} className='text-muted mt-3' >Cashback will be automatically added to your
                                Hallorewards account after purchase.</h6>
                        </div>
                    </div>
                }
            />
          <div id={idname}>
          <Heading
                HeadingText="Coupon"
            // actionText="View All"
            // actionLink="/Trending-offers"
            />



            <Row align="middle" justify="space-around" gutter={30} >
                {couponList && couponList.map((item, i) =>
                    <Col key={i} className="deals_box featuredOffers mb-4" span={12} lg={{ span: 24 }}>
                        <Card
                            className="deals_container popularOffers"
                            actions={[

                            ]}
                        >
                            <div className="d-flex w-100 ">
                                <div className='d-none d-lg-block'>
                                    <div className='offerImg'>
                                    <img src="/Images/coupon.svg" height={40} />
                                        {/* <h4 className='mb-0'>30%</h4>
                                        <p className='mb-0'>off</p> */}
                                    </div>
                                </div>
                                <Row className='flex-grow-1'>
                                    <Row justify='between' align='stretch' className="flex-grow-1 flex-nowrap">
                                        <div className='d-flex flex-grow-1'>
                                            <div className=''>
                                                <div className="w-100 d-flex align-items-center justify-content-between">
                                                    <p className="mb-0 d-none d-lg-block">{item.subcontentType}</p>
                                                    {/* <p className="mb-0 viewAllOffer">{item.viewAll}</p> */}
                                                </div>
                                                <div className='d-none d-lg-block'>
                                                    <img className="dealicon_img_frame_lg_mobile " src={item.image} />
                                                </div>
                                                <p className="deals_title mt-0">{
                                                      item.productMetaData.map((element)=>{
                                                        if(element.key === "productDescription") {
                                                            return element.value
                                                        }
                                                    })
                                                }</p>
                                                <p className='text-muted h5 d-block d-lg-none mb-3' style={{ fontWeight: 300 }}>Expires Sep 4, 2021</p>

                                            </div>

                                        </div>
                                        <div className='justify-content-between align-items-between flex-column d-none d-lg-flex'>
                                            <div>
                                                <span className='couponCode '>FAB67527fg</span>
                                            </div>
                                        </div>
                                    </Row>

                                    <div className='couponDivider d-lg-none d-block'>
                                        <span></span>
                                    </div>

                                    <Row className="d-lg-none d-flex cashback_info w-100">upto 11% cashback</Row>

                                    <Row align='center' className='w-100 mt-auto' justify='between'>
                                        <Row key="time" className="d-none d-lg-flex">
                                            {/* <Link to='' className='d-flex align-items-center mr-3'> Show Details</Link> */}
                                            <a href='javascript:void(0)' className='d-flex align-items-center mr-3'  onClick={()=> navigate(`/coupon?id=${item.productId}`,{state: {item: item, name: brandName}})} >
                                            Show Details </a>
                                            <span className='d-flex align-items-center'> <FiClock /> 
                                            &nbsp;
                                             {/* {item.time} */}
                                             {item.expirationDate}
                                            </span>
                                        </Row>
                                        <Button type="primary" className="px-md-5 px-3 ml-auto d-none d-lg-block" onClick={showModal}>Copy & Shop</Button>

                                    </Row>
                                </Row>

                            </div>
                        </Card>
                    </Col>
                )}
            </Row>
          </div>
        </>
    )
}
