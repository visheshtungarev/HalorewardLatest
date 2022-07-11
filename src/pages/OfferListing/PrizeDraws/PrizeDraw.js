import React, { useState } from "react";
import { FiClock } from "react-icons/fi";

// import Heading from '../../components/Heading/Heading'
import { Row, Col, Card, Button } from "antd";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Heading from "../../../components/Heading/Heading";
import ModalComp from "../../../components/Modals/ModalComp";

// import Badge from '../../../components/Badge/Badge';

const allTredingOffers = [
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    couponCode: "FAB67527fg",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
    tag: "Generic",
    time: "1d 2h 21m",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    couponCode: "FAB67527fg",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
    tag: "Generic",
    time: "1d 2h 21m",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    couponCode: "FAB67527fg",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
    tag: "Generic",
    time: "1d 2h 21m",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    couponCode: "FAB67527fg",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
    tag: "Generic",
    time: "1d 2h 21m",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    couponCode: "FAB67527fg",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
    tag: "Generic",
    time: "1d 2h 21m",
  },
  {
    image: "/Images/nykaa.png",
    title: "Nykaa",
    couponCode: "FAB67527fg",
    content: "upto 70% cashback, 4 coupons, 2 Prize Draw...",
    tag: "Generic",
    time: "1d 2h 21m",
  },
];

export default function PrizeDraw({
  idname,
  prizeList,
  brandName,
  merchantId,
}) {
  // const [dataArr,] = useState(allTredingOffers)
  console.log(allTredingOffers);
  const navigate = useNavigate();
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
              <h6 style={{ fontWeight: 300 }} className="text-dark">
                Win a chance to meet the Manchester United Team
              </h6>
              <img
                className="my-4"
                src="Images/prizeDraw_img.svg"
                height="150"
              />
              <h5 className="fw-bold purpleText">
                You have entered this prize draw!
              </h5>
              <h6 style={{ fontWeight: 300 }} className="text-muted mt-3">
                We will notify all the winners by
                <b className="d-block text-dark">Nov 10, 2021</b>
              </h6>
            </div>
          </div>
        }
      />

      <div id={idname}>
        <Heading
          HeadingText="Prize Draws"
          // actionText="View All"
          // actionLink="/Trending-offers"
        />

        <Row align="middle" className="" justify="space-around" gutter={30}>
          {prizeList &&
            prizeList.map((item, i) => (
              <Col
                key={i}
                className="deals_box featuredOffers mb-4"
                span={12}
                lg={{ span: 24 }}
              >
                <Card className="deals_container popularOffers" actions={[]}>
                  <div className="d-flex w-100 ">
                    <div className="prizeDraw_box">
                      {/* <div className='cashbackImg prizeDraw_box'> */}
                      <img className="" src="/Images/prize.svg" height={40} />
                      {/* </div> */}
                    </div>
                    <Row align="space-between" className="flex-grow-1">
                      <div className="">
                        <div className="w-100 d-lg-flex d-none align-items-center justify-content-between">
                          <p className=" mb-0">{item.subcontentType}</p>

                          <p className="mb-0 viewAllOffer">{item.viewAll}</p>
                        </div>
                        <div className="d-none d-lg-block">
                          <img
                            className="dealicon_img_frame_lg_mobile"
                            src={item.image}
                          />
                        </div>
                        <p className="deals_title mt-0">
                          {item.productMetaData.map((element) => {
                            if (element.key === "productDescription") {
                              return element.value;
                            }
                          })}
                        </p>
                        <p
                          className="text-muted h5 d-block d-lg-none mb-3"
                          style={{ fontWeight: 300 }}
                        >
                          Expires Sep 4, 2021
                        </p>
                      </div>
                      <Row
                        align="center"
                        className="w-100 mt-auto d-lg-flex d-none"
                        justify="between"
                      >
                        <Row key="time" className="">
                          <a
                            href="javascript:void(0)"
                            onClick={() =>
                              navigate(`/prizedraw?id=${item.productId}`, {
                                state: {
                                  item: item,
                                  name: brandName,
                                  ids: merchantId,
                                },
                              })
                            }
                            className="d-flex align-items-center mr-3"
                          >
                            {" "}
                            Show Details
                          </a>
                          <span className="d-flex align-items-center">
                            {" "}
                            <FiClock /> &nbsp; {item.expirationDate}
                          </span>
                        </Row>
                        <Button
                          type="primary"
                          className="px-md-5 px-3 ml-auto"
                          onClick={showModal}
                        >
                          Enter draw
                        </Button>
                      </Row>
                    </Row>
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
}
