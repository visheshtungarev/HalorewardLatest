import { GETCUSTOMERDETAIL } from "../Constants/ActionsConstants";
import { constVariable } from "../Constants/String";
import env from "../enviroment";
import { Post_call } from "../network/networkmanager";

const values = env();
const GETUSERACTION = async (payload, callBack) => {
  const { getUserWithCustomerID } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(
      getUserWithCustomerID,
      payload,
      constVariable.FETCHDATA
    );
    if (response.status === 200) {
      callBack(response.data);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const INVITEUSERACTION = async (payload, callBack) => {
  const { createUserAndRole } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(
      createUserAndRole,
      payload,
      constVariable.POSTDATA
    );
    if (response.status === 200) {
      callBack(response.data);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const USERDETAILACTION = async (payload) => {
  const { getUserWithCustomerID } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(getUserWithCustomerID, payload);
    console.log(response);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getCustomerInfoAction = (payload) => async (dispatch) => {
  const { customerDetailQuery } = values;
  var raw = `{
    customer(customerId: ${payload}) {
        _id
        prefix
        firstName
        salutation
        middleName
        lastName
        gender
        dateOfBirth
        brands
        products
        categories
        rewards {
            totalCashback
            totalPoints
        }

    }
}`;
  try {
    //start loader with dispatch
    let response = await Post_call(
      `${customerDetailQuery}/customers`,
      raw,
      false
    );
    if (response.status === 200) {
      dispatch({
        type: GETCUSTOMERDETAIL,
        payload: response.data,
      });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  GETUSERACTION,
  INVITEUSERACTION,
  USERDETAILACTION,
  getCustomerInfoAction,
};
