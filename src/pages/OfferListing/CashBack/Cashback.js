import React, { useState } from 'react'
// import Heading from '../../components/Heading/Heading'
import { Row, Col, Card, Button } from 'antd'
import "./index.css"
import { Link } from 'react-router-dom'
import Heading from '../../../components/Heading/Heading'
import ModalComp from '../../../components/Modals/ModalComp'
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
export default function Cashback({cashbackList}) {
    console.log(allTredingOffers);
    // const [dataArr,] = useState(allTredingOffers)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // console.log("cashbackList.........", cashbackList)

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
                            <h5 className="fw-bold purpleText">Your code has been successfully
                                copied to the clipboard</h5>

                        </div>
                    </div>
                }
            />
            <Heading
                HeadingText="Cashback"

            />

            <Row align="middle" className="" justify="space-around" gutter={30}>
                {cashbackList && cashbackList.map((item, i) =>
                    <Col key={i} className="deals_box featuredOffers mb-4" span={12} lg={{ span: 24 }}>
                        <Card
                            className="deals_container popularOffers"
                            actions={[

                            ]}
                        >
                            <div className="d-lg-flex w-100 ">
                                <div className=' d-lg-flex d-none'>
                                    <div className='cashbackImg'>
                                        <h4 className='mb-0'>30%</h4>
                                    </div>
                                </div>
                                <Row className='flex-grow-1'>
                                    <Row justify='between' align='stretch' className="flex-grow-1 flex-nowrap">
                                        <div className='d-flex flex-grow-1'>
                                            <div className=''>
                                                <div className="w-100 align-items-center justify-content-between  d-lg-flex d-none">
                                                    <p className="mb-0">Generic  </p>
                                                    {/* <p className="mb-0 viewAllOffer">{item.viewAll}</p> */}
                                                </div>
                                                {/* <div className=' d-lg-flex d-none'>
                                                    <img className="dealicon_img_frame_lg_mobile" src={item.image} />
                                                </div> */}
                                                <p className="deals_title mt-0">{
                                                    item.productMetaData.map((element)=>{
                                                        if(element.key === "productDescription") {
                                                            return element.value
                                                        }
                                                    })
                                                }</p>
                                                <p className='text-muted h5 d-block d-lg-none' style={{ fontWeight: 300 }}>Upfront cost must be £50+</p>
                                            </div>

                                        </div>

                                    </Row>
                                    <Row className="d-lg-none d-flex cashback_info w-100">upto 11% cashback</Row>

                                    <Row align='center' className='w-100 mt-auto d-lg-flex d-none' justify='between'>
                                        <Row key="time" className="">
                                            <Link to='' className='d-flex align-items-center mr-3'> Show Details</Link>
                                            {/* <span className='d-flex align-items-center'> <FiClock /> &nbsp; {item.time}</span> */}
                                        </Row>
                                        <Button type="primary" className="px-lg-5 px-3 ml-auto" onClick={() => showModal()}>Go to site</Button>

                                    </Row>
                                </Row>

                            </div>
                        </Card>
                    </Col>
                )}
            </Row>
        </>
    )
}


// site wide
// category