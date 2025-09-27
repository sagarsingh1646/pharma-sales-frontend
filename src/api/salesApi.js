import axiosInstance from "./axiosInstance";

// Get Sales (manager/rep)
export const getSales = async () => {
  try {
    const response = await axiosInstance.get("/sales/");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch sales data" };
  }
};

//update Sale
export const updateSales = async (updatedData, id) => {
  try {
    const response = await axiosInstance.put(`/sales/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to update sale data" };
  }
};

//delete sale
export const deleteSales = async (id) => {
  try {
    const response = await axiosInstance.delete(`/sales/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to delete sale data" };
  }
};
