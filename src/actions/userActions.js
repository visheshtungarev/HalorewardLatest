import { constVariable } from "../constants/String";
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
  } finally {
    //end the loader with dispatch
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
  } finally {
    //end the loader with dispatch
  }
};

const USERDETAILACTION = async payload => {
  const { getUserWithCustomerID } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(getUserWithCustomerID, payload);
    if (response.status === 200) {
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    //end the loader with dispatch
  }
};

export { GETUSERACTION, INVITEUSERACTION, USERDETAILACTION };
