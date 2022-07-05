import React,{useState} from 'react';
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import Accountcardcontainer from './Accountcardcontainer';





const AccountSearchOffer = () => {
    const cardDetails = [
        {
            title:'Flipkart',
            subTitle:'Earn 5% cash rewards .....',
            imagePath:'/images/myntra.png',
            onchnageFunc:onChange
        },
        {
            title:'Flipkart',
            subTitle:'Earn 5% cash rewards .....',
            imagePath:'/images/myntra.png',
            onchnageFunc:onChange
        }
    ]
    
    const [cardDetailsArr] = useState(cardDetails);
    return (
        <div className='account-searchbox'>
            <div className='seacrhbox'>
                <div className='search-icon'>
                    <SearchOutlined />
                </div>
                <Input />
            </div>
            <div className='offer-description'>
                {
                    cardDetailsArr && cardDetailsArr.map((item,i) => 
                            <Accountcardcontainer key={i}
                                title={item.title}
                                subTitle={item.subTitle}
                                imagePath={item.imagePath}
                                onchnageFunc={item.onchnageFunc}
                            />
                    )
                }
                
            </div>
        </div>
    )
}
function onChange(checked) {
    console.log(`switch to ${checked}`);
}
export default AccountSearchOffer;