import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  firstName: localStorage.getItem("firstName") || "",
  token: null,
  role: localStorage.getItem("role") || "",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("role", action.payload.user.role);
      localStorage.setItem("firstName", action.payload.user.firstName);
      state.firstName = action.payload.user.firstName;
      state.role = action.payload.user.role;
      Cookies.set("token", action.payload.token, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
      });
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = "";
      state.firstName = "";
      localStorage.removeItem("role");
      localStorage.removeItem("firstName");
      Cookies.remove("token");
    },
    signUpStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess: (state) => {
      state.loading = false;
    },
    signUpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  signUpFailure,
  signUpStart,
  signUpSuccess,
} = authSlice.actions;

export default authSlice.reducer;
