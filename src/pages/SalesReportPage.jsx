import React, { useEffect, useState } from "react";
import SalesReportCard from "../components/sales/SalesReportCard";
import {
  aggregateSalesByRep,
  aggregateSalesByProduct,
} from "../utils/aggregateSalesByRep";
import { fetchSalesFailure, fetchSalesStart, fetchSalesSuccess } from "../features/sales/SalesSlice";
import { getSales } from "../api/salesApi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";

export default function SalesReportPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, sales, isUpdated } = useSelector(
    (state) => state.sales
  );

    useEffect(() => {
      const fetchSalesData = async () => {
        dispatch(fetchSalesStart());
        try {
          const data = await getSales();
          if (data) {
            dispatch(fetchSalesSuccess(data.sales));
          }
        } catch (err) {
          dispatch(
            fetchSalesFailure(err.message || "Failed to fetch sales data")
          );
        }
      };
  
      fetchSalesData();
    }, [isUpdated, dispatch]);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin h-10 w-10 text-gray-700" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  const reps = aggregateSalesByRep(sales);
  const products = aggregateSalesByProduct(sales);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Sales Report</h1>
        <button onClick={()=> {navigate("/dashboard")}} className="px-4 py-2 cursor-pointer bg-gray-900 text-white rounded-lg hover:bg-gray-800">
          Back to Dashboard
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card - Sales by Representative */}
        <SalesReportCard
          data={reps}
          title="Sales by Representative"
          description="Performance by team"
          rowType="rep"
        />

        {/* Right Card - Top Products */}
        <SalesReportCard
          data={products}
          title="Top Products"
          description="Best performing products by sales"
          rowType="product"
        />
      </div>
    </div>
  );
}
