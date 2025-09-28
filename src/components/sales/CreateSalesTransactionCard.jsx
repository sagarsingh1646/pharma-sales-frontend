import React, { useState, useEffect } from "react";
import { createSales } from "../../api/salesApi";
import { useDispatch } from "react-redux";
import { updateSale, updateSaleFailure } from "../../features/sales/SalesSlice";

export default function CreateSalesTransactionCard({ onClose }) {
    const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [pricePerUnit, setPricePerUnit] = useState(0);
  const [dateOfSale, setDateOfSale] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(quantity * pricePerUnit);
  }, [quantity, pricePerUnit]);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const newSaledata = {
      productName,
      quantity,
      pricePerUnit,
      dateOfSale,
      customerName,
      customerEmail,
    };

    try{
    const data = await createSales(newSaledata)
    if(data) {
        dispatch( updateSale())
    }
    }catch(err){
        dispatch(updateSaleFailure(err.message || "Failed to create sale data"))
    }

    onClose();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Create Sale Transaction
          </h2>
          <p className="text-gray-500 text-sm">
            Create a sale transaction details
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Product */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        {/* Quantity & Price per Unit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price per Unit
            </label>
            <input
              type="number"
              value={pricePerUnit}
              onChange={(e) => setPricePerUnit(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-black"
            />
          </div>
        </div>

        {/* Sale Date & Total Amount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sale Date
            </label>
            <input
              type="date"
              value={dateOfSale}
              onChange={(e) => setDateOfSale(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Amount
            </label>
            <input
              type="text"
              value={`$${total.toFixed(2)}`}
              disabled
              className="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-gray-50 text-gray-500 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Customer Info */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-3">
            Customer Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customer Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 ">
                Customer Phone
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-black"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customer Email
              </label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-2.5 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-black"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 cursor-pointer rounded-lg border text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 cursor-pointer rounded-lg bg-gray-900 text-white hover:bg-gray-800"
          >
            Create Transaction
          </button>
        </div>
      </form>
    </div>
  );
}
