import { GETPRODUCTBYID } from "../Constants/ActionsConstants";
import env from "../enviroment";
import { Post_call } from "../network/networkmanager";

const values = env();
const { getCategoriesByClientID } = values;

const getOfferAction = async (ids) => {
  var data = `{
    products(siteId: 1, merchantId: ${ids ? ids : 1}, status: ["Enabled"]) {
        merchantId
        merchantName
        provider
        categories {
            categoryId
            name
        }
        products {
            categoryId
            productId
            status
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
`;

  try {
    let response = await Post_call(
      `${getCategoriesByClientID}/clients/1/products`,
      data,
      false
    );
    if (response.status === 200) {
      return response?.data?.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getProductAction = (payload) => async (dispatch) => {
  const { productByproductId } = values;
  var data = `{
        productsById(id: [${payload}]) {
            productId
            status
            contentType
            subcontentType
            expirationDate
            productMetaData {
                key
                value
            }
            
        }
    }`;
  try {
    //start loader with dispatch
    let response = await Post_call(
      `${productByproductId}/products`,
      data,
      false
    );
    dispatch({
      type: GETPRODUCTBYID,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getOfferAction, getProductAction };
