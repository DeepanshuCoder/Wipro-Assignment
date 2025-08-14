const productInventory = (function () {
    let stock = 0;

    return {
        getStock: function () {
            return stock;
        },
        addStock: function (quantity) {
            stock += quantity;
            console.log("Stock after adding:", stock);
        },
        sell: function (quantity) {
            if (quantity <= stock) {
                stock -= quantity;
                console.log("Sold", quantity, "items.");
            } else {
                console.log("Insufficient stock");
            }
        }
    };
})();

productInventory.addStock(10);
productInventory.sell(3);
console.log("Stock remaining:", productInventory.getStock());
