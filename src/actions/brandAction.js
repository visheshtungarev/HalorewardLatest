import {
  BRANDENTER,
  BRANDLIST,
  BRANDSEARCH,
  GETFAVOURITEBRAND,
  RESETBRAND,
} from "../Constants/ActionsConstants";
// import { constVariable } from "../constants/String";
import env from "../enviroment";
import { Post_call } from "../network/networkmanager";

const values = env();
const { merchantquerry, getCategoriesByClientID } = values;

export const brandSearchAction = (payload, actionType) => async (dispatch) => {
  var raw = `{\n    merchantsByName(merchantName: "${payload}") {\n        merchantId\n        merchantName\n        status\n        rewardType\n        provider\n        categories\n        merchantRank\n        merchantLogo1\n        merchantUrl\n        merchantImage1\n    }\n}\n`;
  try {
    let response = await Post_call(`${merchantquerry}/merchants`, raw, false);
    if (response.status === 200) {
      if (actionType === "search") {
        dispatch({
          type: BRANDSEARCH,
          payload: response.data,
        });
      }
      if (actionType === "enter") {
        dispatch({
          type: BRANDENTER,
          payload: response.data,
        });
      }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const brandListAction = (payload) => async (dispatch) => {
  console.log(payload);
  var data =
    "{\n    brands(siteId: 1) {\n        merchantId\n        merchantRank\n        merchantName\n        status\n        onCard\n        provider\n        modifiedDate\n        customerRebate\n        merchantLogo1\n        merchantUrl\n        categories {\n            categoryId\n            name\n        }\n        contentTypes {\n            name\n            size\n        }\n    }\n}\n\n";
  try {
    let response = await Post_call(
      `${getCategoriesByClientID}/clients/1/brands`,
      data,
      false
    );
    if (response.status === 200) {
      dispatch({
        type: BRANDLIST,
        payload: response.data,
      });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const resetMerchantAction = (dispatch) => {
  dispatch({
    type: RESETBRAND,
    payload: "",
  });
};

export const getFavouriteBrand = (data) => async (dispatch) => {
  dispatch({
    type: GETFAVOURITEBRAND,
    payload: data,
  });
};
