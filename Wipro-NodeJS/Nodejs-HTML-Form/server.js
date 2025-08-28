const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // parse form data

// serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// handle form submission
app.post("/submit", (req, res) => {
  const { trackingId, senderName, receiverName, pickupAddress, deliveryAddress, weight } = req.body;

  // validate fields
  if (!trackingId || !senderName || !receiverName || !pickupAddress || !deliveryAddress || !weight) {
    return res.send("All fields are required!");
  }

  // calculate delivery cost
  let cost = 50 + (parseInt(weight) * 20);

  // send confirmation
  res.send(`
    <h2>Courier Booking Confirmation</h2>
    Courier Tracking ID: ${trackingId}<br>
    Sender: ${senderName}<br>
    Receiver: ${receiverName}<br>
    Pickup: ${pickupAddress}<br>
    Delivery: ${deliveryAddress}<br>
    Weight: ${weight} kg<br>
    Delivery Cost: ${cost}
  `);
});

// start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
