import React, { } from "react";
// import { } from "antd";
import "./index.css";
import { Link } from "react-router-dom";
import TrendingBrands from "../TrendingBrands/TrendingBrands";


export default function TopMenu({ mobileView }) {
    return (
        <div className="customSelectMenu">
            <div className="menuHeader">
                <img className="filledCategory" src="/images/categories.svg" />
                <img className="outlineCategory" src="/images/category_icon_outline.svg" />
                {
                    mobileView === true ?
                        <>
                            <span>Categories</span>
                            <span>
                                <svg x="0px" y="0px"
                                    width="9px" height="5px" viewBox="0 0 9 5" >
                                    <path fill="none" stroke="#120078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8,1L4.387,4L1,1" />
                                </svg>
                            </span>
                        </> : ''
                }

            </div>

            <div className="menuItem">
                <ul className="category">
                    <li className="mainListItem"><Link to="">All Brands</Link></li>
                    <li className="mainListItem"><Link to="">All Offers</Link></li>
                    <li className="hr"></li>
                    <li><Link to="">Fashion</Link>
                        <ul className="sub-category">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Clothing and Apparel</Link></li>
                            <li><Link to="">Accessories</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Travel</Link>
                        <ul className="sub-category">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Clothing and Apparel</Link></li>
                            <li><Link to="">Accessories</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Health & Beauty</Link>
                        <ul className="sub-category">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Clothing and Apparel</Link></li>
                            <li><Link to="">Accessories</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Technology</Link>
                        <ul className="sub-category">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Clothing and Apparel</Link></li>
                            <li><Link to="">Accessories</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Home</Link>
                        <ul className="sub-category">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Clothing and Apparel</Link></li>
                            <li><Link to="">Accessories</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Babies & Kids</Link>
                        <ul className="sub-category">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Clothing and Apparel</Link></li>
                            <li><Link to="">Accessories</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Sports & Outdoors</Link>
                        <ul className="sub-category">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Clothing and Apparel</Link></li>
                            <li><Link to="">Accessories</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Finance</Link>
                        <ul className="sub-category">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Clothing and Apparel</Link></li>
                            <li><Link to="">Accessories</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Leisure</Link>
                        <ul className="sub-category">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Clothing and Apparel</Link></li>
                            <li><Link to="">Accessories</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Gifts</Link>
                        <ul className="sub-category">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Clothing and Apparel</Link></li>
                            <li><Link to="">Accessories</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Utilities</Link>
                        <ul className="sub-category">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Clothing and Apparel</Link></li>
                            <li><Link to="">Accessories</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Others</Link>
                        <ul className="sub-category">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Clothing and Apparel</Link></li>
                            <li><Link to="">Accessories</Link></li>
                        </ul>
                    </li>
                </ul>
                <div>
                    <ul className="sub-category">
                        <li><Link to="">Fashion</Link></li>
                        <li><Link to="">Footwear</Link></li>
                        <li><Link to="">Clothing and Apparel</Link></li>
                        <li><Link to="">Accessories</Link></li>
                    </ul>
                    <div className="productMenu">
                        <h4 className="fw-bold my-3">Recommended Brands</h4>
                        <TrendingBrands span={8} />
                    </div>
                </div>
            </div>
        </div>

    )
}
