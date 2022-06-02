import { LOGINSUCCESS } from "../Constants/ActionsConstants";

const INITIAL_STATE = {
  user: {
   
  },
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  if (action.type === undefined) {
    return state;
  }

  console.log(action)
  switch (action.type) {
  case LOGINSUCCESS:{
    return {...state,user:action.payload}
  }
    default:
      return state;
  }
};

export default AuthReducer;
