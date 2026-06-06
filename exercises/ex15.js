// Exercise 15: Product category sales summary
//
// Use only products that are not discontinued.
// Group products by category.
// For each category, return:
// - category
// - productCount
// - totalStock
// - totalUnitsSold
//
// totalUnitsSold is q1 + q2 + q3 + q4 for all products in that category.
// Sort by totalUnitsSold descending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require("lodash");
const products = require("../data/products.json");

const lodashSolution = _.chain(products)
  .map((product) => ({
    ...product,
    totalUnitsSold: _.sum(_.values(product.sales)),
  }))
  .filter((product) => !product.discontinued)
  .groupBy("category")
  .map((product, categoryName) => ({
    category: categoryName,
    productCount: _.size(product),
    totalStock: _.sumBy(product, "stock"),
    totalUnitsSold: _.sumBy(product, "totalUnitsSold"),
  }))
  .orderBy("totalUnitsSold", "desc")
  .value();

console.log(lodashSolution);

/*
Expected output:
[
  { category: 'Grocery', productCount: 5, totalStock: 682, totalUnitsSold: 3924 },
  { category: 'Electronics', productCount: 7, totalStock: 357, totalUnitsSold: 3837 },
  { category: 'Fitness', productCount: 5, totalStock: 430, totalUnitsSold: 2822 },
  { category: 'Stationery', productCount: 4, totalStock: 497, totalUnitsSold: 2729 },
  { category: 'Outdoor', productCount: 5, totalStock: 326, totalUnitsSold: 2539 },
  { category: 'Home', productCount: 6, totalStock: 277, totalUnitsSold: 1966 },
  { category: 'Travel', productCount: 3, totalStock: 220, totalUnitsSold: 1431 }
]
*/
