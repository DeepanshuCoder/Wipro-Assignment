// import required modules
const mysql = require("mysql2");
const readline = require("readline");

// create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",  // mysql username
  password: "Deepu@2003", // mysql password
  database: "main_stock_market"
});

// create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// show menu
function showMenu() {
  console.log("\nStock Market Management System");
  console.log("1. Add Stock");
  console.log("2. View All Stocks");
  console.log("3. View Stock by ID");
  console.log("4. Update Stock Price & Volume");
  console.log("5. Delete Stock");
  console.log("6. Exit");

  rl.question("Enter your choice: ", (choice) => {
    if (choice == "1") addStock();
    else if (choice == "2") viewAllStocks();
    else if (choice == "3") viewStockById();
    else if (choice == "4") updateStock();
    else if (choice == "5") deleteStock();
    else if (choice == "6") exitApp();
    else showMenu();
  });
}

// add stock
function addStock() {
  rl.question("Enter Stock Symbol: ", (symbol) => {
    rl.question("Enter Company Name: ", (companyName) => {
      rl.question("Enter Price: ", (price) => {
        rl.question("Enter Volume: ", (volume) => {
          db.query(
            "INSERT INTO stocks (symbol, companyName, price, volume) VALUES (?, ?, ?, ?)",
            [symbol, companyName, price, volume],
            (err) => {
              if (err) console.log(err);
              else console.log("Stock added successfully!");
              showMenu();
            }
          );
        });
      });
    });
  });
}

// view all stocks
function viewAllStocks() {
  db.query("SELECT * FROM stocks", (err, results) => {
    if (err) console.log(err);
    else results.forEach(r =>
      console.log(`ID: ${r.id}, Symbol: ${r.symbol}, Company: ${r.companyName}, Price: ${r.price}, Volume: ${r.volume}`)
    );
    showMenu();
  });
}

// view stock by id
function viewStockById() {
  rl.question("Enter Stock ID: ", (id) => {
    db.query("SELECT * FROM stocks WHERE id = ?", [id], (err, results) => {
      if (err) console.log(err);
      else if (results.length === 0) console.log("No stock found!");
      else {
        let r = results[0];
        console.log(`ID: ${r.id}, Symbol: ${r.symbol}, Company: ${r.companyName}, Price: ${r.price}, Volume: ${r.volume}`);
      }
      showMenu();
    });
  });
}

// update stock
function updateStock() {
  rl.question("Enter Stock ID: ", (id) => {
    rl.question("Enter New Price: ", (price) => {
      rl.question("Enter New Volume: ", (volume) => {
        db.query("UPDATE stocks SET price=?, volume=? WHERE id=?", [price, volume, id], (err, res) => {
          if (err) console.log(err);
          else if (res.affectedRows === 0) console.log("No stock found!");
          else console.log("Stock updated successfully!");
          showMenu();
        });
      });
    });
  });
}

// delete stock
function deleteStock() {
  rl.question("Enter Stock ID: ", (id) => {
    db.query("DELETE FROM stocks WHERE id=?", [id], (err, res) => {
      if (err) console.log(err);
      else if (res.affectedRows === 0) console.log("No stock found!");
      else console.log("Stock deleted successfully!");
      showMenu();
    });
  });
}

// exit app
function exitApp() {
  console.log("Goodbye!");
  db.end();
  rl.close();
}

// start menu
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
  showMenu();
});
