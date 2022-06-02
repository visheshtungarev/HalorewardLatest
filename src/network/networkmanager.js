import Axios from "axios";
import { constVariable } from "../Constants/String";

export const Post_call = async (endpoint, payload = {}, type = constVariable.FETCHDATA) => {
  try {
    const response = await Axios({
      url: endpoint,
      method: "post",
      // data: payload ? { query: JSON.stringify(payload) } : {}
      data: payload ? payload : {},
      type: type
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
      data: payload ? JSON.stringify(payload) : {}
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
      data: payload ? JSON.stringify(payload) : {}
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const Get_Call = async (endpoint, payload = {}) => {
  console.log("payload",payload)
  try {
    const response = await Axios({
      url: endpoint,
      method: "get",
      data: {},
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
      data: payload ? JSON.stringify(payload) : {}
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const setToken = async (type,token) => {
  if (token) {
    localStorage.setItem(type, token);
  }
};

export const getConfig = async config => {
    let token = await localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : 'Basic YXBpLXVzZXI6YWRtaW4xMjM=';
    config.headers={
      "Accept":"application/json",
      // "Accept":"*/*",
      "Content-Type": config?.type === constVariable.FETCHDATA ? "text/plain" :"application/json",
      "Authorization": config?.url.includes("auth/login") ? "Basic YXBpLXVzZXI6YWRtaW4xMjM=" : `Bearer ${token}`,
      "tenant-id":1
    }
    return config
};

