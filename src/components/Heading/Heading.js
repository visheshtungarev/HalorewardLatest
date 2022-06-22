import React from 'react';
import { Row, Col } from 'antd';
import {
    RightOutlined
} from "@ant-design/icons";
import { Link } from 'react-router-dom';
import "./index.css";
export default function Heading({ HeadingText, subHeading, actionText, actionLink, filter, color }) {

    return (
        <Row className="headingFancy mt-md-4" align="middle" justify="space-between">
            {
                HeadingText ?
                    <Col className={color ? `list_title ${color}` : `list_title`}>
                        {HeadingText} 
                        {
                            subHeading ? <div className='subheading'>{subHeading}</div> : ''
                        }

                    </Col> : ''
            }

            {
                actionText && actionLink ?
                    <Col className="list_action">
                        <Link className={color ? `d-flex align-items-center ${color}` : `d-flex align-items-center`} to={actionLink}>{actionText}
                            <RightOutlined />
                        </Link>
                    </Col> : ''
            }
            {
                filter ?
                    <Col className='filterSection'>
                        {filter}
                    </Col> : ''
            }

        </Row>)
}
