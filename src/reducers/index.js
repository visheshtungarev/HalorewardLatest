import { combineReducers } from "redux";
import Auth from "./authReducer";
const appReducer = combineReducers({
  auth: Auth,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
