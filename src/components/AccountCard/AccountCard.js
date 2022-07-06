import React from 'react';
import { Row, Col, Input,Switch } from 'antd';
export default function AccountCard({ label, value, option, type, showFunc, reverse, imagetext,imagepath,isswitch,onchnageFunc }) {
    return (
        // <Col className='deals_box trending_brands mb-4 px-2 text-left' span={span}>
        //     <Card className="deals_container account-profile">
        //         {
        //             data && data.map((item, i) => {
        //                 return (
        //                     <Row align="middle" key={i}>
        //                         <Col span={18}>
        //                             {
        //                                 item.reverse ?
        //                                     <>
        //                                         {
        //                                             item.imagepath ?
        //                                                 <>
        //                                                     <label>{item.imagetext ? <span className='imagepre-text'>{item.imagetext}</span> : ''}<img src={item.imagepath}></img></label>
        //                                                 </>
        //                                                 :
        //                                                 <>
        //                                                     <Input type={item.type} className="account-name" value={item.value} readOnly />
        //                                                     <label className="account-label ">{item.label}</label>
        //                                                 </>
        //                                         }


        //                                     </>
        //                                     :
        //                                     <>
        //                                         {
        //                                             item.imagepath ?
        //                                                 <>
        //                                                     <label >{item.imagetext ? <span className='imagepre-text'>{item.imagetext}</span> : ''}<img src={item.imagepath}></img></label>
        //                                                 </>
        //                                                 :
        //                                                 <>
        //                                                     <Input type={item.type} className="account-name" value={item.value} readOnly />
        //                                                     <label className="account-label ">{item.label}</label>
        //                                                 </>
        //                                         }
        //                                     </>

        //                             }

        //                         </Col>
        //                         <Col span={6}>
        //                             {
        //                                 item.switch ?
        //                                     <>
        //                                         <Switch defaultChecked onChange={onchnageFunc} />
        //                                     </>
        //                                     :
        //                                     <>
        //                                         <label className="text-right w-100 fw-500"><label className='showModal-label' onClick={item.showFunc}>{item.option}</label></label>
        //                                     </>
        //                             }
        //                         </Col>
        //                     </Row>
        //                 )
        //             })
        //         }
        //     </Card>
        // </Col>

        <Row align="middle">
            <Col span={18}>
                {
                    reverse ?
                        <>
                            {
                                imagepath ?
                                    <>
                                        <label>{imagetext ? <span className='imagepre-text'>{imagetext}</span> : ''}<img src={imagepath}></img></label>
                                    </>
                                    :
                                    <>
                                        <Input type={type} className="account-name" value={value} readOnly />
                                        <label className="account-label">{label}</label>
                                    </>
                            }

                        </> :
                        <>

                            {
                                imagepath ?
                                    <>
                                        <label>{imagetext ? <span className='imagepre-text'>{imagetext}</span> : ''}<img src={imagepath}></img></label>
                                    </>
                                    :
                                    <>
                                        <label className="account-label">{label}</label>
                                        <Input type={type} className="account-name" value={value} readOnly />
                                    </>
                            }

                        </>
                }

            </Col>
            <Col span={6}>
                {
                    isswitch ? 
                    <>
                    <Switch defaultChecked onChange={onchnageFunc} />
                    </>
                    :
                    <>
                    <label className="text-right w-100 fw-500"><label className='showModal-label' onClick={showFunc}>{option}</label></label>
                    </>
                }
                
            </Col>
        </Row>
    )
}
