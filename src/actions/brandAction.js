import {
  BRANDENTER,
  BRANDLIST,
  BRANDSEARCH,
  GETFAVOURITEBRAND,
  GETTOGGLE,
  RESETBRAND
} from "../Constants/ActionsConstants";
// import { constVariable } from "../constants/String";
import env from "../enviroment";
import { Post_call } from "../network/networkmanager";

const values = env();
const { featureOfferQuery, getCategoriesByClientID } = values;

export const brandSearchAction = (name, actionType) => async (dispatch) => {
  var raw = `{
    brandsByName(name: "${name}") {
        merchantId
        merchantRank
        merchantName
        totalProductCount
        merchantDescription
        status
        shortTitle
        onCard
        provider
        customerMaxRebate
        merchantUrl
        products {
            productId
        }
        contentTypes {
            name
            size
        }
    }
  }`;

  try {
    let response = await Post_call(
      `${featureOfferQuery}/1/brands/byName`,
      raw,
      false
    );
    if (response.status === 200) {
      let filterArray = [];
      response?.data?.map((item) => {
        if (
          item?.contentTypes &&
          (item.contentTypes.length > 0) &
            (item.contentTypes.filter((content) => parseInt(content.size) > 0)
              .length >
              0)
        ) {
          filterArray.push(item);
        }
      });
      if (actionType === "search") {
        dispatch({
          type: BRANDSEARCH,
          payload: filterArray
        });
      }
      if (actionType === "enter") {
        dispatch({
          type: BRANDENTER,
          payload: filterArray
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
        payload: response.data
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
    payload: ""
  });
};

export const getFavouriteBrand = (data) => async (dispatch) => {
  dispatch({
    type: GETFAVOURITEBRAND,
    payload: data
  });
};

export const toggleCategory = (data) => async (dispatch) => {
  alert("hello");
  console.log("data", data);
  dispatch({
    type: GETTOGGLE,
    payload: data
  });
};
