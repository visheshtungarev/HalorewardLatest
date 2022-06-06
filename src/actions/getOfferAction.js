
import env from "../enviroment";
// import { Get_Call } from "../network/networkmanager";

const values = env();
const { getCategoriesByClientID } = values;



const getOfferAction = (payload) => {
    let param = JSON.stringify(payload)
    let accessToken = localStorage.getItem("accessToken") ? localStorage.getItem("accessToken")  : "Basic YXBpLXVzZXI6YWRtaW4xMjM=";

    // const requestOptions = {
    //     method: 'GET',
    //     headers:{
    //         // Accept: "application/json",
    //         "Accept":"*/*",
    //         "Content-Type":"text/plain",
    //         Authorization: `Bearer ${accessToken}`,
    //         "tenant-id": '1',
    //       },
    //     body: JSON.stringify({query: payload}),
    // };

  fetch(`${getCategoriesByClientID}/clients/1/products?query=${param}`,{
    method: 'POST',
    headers:{
        // Accept: "application/json",
        "Accept":"*/*",
        "Content-Type":"text/plain",
        Authorization: `Bearer ${accessToken}`,
        "tenant-id": '1',
      },
   // body: JSON.stringify({query: payload}),
})
    .then((res) => res.json())
    .then((json) => {
      console.log("json ---> ", json);
      return json;
    })
    .catch((error) => {
      console.log(error);
    });
};

const offerArray = {
    "errors": [],
    "data": {
        "products": {
            "merchantId": 1,
            "merchantName": "Nike",
            "provider": "DX United",
            "categories": [
                {
                    "categoryId": 5,
                    "name": "Clothing"
                },
                {
                    "categoryId": 16,
                    "name": "Shoes & Handbags"
                },
                {
                    "categoryId": 10,
                    "name": "Gifts & Occassions"
                },
                {
                    "categoryId": 3,
                    "name": "Baby & Kids Wear"
                }
            ],
            "products": [
                {
                    "productId": "11",
                    "status": "Active",
                    "contentType": "Prize Draws",
                    "subcontentType": "instore",
                    "expirationDate": "2023-12-31",
                    "productMetaData": [
                        {
                            "key": "title",
                            "value": "Get up to 30% off"
                        },
                        {
                            "key": "productDescription",
                            "value": "Get up to 50% off"
                        },
                        {
                            "key": "keyTerms",
                            "value": "NA"
                        },
                        {
                            "key": "termsConditions",
                            "value": "NA"
                        },
                        {
                            "key": "productImage1",
                            "value": ""
                        },
                        {
                            "key": "productImage2",
                            "value": ""
                        },
                        {
                            "key": "productImage3",
                            "value": ""
                        },
                        {
                            "key": "productUrl",
                            "value": "https://www.google.com"
                        },
                        {
                            "key": "presentationStartDate",
                            "value": "2021-12-31"
                        },
                        {
                            "key": "presentationEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "notificationBody",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge1",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge2",
                            "value": "NA"
                        },
                        {
                            "key": "claimChannel",
                            "value": "NA"
                        },
                        {
                            "key": "claimType",
                            "value": "NA"
                        },
                        {
                            "key": "redeemType",
                            "value": "NA"
                        },
                        {
                            "key": "preclaimAdvise",
                            "value": "NA"
                        },
                        {
                            "key": "claimStartDate",
                            "value": "2022-01-30"
                        },
                        {
                            "key": "claimEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "code",
                            "value": "FAB67527FG"
                        },
                        {
                            "key": "claimLimit",
                            "value": "10.0"
                        },
                        {
                            "key": "claimLimitPeriod",
                            "value": "10.0"
                        }
                    ]
                },
                {
                    "productId": "12",
                    "status": "Active",
                    "contentType": "Prize Draws",
                    "subcontentType": "online",
                    "expirationDate": "2023-12-31",
                    "productMetaData": [
                        {
                            "key": "title",
                            "value": "Get up to 30% off"
                        },
                        {
                            "key": "productDescription",
                            "value": "Get up to 50% off"
                        },
                        {
                            "key": "keyTerms",
                            "value": "NA"
                        },
                        {
                            "key": "termsConditions",
                            "value": "NA"
                        },
                        {
                            "key": "productImage1",
                            "value": ""
                        },
                        {
                            "key": "productImage2",
                            "value": ""
                        },
                        {
                            "key": "productImage3",
                            "value": ""
                        },
                        {
                            "key": "productUrl",
                            "value": "https://www.google.com"
                        },
                        {
                            "key": "presentationStartDate",
                            "value": "2021-12-31"
                        },
                        {
                            "key": "presentationEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "notificationBody",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge1",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge2",
                            "value": "NA"
                        },
                        {
                            "key": "claimChannel",
                            "value": "NA"
                        },
                        {
                            "key": "claimType",
                            "value": "NA"
                        },
                        {
                            "key": "redeemType",
                            "value": "NA"
                        },
                        {
                            "key": "preclaimAdvise",
                            "value": "NA"
                        },
                        {
                            "key": "claimStartDate",
                            "value": "2022-01-30"
                        },
                        {
                            "key": "claimEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "code",
                            "value": "FAB67527FG"
                        },
                        {
                            "key": "claimLimit",
                            "value": "10.0"
                        },
                        {
                            "key": "claimLimitPeriod",
                            "value": "10.0"
                        }
                    ]
                },
                {
                    "productId": "1",
                    "status": "Active",
                    "contentType": "Coupons",
                    "subcontentType": "online",
                    "expirationDate": "2023-12-31",
                    "productMetaData": [
                        {
                            "key": "title",
                            "value": "All new customers can avail upto 11% off"
                        },
                        {
                            "key": "productDescription",
                            "value": "All new customers can avail upto 11% off"
                        },
                        {
                            "key": "keyTerms",
                            "value": "NA"
                        },
                        {
                            "key": "termsConditions",
                            "value": "NA"
                        },
                        {
                            "key": "productImage1",
                            "value": ""
                        },
                        {
                            "key": "productImage2",
                            "value": ""
                        },
                        {
                            "key": "productImage3",
                            "value": ""
                        },
                        {
                            "key": "productUrl",
                            "value": "https://www.google.com"
                        },
                        {
                            "key": "presentationStartDate",
                            "value": "2021-12-31"
                        },
                        {
                            "key": "presentationEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "notificationBody",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge1",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge2",
                            "value": "NA"
                        },
                        {
                            "key": "claimChannel",
                            "value": "NA"
                        },
                        {
                            "key": "claimType",
                            "value": "NA"
                        },
                        {
                            "key": "redeemType",
                            "value": "NA"
                        },
                        {
                            "key": "preclaimAdvise",
                            "value": "NA"
                        },
                        {
                            "key": "claimStartDate",
                            "value": "2022-01-30"
                        },
                        {
                            "key": "claimEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "code",
                            "value": "FAB67527FG"
                        },
                        {
                            "key": "claimLimit",
                            "value": "10.0"
                        },
                        {
                            "key": "claimLimitPeriod",
                            "value": "10.0"
                        }
                    ]
                },
                {
                    "productId": "2",
                    "status": "Active",
                    "contentType": "Coupons",
                    "subcontentType": "online",
                    "expirationDate": "2023-12-31",
                    "productMetaData": [
                        {
                            "key": "title",
                            "value": "Get up to 20% off"
                        },
                        {
                            "key": "productDescription",
                            "value": "Get up to 20% off"
                        },
                        {
                            "key": "keyTerms",
                            "value": "NA"
                        },
                        {
                            "key": "termsConditions",
                            "value": "NA"
                        },
                        {
                            "key": "productImage1",
                            "value": ""
                        },
                        {
                            "key": "productImage2",
                            "value": ""
                        },
                        {
                            "key": "productImage3",
                            "value": ""
                        },
                        {
                            "key": "productUrl",
                            "value": "https://www.google.com"
                        },
                        {
                            "key": "presentationStartDate",
                            "value": "2021-12-31"
                        },
                        {
                            "key": "presentationEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "notificationBody",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge1",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge2",
                            "value": "NA"
                        },
                        {
                            "key": "claimChannel",
                            "value": "NA"
                        },
                        {
                            "key": "claimType",
                            "value": "NA"
                        },
                        {
                            "key": "redeemType",
                            "value": "NA"
                        },
                        {
                            "key": "preclaimAdvise",
                            "value": "NA"
                        },
                        {
                            "key": "claimStartDate",
                            "value": "2022-01-30"
                        },
                        {
                            "key": "claimEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "code",
                            "value": "FAB67527FG"
                        },
                        {
                            "key": "claimLimit",
                            "value": "10.0"
                        },
                        {
                            "key": "claimLimitPeriod",
                            "value": "10.0"
                        }
                    ]
                },
                {
                    "productId": "3",
                    "status": "Active",
                    "contentType": "Coupons",
                    "subcontentType": "instore",
                    "expirationDate": "2023-12-31",
                    "productMetaData": [
                        {
                            "key": "title",
                            "value": "Get up to 20% off"
                        },
                        {
                            "key": "productDescription",
                            "value": "Get up to 20% off"
                        },
                        {
                            "key": "keyTerms",
                            "value": "NA"
                        },
                        {
                            "key": "termsConditions",
                            "value": "NA"
                        },
                        {
                            "key": "productImage1",
                            "value": ""
                        },
                        {
                            "key": "productImage2",
                            "value": ""
                        },
                        {
                            "key": "productImage3",
                            "value": ""
                        },
                        {
                            "key": "productUrl",
                            "value": "https://www.google.com"
                        },
                        {
                            "key": "presentationStartDate",
                            "value": "2021-12-31"
                        },
                        {
                            "key": "presentationEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "notificationBody",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge1",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge2",
                            "value": "NA"
                        },
                        {
                            "key": "claimChannel",
                            "value": "NA"
                        },
                        {
                            "key": "claimType",
                            "value": "NA"
                        },
                        {
                            "key": "redeemType",
                            "value": "NA"
                        },
                        {
                            "key": "preclaimAdvise",
                            "value": "NA"
                        },
                        {
                            "key": "claimStartDate",
                            "value": "2022-01-30"
                        },
                        {
                            "key": "claimEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "code",
                            "value": "FAB67527FG"
                        },
                        {
                            "key": "claimLimit",
                            "value": "10.0"
                        },
                        {
                            "key": "claimLimitPeriod",
                            "value": "10.0"
                        }
                    ]
                },
                {
                    "productId": "4",
                    "status": "Active",
                    "contentType": "Coupons",
                    "subcontentType": "instore",
                    "expirationDate": "2023-12-31",
                    "productMetaData": [
                        {
                            "key": "title",
                            "value": "Get up to 50% off"
                        },
                        {
                            "key": "productDescription",
                            "value": "Get up to 50% off"
                        },
                        {
                            "key": "keyTerms",
                            "value": "NA"
                        },
                        {
                            "key": "termsConditions",
                            "value": "NA"
                        },
                        {
                            "key": "productImage1",
                            "value": ""
                        },
                        {
                            "key": "productImage2",
                            "value": ""
                        },
                        {
                            "key": "productImage3",
                            "value": ""
                        },
                        {
                            "key": "productUrl",
                            "value": "https://www.google.com"
                        },
                        {
                            "key": "presentationStartDate",
                            "value": "2021-12-31"
                        },
                        {
                            "key": "presentationEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "notificationBody",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge1",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge2",
                            "value": "NA"
                        },
                        {
                            "key": "claimChannel",
                            "value": "NA"
                        },
                        {
                            "key": "claimType",
                            "value": "NA"
                        },
                        {
                            "key": "redeemType",
                            "value": "NA"
                        },
                        {
                            "key": "preclaimAdvise",
                            "value": "NA"
                        },
                        {
                            "key": "claimStartDate",
                            "value": "2022-01-30"
                        },
                        {
                            "key": "claimEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "code",
                            "value": "FAB67527FG"
                        },
                        {
                            "key": "claimLimit",
                            "value": "10.0"
                        },
                        {
                            "key": "claimLimitPeriod",
                            "value": "10.0"
                        }
                    ]
                },
                {
                    "productId": "5",
                    "status": "Active",
                    "contentType": "Cashbacks",
                    "subcontentType": "online",
                    "expirationDate": "2023-12-31",
                    "productMetaData": [
                        {
                            "key": "title",
                            "value": "Get up to 40% off"
                        },
                        {
                            "key": "productDescription",
                            "value": "Get up to 50% off"
                        },
                        {
                            "key": "keyTerms",
                            "value": "NA"
                        },
                        {
                            "key": "termsConditions",
                            "value": "NA"
                        },
                        {
                            "key": "productImage1",
                            "value": ""
                        },
                        {
                            "key": "productImage2",
                            "value": ""
                        },
                        {
                            "key": "productImage3",
                            "value": ""
                        },
                        {
                            "key": "productUrl",
                            "value": "https://www.google.com"
                        },
                        {
                            "key": "presentationStartDate",
                            "value": "2021-12-31"
                        },
                        {
                            "key": "presentationEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "notificationBody",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge1",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge2",
                            "value": "NA"
                        },
                        {
                            "key": "claimChannel",
                            "value": "NA"
                        },
                        {
                            "key": "claimType",
                            "value": "NA"
                        },
                        {
                            "key": "redeemType",
                            "value": "NA"
                        },
                        {
                            "key": "preclaimAdvise",
                            "value": "NA"
                        },
                        {
                            "key": "claimStartDate",
                            "value": "2022-01-30"
                        },
                        {
                            "key": "claimEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "code",
                            "value": "FAB67527FG"
                        },
                        {
                            "key": "claimLimit",
                            "value": "10.0"
                        },
                        {
                            "key": "claimLimitPeriod",
                            "value": "10.0"
                        }
                    ]
                },
                {
                    "productId": "6",
                    "status": "Active",
                    "contentType": "Cashbacks",
                    "subcontentType": "online",
                    "expirationDate": "2023-12-31",
                    "productMetaData": [
                        {
                            "key": "title",
                            "value": "Get up to 40% off"
                        },
                        {
                            "key": "productDescription",
                            "value": "Get up to 50% off"
                        },
                        {
                            "key": "keyTerms",
                            "value": "NA"
                        },
                        {
                            "key": "termsConditions",
                            "value": "NA"
                        },
                        {
                            "key": "productImage1",
                            "value": ""
                        },
                        {
                            "key": "productImage2",
                            "value": ""
                        },
                        {
                            "key": "productImage3",
                            "value": ""
                        },
                        {
                            "key": "productUrl",
                            "value": "https://www.google.com"
                        },
                        {
                            "key": "presentationStartDate",
                            "value": "2021-12-31"
                        },
                        {
                            "key": "presentationEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "notificationBody",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge1",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge2",
                            "value": "NA"
                        },
                        {
                            "key": "claimChannel",
                            "value": "NA"
                        },
                        {
                            "key": "claimType",
                            "value": "NA"
                        },
                        {
                            "key": "redeemType",
                            "value": "NA"
                        },
                        {
                            "key": "preclaimAdvise",
                            "value": "NA"
                        },
                        {
                            "key": "claimStartDate",
                            "value": "2022-01-30"
                        },
                        {
                            "key": "claimEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "code",
                            "value": "FAB67527FG"
                        },
                        {
                            "key": "claimLimit",
                            "value": "10.0"
                        },
                        {
                            "key": "claimLimitPeriod",
                            "value": "10.0"
                        }
                    ]
                },
                {
                    "productId": "7",
                    "status": "Active",
                    "contentType": "Cashbacks",
                    "subcontentType": "instore",
                    "expirationDate": "2023-12-31",
                    "productMetaData": [
                        {
                            "key": "title",
                            "value": "Get up to 30% off"
                        },
                        {
                            "key": "productDescription",
                            "value": "Get up to 50% off"
                        },
                        {
                            "key": "keyTerms",
                            "value": "NA"
                        },
                        {
                            "key": "termsConditions",
                            "value": "NA"
                        },
                        {
                            "key": "productImage1",
                            "value": ""
                        },
                        {
                            "key": "productImage2",
                            "value": ""
                        },
                        {
                            "key": "productImage3",
                            "value": ""
                        },
                        {
                            "key": "productUrl",
                            "value": "https://www.google.com"
                        },
                        {
                            "key": "presentationStartDate",
                            "value": "2021-12-31"
                        },
                        {
                            "key": "presentationEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "notificationBody",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge1",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge2",
                            "value": "NA"
                        },
                        {
                            "key": "claimChannel",
                            "value": "NA"
                        },
                        {
                            "key": "claimType",
                            "value": "NA"
                        },
                        {
                            "key": "redeemType",
                            "value": "NA"
                        },
                        {
                            "key": "preclaimAdvise",
                            "value": "NA"
                        },
                        {
                            "key": "claimStartDate",
                            "value": "2022-01-30"
                        },
                        {
                            "key": "claimEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "code",
                            "value": "FAB67527FG"
                        },
                        {
                            "key": "claimLimit",
                            "value": "10.0"
                        },
                        {
                            "key": "claimLimitPeriod",
                            "value": "10.0"
                        }
                    ]
                },
                {
                    "productId": "8",
                    "status": "Active",
                    "contentType": "Cashbacks",
                    "subcontentType": "online",
                    "expirationDate": "2023-12-31",
                    "productMetaData": [
                        {
                            "key": "title",
                            "value": "Get up to 30% off"
                        },
                        {
                            "key": "productDescription",
                            "value": "Get up to 50% off"
                        },
                        {
                            "key": "keyTerms",
                            "value": "NA"
                        },
                        {
                            "key": "termsConditions",
                            "value": "NA"
                        },
                        {
                            "key": "productImage1",
                            "value": ""
                        },
                        {
                            "key": "productImage2",
                            "value": ""
                        },
                        {
                            "key": "productImage3",
                            "value": ""
                        },
                        {
                            "key": "productUrl",
                            "value": "https://www.google.com"
                        },
                        {
                            "key": "presentationStartDate",
                            "value": "2021-12-31"
                        },
                        {
                            "key": "presentationEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "notificationBody",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge1",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge2",
                            "value": "NA"
                        },
                        {
                            "key": "claimChannel",
                            "value": "NA"
                        },
                        {
                            "key": "claimType",
                            "value": "NA"
                        },
                        {
                            "key": "redeemType",
                            "value": "NA"
                        },
                        {
                            "key": "preclaimAdvise",
                            "value": "NA"
                        },
                        {
                            "key": "claimStartDate",
                            "value": "2022-01-30"
                        },
                        {
                            "key": "claimEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "code",
                            "value": "FAB67527FG"
                        },
                        {
                            "key": "claimLimit",
                            "value": "10.0"
                        },
                        {
                            "key": "claimLimitPeriod",
                            "value": "10.0"
                        }
                    ]
                },
                {
                    "productId": "9",
                    "status": "Active",
                    "contentType": "Prize Draws",
                    "subcontentType": "online",
                    "expirationDate": "2023-12-31",
                    "productMetaData": [
                        {
                            "key": "title",
                            "value": "Get up to 30% off"
                        },
                        {
                            "key": "productDescription",
                            "value": "Get up to 50% off"
                        },
                        {
                            "key": "keyTerms",
                            "value": "NA"
                        },
                        {
                            "key": "termsConditions",
                            "value": "NA"
                        },
                        {
                            "key": "productImage1",
                            "value": ""
                        },
                        {
                            "key": "productImage2",
                            "value": ""
                        },
                        {
                            "key": "productImage3",
                            "value": ""
                        },
                        {
                            "key": "productUrl",
                            "value": "https://www.google.com"
                        },
                        {
                            "key": "presentationStartDate",
                            "value": "2021-12-31"
                        },
                        {
                            "key": "presentationEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "notificationBody",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge1",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge2",
                            "value": "NA"
                        },
                        {
                            "key": "claimChannel",
                            "value": "NA"
                        },
                        {
                            "key": "claimType",
                            "value": "NA"
                        },
                        {
                            "key": "redeemType",
                            "value": "NA"
                        },
                        {
                            "key": "preclaimAdvise",
                            "value": "NA"
                        },
                        {
                            "key": "claimStartDate",
                            "value": "2022-01-30"
                        },
                        {
                            "key": "claimEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "code",
                            "value": "FAB67527FG"
                        },
                        {
                            "key": "claimLimit",
                            "value": "10.0"
                        },
                        {
                            "key": "claimLimitPeriod",
                            "value": "10.0"
                        }
                    ]
                },
                {
                    "productId": "10",
                    "status": "Active",
                    "contentType": "Prize Draws",
                    "subcontentType": "instore",
                    "expirationDate": "2023-12-31",
                    "productMetaData": [
                        {
                            "key": "title",
                            "value": "Get up to 30% off"
                        },
                        {
                            "key": "productDescription",
                            "value": "Get up to 50% off"
                        },
                        {
                            "key": "keyTerms",
                            "value": "NA"
                        },
                        {
                            "key": "termsConditions",
                            "value": "NA"
                        },
                        {
                            "key": "productImage1",
                            "value": ""
                        },
                        {
                            "key": "productImage2",
                            "value": ""
                        },
                        {
                            "key": "productImage3",
                            "value": ""
                        },
                        {
                            "key": "productUrl",
                            "value": "https://www.google.com"
                        },
                        {
                            "key": "presentationStartDate",
                            "value": "2021-12-31"
                        },
                        {
                            "key": "presentationEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "notificationBody",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge1",
                            "value": "NA"
                        },
                        {
                            "key": "displayBadge2",
                            "value": "NA"
                        },
                        {
                            "key": "claimChannel",
                            "value": "NA"
                        },
                        {
                            "key": "claimType",
                            "value": "NA"
                        },
                        {
                            "key": "redeemType",
                            "value": "NA"
                        },
                        {
                            "key": "preclaimAdvise",
                            "value": "NA"
                        },
                        {
                            "key": "claimStartDate",
                            "value": "2022-01-30"
                        },
                        {
                            "key": "claimEndDate",
                            "value": "2022-12-31"
                        },
                        {
                            "key": "code",
                            "value": "FAB67527FG"
                        },
                        {
                            "key": "claimLimit",
                            "value": "10.0"
                        },
                        {
                            "key": "claimLimitPeriod",
                            "value": "10.0"
                        }
                    ]
                }
            ]
        }
    },
    "extensions": null
}


export { getOfferAction, offerArray };

// Get_Call(`${getCategoriesByClientID}/clients/1/products`).then((response)=>{
//     if (response.status === 200) {
//         console.log(response)
//         return response;
//     }
// })

//   try {

//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
