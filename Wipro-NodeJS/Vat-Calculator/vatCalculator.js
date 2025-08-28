// export function to calculate VAT
function calculateVAT(price, rate = 3) {
  let vat = (price * rate) / 100; // calculate vat
  let totalPrice = price + vat;   // add vat to price
  return { vat, totalPrice };     // return vat and total
}

module.exports = { calculateVAT }; // here i export the calculatorVAT function
