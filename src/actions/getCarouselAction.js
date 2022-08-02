import { GETCAROUSEL } from "../Constants/ActionsConstants";
import env from "../enviroment";
import { Post_call } from "../network/networkmanager";

const values = env();
const { getCategoriesByClientID } = values;

export const getCarousel = (payload) => async (dispatch) => {
  var raw = `{
  carousels(siteId: 1, customerId: ${payload}){
      pageName
      carousels {
          carouselName
          status
          carouselType
          description
          offerType
          itemLimit
          startDate
          endDate
          modifiedBy
          metadata {
              key
              value
          }
          categoryType{
              categoryType
              categories{
                  categoryId
                  name
                  isSelected
              }
          }
          arrangement{
              arrangement
          }
          brands {
              onCard
              merchantDescription
              customerMaxRebate
              shortTitle
              merchantId
              merchantRank
              merchantName
              provider
              merchantLogo1
              merchantUrl
              products {
                  productId
                  contentType
                  subcontentType
                  expirationDate
                  productMetaData {
                      key
                      value
                  }
              }
          }
          
      }
  }
}`;

  try {
    let response = await Post_call(
      `${getCategoriesByClientID}/clients/carousels`,
      raw,
      false
    );
    if (response.status === 200) {
      dispatch({
        type: GETCAROUSEL,
        payload: response.data
      });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
