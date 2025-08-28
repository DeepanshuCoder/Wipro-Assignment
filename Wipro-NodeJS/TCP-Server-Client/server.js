const net = require("net");

// in-memory jewellery items
let items = [
  { id: 1, name: "Gold Ring", quantity: 5, price: 15000 },
  { id: 2, name: "Silver Necklace", quantity: 3, price: 5000 }
];

// create TCP server
const server = net.createServer(socket => {
  console.log("Client connected.");

  // when client sends data
  socket.on("data", data => {
    let input = data.toString().trim().split(" ");
    let command = input[0].toUpperCase();

    if (command === "LIST") {
      // show all items
      items.forEach(i => {
        socket.write(`ID: ${i.id}, Name: ${i.name}, Quantity: ${i.quantity}, Price: ${i.price}\n`);
      });
    } else if (command === "ADD") {
      // add new item
      let [id, name, quantity, price] = [input[1], input[2], input[3], input[4]];
      items.push({ id: parseInt(id), name, quantity: parseInt(quantity), price: parseInt(price) });
      socket.write("Jewellery item added successfully!\n");
      console.log("Item added:", name);
    } else if (command === "EXIT") {
      // disconnect client
      socket.end("Client disconnected.\n");
    } else {
      socket.write("Unknown command.\n");
    }
  });

  // handle client end
  socket.on("end", () => console.log("Client disconnected."));
  socket.on("error", err => console.log("Error:", err.message));
});

// listen on port 4000
server.listen(4000, () => console.log("Server running on port 4000"));



// TO Run both file server.js and client.js:
// Firstly run the server.js (Showing Server running on port 4000)
// Then after open the new terminal
// Go the cd TCP-Server-Client path then type node client.js (Showing LIST/ADD/EXIT)
// After that use the LIST to get all gwellery and same for ADD to add and EXIT to close the server