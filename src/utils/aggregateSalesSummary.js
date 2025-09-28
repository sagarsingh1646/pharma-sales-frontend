// 🔹 Aggregate overall sales summary
export function aggregateSalesSummary(sales) {
  let totalAmount = 0;
  let totalUnits = 0;
  let totalSales = sales.length;
  const repSet = new Set();

  sales.forEach((sale) => {
    totalUnits += sale.quantity || 0;
    totalAmount += (sale.quantity || 0) * (sale.pricePerUnit || 0);

    if (sale.createdBy?._id) {
      repSet.add(sale.createdBy._id);
    }
  });

  return {
    totalAmount,   // Total revenue (quantity × pricePerUnit)
    totalUnits,    // Total units sold
    totalSales,    // Number of sales transactions
    totalReps: repSet.size, // Unique reps
  };
}
