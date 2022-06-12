import { bindActionCreators } from "redux";
import { store } from "../store";

import * as authActions from "./authenticationActions";
import * as brandAction from "./brandAction";

export const actions ={
    ...authActions,
    ...brandAction,
}
export default bindActionCreators(actions,store.dispatch);


