import { BRANDLIST, BRANDSEARCH, LOGINSUCCESS } from "../Constants/ActionsConstants";

const INITIAL_STATE = {
  user: {},
  brand:[],
  brandList:[]
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
  case BRANDSEARCH:{
    return {...state,brand:action.payload}
  }
  case BRANDLIST:{
    return {...state,brand:action.payload}
  }
    default:
      return state;
  }
};

export default AuthReducer;
