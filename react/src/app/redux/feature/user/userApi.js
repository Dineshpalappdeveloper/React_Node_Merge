import axios from "axios";
import { url } from "../../../../lib/AuthAxios";
const getusers = async () => {
  try {
    const response = await axios.get(`${url}/api/staff`);
    console.log(response, "response");
    return response.data;
  } catch (e) {
    console.log(" getting Error: ", e);
    return e;
  }
};
const addUsersApi = async (body) => {
  try {
    const response = await axios.post(`${url}/api/staff`, body);
    return response.data;
  } catch (error) {
    console.log(" getting Error: ", error);
    return error;
  }
};
const updateUserApi = async (id, body) => {
  try {
    const response = await axios.put(`${url}/api/staff/${id}`, body);
    return response.data;
  } catch (error) {
    console.log(" getting Error: ", error);
    return error;
  }
};
const deleteUserApi = async (id) => {
  try {
    const response = await axios.delete(`${url}/api/staff/${id}`);
    return response.data;
  } catch (error) {
    console.log(" getting Error: ", error);
    return error;
  }
};
const registerUserApi = async (body) => {
  try {
    const response = await axios.post(`${url}/api/register`, body);
    return response;
  } catch (error) {
    console.log(" getting Error: ", error);
    return error;
  }
};
const loginUserApi = async (body) => {
  try {
    const response = await axios.post(`${url}/api/login`, body);
    return response.data;
  } catch (error) {
    return error;
  }
};

const getAlluserApi = async (token) => {
  try {
    console.log(token, "token");
    const response = await axios.post(
      `${url}/api/user`,
      {},
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
const crateOrderApi = async (body) => {
  try {
    const response = await axios.post(`${url}/api/order`, body);
    console.log(response, "response");
    return response;
  } catch (e) {
    console.log(" getting Error: ", e);
    return e;
  }
};
const getordersApi = async () => {
  try {
    const response = await axios.get(`${url}/api/order`);
    console.log(response, "response");
    return response.data;
  } catch (e) {
    console.log(" getting Error: ", e);
    return e;
  }
};
const userApi = {
  getusers,
  addUsersApi,
  updateUserApi,
  deleteUserApi,
  registerUserApi,
  loginUserApi,
  getAlluserApi,
  crateOrderApi,
  getordersApi,
};
export default userApi;
