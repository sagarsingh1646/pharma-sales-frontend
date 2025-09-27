import axiosInstance from "./axiosInstance";

// Login user
export const loginUser = async (loginData) => {
  try {
    const response = await axiosInstance.post("/auth/login", loginData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};

// Signup user
export const signupUser = async (signupData) => {
  try {
    const response = await axiosInstance.post("/auth/signup", signupData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Signup failed" };
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    const response = await axiosInstance.post("/auth/logout");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Logout failed" };
  }
};
