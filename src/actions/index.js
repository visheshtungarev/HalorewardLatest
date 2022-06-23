import { bindActionCreators } from "redux";
import { store } from "../store";

import * as authActions from "./authenticationActions";
import * as brandAction from "./brandAction";
import * as getCarousel from "./getCarouselAction";
import { getOfferAction } from "./getOfferAction";
import { getMerchantAction } from "./merchantActions";

export const actions ={
    ...authActions,
    ...brandAction,
    ...getCarousel,
    ...getOfferAction,
    ...getMerchantAction
}
export default bindActionCreators(actions,store.dispatch);


