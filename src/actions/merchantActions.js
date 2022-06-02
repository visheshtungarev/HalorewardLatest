import { constVariable } from "../constants/String";
import env from "../enviroment";
import {
  Get_Call,
  Patch_call,
  Post_call,
  Put_call
} from "../network/networkmanager";

const values = env();
const getMerchantAction = async (payload, callBack) => {
  const { merchantquerry } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(`${merchantquerry}/merchants`, payload);
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

const getReviewMerchantsByClientId = async (payload, callBack) => {
  //   {
  //     fetchReviewMerchantsByClientId(clientId: "1") {
  //         merchantId
  //         merchantName
  //         status
  //         provider
  //         supplierName

  //     }
  // }

  const { merchantquerry } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(`${merchantquerry}/merchants`, payload);
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

const createMerchantAction = async (payload, callBack) => {
  const { merchantService } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(
      `${merchantService}/merchants`,
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

const updateMerchantAction = async (payload, callBack) => {
  const { merchantService } = values;
  try {
    let response = await Put_call(
      `${merchantService}/merchants`,
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

const publishMerchantAction = async (payload, callBack) => {
  //   {
  //     "merchantId": 2,
  //     "siteId": 1,
  //     "clientId": 1,
  //     "status":"Enabled"

  // }
  const { merchantService } = values;
  try {
    let response = await Patch_call(
      `${merchantService}/merchants`,
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

const getCategoriesByClientIDAction = async (payload, callBack) => {
  //   {
  //     categories(siteId: 1 ,  activeMerchant: true, activeCategory: true )  {
  //         categoryId
  //         name
  //         description
  //         status
  //         subCategories{
  //             categoryId
  //             name
  //             description
  //             status
  //         }
  //     }
  // }
  const { getCategoriesByClientID } = values;
  try {
    //start loader with dispatch
    let response = await Get_Call(
      `${getCategoriesByClientID}/clients/1/categories`,
      payload
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

const getCategories = async (payload, callBack) => {
  const { merchantquerry } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(`${merchantquerry}/categories`, payload);
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

const getBrandsByClientIDAction = async (payload, callBack) => {
  //   {

  //     brands(siteId: 1, contentType: ["cashback"], orderBy: { name: "asc" }) {
  //         merchantId
  //         rank
  //         merchantName
  //         description
  //         shortTitle
  //         status
  //         customerRebate
  //         onCard
  //         merchantLogo1
  //         contentTypes {
  //             name
  //             size
  //         }
  //         productsByContentType {
  //             contentType
  //             products {
  //                 productId
  //                 title
  //                 contentType
  //                 status
  //                 productName
  //                 productLogo
  //             }
  //         }
  //     }
  // }

  const { getCategoriesByClientID } = values;
  try {
    //start loader with dispatch
    let response = await Get_Call(
      `${getCategoriesByClientID}/clients/1/brands`,
      payload
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

const updateCategoriesStatusAction = async (payload, callBack) => {
  const { productsCategories } = values;
  try {
    let response = await Put_call(
      `${productsCategories}/categories`,
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

const getMerchantsById = async (payload, callBack) => {
  //   {
  //     merchantsById(id: [2]) {
  //         merchantId
  //         merchantName
  //         status
  //         provider
  //         supplierName

  //     }
  // }
  const { merchantquerry } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(`${merchantquerry}/merchants`, payload);
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

export {
  getMerchantAction,
  createMerchantAction,
  updateMerchantAction,
  publishMerchantAction,
  getCategoriesByClientIDAction,
  getBrandsByClientIDAction,
  updateCategoriesStatusAction,
  getMerchantsById,
  getCategories,
  getReviewMerchantsByClientId
};
