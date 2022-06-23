import { BRANDENTER, BRANDLIST, BRANDSEARCH, LOGINSUCCESS, RESETBRAND, TOGGLELOADING, GETCAROUSEL } from "../Constants/ActionsConstants";

const INITIAL_STATE = {
  user: {},
  brand:[],
  all_brand:[],
  brandList:[],
  isLoading: false,
  carousel: []
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  if (action.type === undefined) {
    return state;
  }

  console.log(action)
  switch (action.type) {
  case TOGGLELOADING:{
    return {...state,isLoading:!state.isLoading}
  }
  case LOGINSUCCESS:{
    return {...state,user:action.payload}
  }
  case BRANDSEARCH:{
    return {...state,brand:action.payload, isLoading: false}
  }
  case BRANDENTER:{
    return {...state,all_brand:action.payload,isLoading: false}
  }
  case BRANDLIST:{
    return {...state,brandList:action.payload}
  }
  case GETCAROUSEL:{
    return {...state,carousel:action.payload}
  }
  case RESETBRAND:{
    return  {...state,all_brand:[], brand:[]}
  }
    default:
      return state;
  }
};

export default AuthReducer;
