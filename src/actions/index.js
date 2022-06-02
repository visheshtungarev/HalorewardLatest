import { bindActionCreators } from "redux";
import { store } from "../store";

import * as authActions from "./authenticationActions";



export const actions ={
    ...authActions,
}
export default bindActionCreators(actions,store.dispatch);


