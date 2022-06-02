import React, { useEffect, useState } from "react";
import "./index.css";
import { Row, Tabs } from "antd";


// import Badge from "../../components/Badge/Badge";
import Breadcurms from "../../../components/Breadcrums/Breadcurms";
import Won from "./Won/Won";
import AllDraws from "./All/AllDraws";
// import { render } from "@testing-library/react";
// const { Meta } = Card;



export default function SavedPrizeDraws() {
    const [, setOpenSidePanel] = useState(false)

    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
    }
    useEffect(() => {
        console.log(window.innerWidth)
        if (window.innerWidth > 993) {
            setOpenSidePanel(true)
        }
    }, [])
    return (
        <div className="home_container">
            <Row align="middle" className="list_view mb-0 pb-0">
                <Breadcurms
                    data={[{
                        pageName: 'Saved',
                        pageLink: '/saved'
                    }, {
                        pageName: 'Prize Draws',
                        pageLink: '/prize-draws'
                    }]} />
            </Row>
            <Tabs defaultActiveKey="1" className="whiteTab mt-4" onChange={callback}>

                <TabPane tab={<div className='d-flex align-items-center py-2'><h6 className='mb-0'>All</h6></div>} key="1">
                    <AllDraws />
                </TabPane>

                <TabPane tab={<div className='d-flex align-items-center py-2'><h6 className='mb-0'>Won</h6></div>} key="3">
                    <Won />
                </TabPane>
            </Tabs>

        </div>
    )
}
