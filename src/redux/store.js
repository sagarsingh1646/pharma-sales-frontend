import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice';
import salesReducer from '../features/sales/SalesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sales: salesReducer,
  },
});
