// Exercise 17: Suppliers with low stock
//
// Group products by supplier.
// Return only suppliers that have at least one product with stock below 25.
// For each supplier, return:
// - supplier
// - productCount
// - lowStockCount
//
// Sort by lowStockCount descending, then supplier alphabetically.
//
// Requirement:
// Provide a Lodash solution.

const _ = require("lodash");
const products = require("../data/products.json");

const lodashSolution = _.chain(products)
  .map((product) => ({
    ...product,
    lowStockCount: product.stock < 25 ? 1 : 0,
  }))
  .groupBy("supplier")
  .map((product, supplierName) => ({
    supplier: supplierName,
    productCount: _.size(product),
    lowStockCount: _.sumBy(product, "lowStockCount"),
  }))
  .filter((product) => product.lowStockCount >= 1)
  .value(); // Feedback: Add orderBy(['lowStockCount', 'supplier'], ['desc', 'asc']) before value().

console.log(lodashSolution);

/*
Expected output:
[
  { supplier: 'ScreenHub', productCount: 2, lowStockCount: 2 },
  { supplier: 'ActiveSupply', productCount: 4, lowStockCount: 1 },
  { supplier: 'AudioLab', productCount: 2, lowStockCount: 1 },
  { supplier: 'CleanAir Co', productCount: 1, lowStockCount: 1 },
  { supplier: 'OfficeDepot Pro', productCount: 1, lowStockCount: 1 },
  { supplier: 'TrailWorks', productCount: 3, lowStockCount: 1 }
]
*/
