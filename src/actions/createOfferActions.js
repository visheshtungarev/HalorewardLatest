import { constVariable } from "../constants/String";
import env from "../enviroment";
import { Patch_call, Post_call, Put_call } from "../network/networkmanager";

const values = env();

const creteOfferAction = async (payload, callBack) => {
  // {
  //   "productId": "100",
  //     "siteId":"1",
  //     "clientId": "1",
  //     "merchantId": "1",
  //     "categoryId": "1",
  //     "contentType": "coupon",
  //     "subcontentType":"online",
  //     "expirationDate": "2023-12-31",
  //     "metadata": {
  //         "title":"Get 20% off",
  //         "shortTitle":"flipkart",
  //         "productDescription":"abc",
  //         "keyTerms":"abc",
  //         "termsConditions":"abc",
  //         "productImage1":"",
  //         "productImage2":"",
  //         "productImage3":"",
  //         "productUrl":"https://ss/s",
  //         "presentationStartDate":"2021-12-31",
  //         "presentationEndDate":"2022-12-31",
  //         "notificationBody":"abc",
  //         "displayBadge1":"abc",
  //         "displayBadge2":"abc",
  //         "claimChannel":"abc",
  //         "claimType":"abc",
  //         "redeemType":"abc",
  //         "preclaimAdvise":"abc",
  //         "claimStartDate":"2022-01-30",
  //         "claimEndDate":"2022-12-31",
  //         "codes":"oneTime",
  //         "claimLimit":10,
  //         "claimLimitPeriod":10
  //     }
  // }
  const { productService } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(
      `${productService}/products?isWorkflow=true`, //update put
      payload,
      constVariable.POSTDATA
    );
    if (response.status === 200) {
      callBack(response.data);
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    //end the loader with dispatch
  }
};

const updateOfferAction = async (payload, callBack) => {
  const { productService } = values;
  try {
    //start loader with dispatch
    let response = await Put_call(
      `${productService}/products?isWorkflow=true`,
      payload,
      constVariable.POSTDATA
    );
    if (response.status === 200) {
      callBack(response.data);
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    //end the loader with dispatch
  }
};

const offerStatusAction = async (payload, callBack) => {
  //   {
  //     "merchantId": 2,
  //     "siteId": 1,
  //     "clientId": 1,
  //     "status":"Enabled"

  // }
  const { productService } = values;
  try {
    let response = await Patch_call(
      `${productService}/products/review/100/approve`,
      payload,
      constVariable.POSTDATA
    );
    if (response.status === 200) {
      callBack(response.data);
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
  }
};
//

export { creteOfferAction, updateOfferAction, offerStatusAction };
