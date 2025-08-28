const net = require("net");
const readline = require("readline");

// create TCP client
const client = new net.Socket();

// take user input from console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// connect to server
client.connect(4000, "127.0.0.1", () => {
  console.log("Connected to server.");
  askInput();
});

// handle server response
client.on("data", data => {
  console.log("Server Response:\n" + data.toString());
  askInput();
});

// handle close and error
client.on("close", () => console.log("Connection closed."));
client.on("error", err => console.log("Error:", err.message));

// ask user for command
function askInput() {
  rl.question("Enter command (LIST / ADD / EXIT): ", input => {
    client.write(input);
    if (input.trim().toUpperCase() === "EXIT") {
      rl.close();
    }
  });
}
