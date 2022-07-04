import {
  LOGINSUCCESS,
  PASSWORDSUCCESS,
  SIGNUPSUCCESS,
} from "../Constants/ActionsConstants";
import env from "../enviroment";
import { Post_call, setToken } from "../network/networkmanager";

const values = env();
const getSystemToken = (payload) => async () => {
  console.log("payload", payload);
  const { auth } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(`${auth}/login`);
    if (response.status === 200) {
      setToken("systemToken", response.data.data.access_token);
      return { success: true, message: "Token generated successfully. " };
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    //end the loader with dispatch
  }
};

const Login = (payload) => async (dispatch) => {
  console.log("payload", payload);
  const { customerAuth } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(`${customerAuth}/login`, payload);
    console.log("response...", response);
    if (response.status === 200) {
      setToken("accessToken", response.data.data.access_token);
      dispatch({
        type: LOGINSUCCESS,
        payload: response.data,
      });
      return { success: true, message: "Login Successful" };
    } else {
      return { success: false, message: response.error };
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    //end the loader with dispatch
  }
};

const SignUp = (payload) => async (dispatch) => {
  console.log("payload", payload);
  const { customerAuth } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(`${customerAuth}/signup`, payload);
    // console.log("response...",response)
    if (response.status === 201) {
      // setToken("accessToken",response.data.data.access_token);
      dispatch({
        type: SIGNUPSUCCESS,
        payload: response,
      });
      return {
        success: true,
        message: "Signup Successful ! now please login to continue",
      };
    } else {
      return { success: false, message: response.error };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const resetPassword = (payload) => async (dispatch) => {
  console.log("payload", payload);
  const { customerAuth } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(`${customerAuth}/password`, payload);
    // console.log("response...",response)
    if (response.status === 201) {
      // setToken("accessToken",response.data.data.access_token);
      dispatch({
        type: PASSWORDSUCCESS,
        payload: response,
      });
      return {
        success: true,
        message: "Password changed successfully ! now please login to continue",
      };
    } else {
      return { success: false, message: response.error };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getSystemToken, Login, SignUp, resetPassword };
