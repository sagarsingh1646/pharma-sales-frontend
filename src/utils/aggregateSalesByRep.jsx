// utils/aggregateSales.js

export function aggregateSalesByRep(sales) {
  const reps = {};
  sales.forEach((sale) => {
    const repId = sale.createdBy?._id;
    if (!repId) return;

    if (!reps[repId]) {
      reps[repId] = {
        id: repId,
        name: `${sale.createdBy.firstName} ${sale.createdBy.lastName}`,
        transactions: 0,
        units: 0,
        total: 0,
      };
    }

    reps[repId].transactions += 1;
    reps[repId].units += sale.quantity;
    reps[repId].total += (sale.quantity || 0) * (sale.pricePerUnit || 0);
  });
  return Object.values(reps);
}

export function aggregateSalesByProduct(sales) {
  const products = {};
  sales.forEach((sale) => {
    const product = sale.productName;
    if (!products[product]) {
      products[product] = {
        id: product,
        name: product,
        units: 0,
        total: 0,
      };
    }

    products[product].units += sale.quantity;
    products[product].total += (sale.quantity || 0) * (sale.pricePerUnit || 0);
  });
  return Object.values(products);
}
