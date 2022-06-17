const env = (type = "dev") => {
  let env_variables = {};
  if (type === "dev") {
    env_variables = {
      auth: "https://dx-auth-service.dxxrewards.click/auth",
      getUserWithCustomerID:"https://customer-service.dxxrewards.click/api/v1/customer/users/roles",
      getUserAndRoleWithCustomerID:"https://customer-service.dxxrewards.click/api/v1/customer/users/roles",
      createUserAndRole:"https://customer-events.dxxrewards.click/v1/customer/165/users",
      merchantquerry: "https://merchants-query.dxxrewards.click/api", //merchants //categories
      merchantService: "https://merchants-service.dxxrewards.click/api", //merchants // create-update-publish
      getCategoriesByClientID:"https://tenant-products-query.dxxrewards.click/api", //categories //brands
      productService:"https://products-service.dxxrewards.click/api/",
      productsCategories:"https://tenant-products.dxxrewards.click/api/clients",
      customerAuth:"https://customers-service.dxxrewards.click/api/customers"
    };
    return env_variables;
  }
};

export default env;

// http://customers-service.dxxrewards.click/api/customers/18/brands/1