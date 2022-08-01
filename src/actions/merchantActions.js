import { GETMERCHANTBYID } from "../Constants/ActionsConstants";
import env from "../enviroment";
import { Post_call } from "../network/networkmanager";

const values = env();

const getMerchantAction = (payload) => async (dispatch) => {
  const { merchantquerry } = values;

  var raw = `{
    merchantsById(id: [${payload}]) {
        merchantId 
        merchantName 
        merchantDescription 
        merchantRank 
        status 
        customerMaxRebate 
        provider
        externalMaxRebate 
        modifiedDate 
        merchantLogo1 
        merchantUrl 
        createdDate
    }
}`;
  try {
    //start loader with dispatch
    let response = await Post_call(`${merchantquerry}/merchants`, raw, false);
    dispatch({
      type: GETMERCHANTBYID,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getMerchantsById = async (id, callBack) => {
  const raw = `{
    merchantsById(id: [${id}]) {
        merchantId 
        merchantName 
        merchantDescription 
        merchantRank 
        status 
        customerMaxRebate 
        provider
        externalMaxRebate 
        modifiedDate 
        merchantLogo1 
        merchantUrl 
        createdDate
    }
  }`;

  const { merchantquerry } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(`${merchantquerry}/merchants`, raw);
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

export { getMerchantAction, getMerchantsById };
