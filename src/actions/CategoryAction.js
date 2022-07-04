import { GETCATEGORY } from "../Constants/ActionsConstants";
import env from "../enviroment";
import { Post_call } from "../network/networkmanager";

const values = env();
const { getCategoriesByClientID } = values;

export const getCategoryAction = async (dispatch) => {
  var data = `{
        categories(siteId: 1)  {
            categoryId
            name
            description
            status
            subCategories {
                categoryId
                name
                status
            }
        }
    }`;

  try {
    let response = await Post_call(
      `${getCategoriesByClientID}/clients/1/categories`,
      data,
      false
    );
    if (response.status === 200) {
      dispatch({
        type: GETCATEGORY,
        payload: response,
      });
      // let objCategory = [{ name: "All" }];
      // response?.data?.map((item) => {
      //   return objCategory.push(item);
      // });
      // setCategoryData(objCategory);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
