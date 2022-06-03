
import { LOGINSUCCESS, } from "../Constants/ActionsConstants";
import env from "../enviroment";
import { Post_call, setToken } from "../network/networkmanager"

const values = env();
const getSystemToken = (payload) => async () => {
  console.log("payload",payload)
  const { auth } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(`${auth}/login`);
    if (response.status === 200) {
      setToken("systemToken",response.data.data.access_token);
      return{success:true,message:"Token generated successfully. "}
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    //end the loader with dispatch
  }
};

const Login = (payload) => async (dispatch) => {
  console.log("payload",payload)
  const { customerAuth } = values;
  try {
    //start loader with dispatch
    let response = await Post_call(`${customerAuth}/login`,JSON.stringify(payload));
    console.log("response...",response)
    if (response.status === 200) {
      setToken("accessToken",response.data.data.access_token);
      dispatch({
        type: LOGINSUCCESS,
        payload: response.data.data,
      });
      return({success:true,message:"Login Successful"})
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    //end the loader with dispatch
  }
};

export { getSystemToken,Login };
