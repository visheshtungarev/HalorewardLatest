import { BRANDENTER, BRANDLIST, BRANDSEARCH, LOGINSUCCESS } from "../Constants/ActionsConstants";

const INITIAL_STATE = {
  user: {},
  brand:[],
  all_brand:[],
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
  case BRANDENTER:{
    return {...state,all_brand:action.payload}
  }
  case BRANDLIST:{
    return {...state,brandList:action.payload}
  }
    default:
      return state;
  }
};

export default AuthReducer;
