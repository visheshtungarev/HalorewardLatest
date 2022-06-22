import { GETCAROUSEL } from "../Constants/ActionsConstants";
import env from "../enviroment";
import { Post_call } from "../network/networkmanager";

const values = env();
const { getCategoriesByClientID } = values;

export const getCarousel = () => async (dispatch) => {
  var raw = `{
    carousels(siteId: 1){
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
                merchantId
                merchantRank
                merchantName
                provider
                merchantLogo1
                merchantUrl
            }
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
        payload: response.data,
      });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }


// var myHeaders = new Headers();
// myHeaders.append("tenant-id", "1");
// myHeaders.append("Content-Type", "text/plain");
// myHeaders.append("Cookie", "JSESSIONID=522DB001151C8D5A7557921CE9F6C63D");



// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://tenant-products-query.dxxrewards.click/api/clients/carousels", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(
//     dispatch({
//       type: GETCAROUSEL,
//       payload: result,
//     })
//   ))
//   .catch(error => console.log('error', error));
};
