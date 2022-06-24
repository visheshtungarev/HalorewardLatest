import { bindActionCreators } from "redux";
import { store } from "../store";

import * as authActions from "./authenticationActions";
import * as brandAction from "./brandAction";
import { getCategoryAction } from "./CategoryAction";
import * as getCarousel from "./getCarouselAction";
import { getOfferAction } from "./getOfferAction";
import { getMerchantAction } from "./merchantActions";

export const actions ={
    ...authActions,
    ...brandAction,
    ...getCarousel,
    ...getOfferAction,
    ...getMerchantAction,
    ...getCategoryAction
}
export default bindActionCreators(actions,store.dispatch);


