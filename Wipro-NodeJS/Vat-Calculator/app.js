// import local module (./vatCalculator)
const { calculateVAT } = require("./vatCalculator");

// jewellery items
let items = [
  { id: 1, name: "Gold Necklace", price: 50000 },
  { id: 2, name: "Silver Ring", price: 8000 },
  { id: 3, name: "Diamond Bracelet", price: 120000 }
];

// calculate and display result for each item
items.forEach(item => {
  let result = calculateVAT(item.price); // call vat function
  console.log("Jewellery ID:", item.id);
  console.log("Name:", item.name);
  console.log("Price:", item.price);
  console.log("VAT (3%):", result.vat);
  console.log("Total Price:", result.totalPrice);
  console.log("---------------------------");
});
