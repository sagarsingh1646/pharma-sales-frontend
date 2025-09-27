import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sales: [],       
  loading: false,  
  error: null,    
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    fetchSalesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSalesSuccess: (state, action) => {
      state.loading = false;
      state.sales = action.payload;
    },
    fetchSalesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addSale: (state, action) => {
      state.sales.push(action.payload);
    },
  },
});

export const {
  fetchSalesStart,
  fetchSalesSuccess,
  fetchSalesFailure,
  addSale,
} = salesSlice.actions;

export default salesSlice.reducer;
