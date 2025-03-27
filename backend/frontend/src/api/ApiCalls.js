import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
const BASE_URL = "/api";

export const signupApi = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/register`, data);
    return response.data;
  } catch (error) {
    console.log("Sign up api error", error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
};

export const loginApi = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, data);
    return response.data;
  } catch (error) {
    console.log("Login api error", error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
};

export const logoutApi = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/users/logout`);
    return response.data;
  } catch (error) {
    console.log("Logout api error", error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
};

export const getAllUsersApi = async () => {
  try {
    const token = Cookies.get("authToken");
    const response = await axios.get(`${BASE_URL}/users/getAllUsers`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Get all users api error", error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
};

export const getMessagesApi = async (chatUserId) => {
  try {
    const token = Cookies.get("authToken");
    const response = await axios.get(`${BASE_URL}/messages/get/${chatUserId}`, {
      credentials: "include",
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log("Get messages api error", error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
};

export const sendMessageApi = async (receiverId, message) => {
  try {
    const token = Cookies.get("authToken");
    const response = await axios.post(
      `${BASE_URL}/messages/send/${receiverId}`,
      { message },
      {
        credentials: "include",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Send message api error", error);
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
};
