/* eslint-disable no-unused-vars */
import Axios from "axios";
import { constVariable } from "../Constants/String";

export const Post_call = async (
  endpoint,
  payload = {},
  type = constVariable.FETCHDATA
) => {
  try {
    const response = await Axios({
      url: endpoint,
      method: "POST",
      // data: payload ? { query: JSON.stringify(payload) } : {}
      data: payload,

    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const Put_call = async (endpoint, payload = {}) => {
  try {
    const response = await Axios({
      url: endpoint,
      method: "put",
      data: payload ? JSON.stringify(payload) : {},
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const Delete_call = async (endpoint, payload = {}) => {
  try {
    const response = await Axios({
      url: endpoint,
      method: "delete",
      data: payload ? JSON.stringify(payload) : {},
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const Get_Call = async (endpoint, payload = {}) => {
  console.log("payload", payload);
  try {
    const response = await Axios({
      url: endpoint,
      method: "GET",
      params: { query: payload },
      // data:{payload}
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const Patch_call = async (endpoint, payload = {}) => {
  try {
    const response = await Axios({
      url: endpoint,
      method: "patch",
      data: payload ? JSON.stringify(payload) : {},
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const setToken = async (type, token) => {
  if (token) {
    localStorage.setItem(type, token);
  }
};

const getToken = async (url) => {

  if (url.includes("auth/login")) {
    return "Basic YXBpLXVzZXI6YWRtaW4xMjM=";
  } else {
    let accessToken = await localStorage.getItem("accessToken");
    if (accessToken) {
      return `Bearer ${accessToken}`;
    } else {
      let systemToken = await localStorage.getItem("systemToken");
      return `Bearer ${systemToken}`;
    }
  }
};
export const getConfig = async (config) => {
  console.log(">>>>>>>>>>>>>>>>>",config)
  if(config.url=='https://tenant-products-query.dxxrewards.click/api/clients/1/brands'){

    console.log("config",config)
  }
  let token = (await localStorage.getItem("accessToken"))
    ? localStorage.getItem("accessToken")
    : "Basic YXBpLXVzZXI6YWRtaW4xMjM=";
    console.log("token",token)
  config.headers = {
    // Accept: "application/json",
    "Accept":"*/*",
    "Content-Type":
      (config?.type === constVariable.FETCHDATA && (config?.url.includes("/customers/login")===false)||config.url=="https://tenant-products-query.dxxrewards.click/api/clients/1/brands"||config.url=="https://tenant-products-query.dxxrewards.click/api/clients/1/categories" || config.url=="https://tenant-products-query.dxxrewards.click/api/clients/1/products")
        ? "text/plain"
        : "application/json",
    Authorization: await getToken(config?.url),
    "tenant-id": '1',
  };
  return config;
};

