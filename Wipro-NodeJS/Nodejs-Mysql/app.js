// import connection file
const connection = require("./mysqldbconnection");

// insert stock
function addStock(symbol, companyName, price, volume, callback) {
  const sql = "INSERT INTO stocks (symbol, companyName, price, volume) VALUES (?, ?, ?, ?)";
  connection.query(sql, [symbol, companyName, price, volume], (err, result) => {
    if (err) throw err;
    console.log("Added stock with ID:", result.insertId);
    callback();
  });
}

// list all stocks
function listStocks(callback) {
  connection.query("SELECT * FROM stocks", (err, results) => {
    if (err) throw err;
    console.log("All Stocks:", results);
    callback();
  });
}

// update stock price and volume
function updateStockPriceAndVolume(id, price, volume, callback) {
  const sql = "UPDATE stocks SET price=?, volume=? WHERE id=?";
  connection.query(sql, [price, volume, id], (err, result) => {
    if (err) throw err;
    console.log("Updated records:", result.affectedRows);
    callback();
  });
}

// delete stock by id
function deleteStock(id, callback) {
  connection.query("DELETE FROM stocks WHERE id=?", [id], (err, result) => {
    if (err) throw err;
    console.log("Deleted records:", result.affectedRows);
    callback();
  });
}

// sequential execution
addStock("AAPL", "Apple Inc.", 175.50, 1000, () => {
  listStocks(() => {
    updateStockPriceAndVolume(1, 180.00, 1200, () => {
      deleteStock(1, () => {
        connection.end(() => console.log("MySQL connection closed"));
      });
    });
  });
});
