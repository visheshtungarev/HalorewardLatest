import React from "react";

const PriceCard = ({logoPath,title,date,price,status,statusClass,iStatement,isProfit,openPopup}) => {
    return (
        <div className="tab-card" onClick={openPopup}>
            <div className="icon">
                <img src={logoPath} alt="logo"></img>
            </div>
            <div className="tab-info">
                <label className="title">{title}</label>
                <label className="date">{date}</label>
            </div>
            {
                iStatement ? 
                <>
                <div className="tab-status">
                    {
                        isProfit ? 
                        <label className="price profit">+{price}</label> 
                        : 
                        <label className="price loss">-{price}</label> 
                    }
                    
                </div>
                </>
                : 
                <>
                <div className="tab-status">
                    <label className="price">{price}</label>
                    <label className= {statusClass + ' status'}>{status}</label>
                </div>
                </>
            }
            
        </div>
    )
}

export default PriceCard;