import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sales: [],
  loading: false,
  isUpdated: false,
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
      console.log("payload", action.payload);
      state.sales = action.payload;
    },
    fetchSalesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addSale: (state, action) => {
      state.sales.push(action.payload);
    },
    updateSale: (state) => {
      state.isUpdated = !state.isUpdated;
    },
    updateSaleFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSale: (state) => {
      state.isUpdated = !state.isUpdated;
    },
    deleteSaleFailure: (state) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSalesStart,
  fetchSalesSuccess,
  fetchSalesFailure,
  addSale,
  updateSale,
  updateSaleFailure,
  deleteSale,
  deleteSaleFailure,
} = salesSlice.actions;

export default salesSlice.reducer;
