import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";


// const data = 
export default function Breadcurms({ data }) {
    const [currentRoute,] = useState(data)

    return (
        <div className='breadcrums' >
            {
                currentRoute && currentRoute.map((item, i) => {
                    return (
                        <Link key={i} to={item.pageLink}>{item.pageName}</Link>
                    )
                })

            }
        </div >
    )
}
