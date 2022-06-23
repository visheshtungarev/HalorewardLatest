import { bindActionCreators } from "redux";
import { store } from "../store";

import * as authActions from "./authenticationActions";
import * as brandAction from "./brandAction";
import * as getCarousel from "./getCarouselAction";

export const actions ={
    ...authActions,
    ...brandAction,
    ...getCarousel,
}
export default bindActionCreators(actions,store.dispatch);


