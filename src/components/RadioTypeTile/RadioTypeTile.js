import React from "react";
import { Button, Radio, } from "antd";
import './index.css';
const RadioTypetile = ({data, onClickFunc, btnText}) => {

    
    return (
        <div className="claim-type-wrapper">
            {
                data && data.map((item, i) =>
                    <div className="claim-unit" key={i}>
                        <div className="claimtype-content">
                            <div className="title">{item.title}</div>
                            <div className="sub-title">{item.subtitle} </div>
                        </div>
                        <div className="claimtype-radio">
                            <Radio></Radio>
                        </div>
                    </div>
                )
            }


            <div className="confirm-btn w-100" onClick={onClickFunc}>
                <Button type="primary">{btnText}</Button>
            </div>
        </div>
    )
}
export default RadioTypetile;