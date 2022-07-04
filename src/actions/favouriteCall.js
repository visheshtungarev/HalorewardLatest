import env from "../enviroment";
import { Post_call, Put_call } from "../network/networkmanager";

const values = env();

export const CutomerInfoCall = async (payload) => {
  const { customerDetailQuery } = values;
  var raw = `{
    customer(customerId: ${payload}) {
        _id
        prefix
        firstName
        salutation
        middleName
        lastName
        gender
        dateOfBirth
        brands
        products
        categories
        rewards {
            totalCashback
            totalPoints
        }

    }
}`;
  try {
    let response = await Post_call(
      `${customerDetailQuery}/customers`,
      raw,
      false
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMerchantCall = async (payload) => {
  const { merchantquerry } = values;

  var raw = `{
    merchantsById(id: [${payload}]) {
        merchantId 
        merchantName 
        merchantDescription 
        merchantRank 
        status 
        customerMaxRebate 
        provider
        externalMaxRebate 
        modifiedDate 
        merchantLogo1 
        merchantUrl 
        createdDate
    }
}`;
  try {
    //start loader with dispatch
    let response = await Post_call(`${merchantquerry}/merchants`, raw, false);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductfavCall = async (payload) => {
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
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const featuredCall = async () => {
  const { featureOfferQuery } = values;
  var data = `{
        products(siteId: 1, merchantId: 1, featured:true) {
            merchantId
            merchantName
            provider
            categories {
                categoryId
                name
            }
            products {
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
    }`;
  try {
    //start loader with dispatch
    let response = await Post_call(
      `${featureOfferQuery}/1/products`,
      data,
      false
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addtoFavProduct = async (customerId, id) => {
  const { customerAuth } = values;
  try {
    let response = await Put_call(
      `${customerAuth}/${customerId}/products/${id}`
    );
    if (response.status === 202) {
      return { msg: "offer has been added to favorite list", status: true };
    } else {
      return { msg: "something went wrong", status: false };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
