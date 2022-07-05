import React from "react";

const BrandTile = ({ imagePath, title, data, date }) => {
    return (
        <div className="brand-detail-wrapper">

            <div className="brand-detail">
                <div className="brand-icon">
                    <img src={imagePath} alt="brand-logo" />
                </div>
                <label>{title}</label>
                <div className="brand-id">
                    {date}
                </div>
            </div>
            <div className="form-container">
                <form>
                    {/* <div className="form-unit w-50">
                        <label>Order Date</label>
                        <input type="text" value="April 22, 2021" />
                    </div>
                    <div className="form-unit w-50">
                        <label>Order Date</label>
                        <label className="confirmed status">Confirmed</label>
                    </div>
                    <div className="form-unit w-50">
                        <label>Order Date</label>
                        <input type="text" value="April 22, 2021" />
                    </div>
                    <div className="form-unit w-50">
                        <label>Order Date</label>
                        <input type="text" value="April 22, 2021" />
                    </div> */}

                    {data && data.map((item, i) =>
                        <div className="form-unit w-50" key={i}>
                            <label>{item.label}</label>
                            {item.status 
                            ? 
                            <label className={"status " + item.status}>{item.status}</label>
                            :
                            <input type="text" value="April 22, 2021" />
                            }
                            
                        </div>
                    )}

                </form>
            </div>

        </div>
    )
}
export default BrandTile;