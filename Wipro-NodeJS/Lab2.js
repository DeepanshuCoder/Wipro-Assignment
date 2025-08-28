// Use require for export the (fs)
const fs = require("fs");

// create writable stream for fruits.txt
const writeStream = fs.createWriteStream("fruits.txt");

// Take the Array with objects fruit records
let fruits = [
  { id: 1, name: "Apple", color: "Red", price: 120 },
  { id: 2, name: "Banana", color: "Yellow", price: 40 },
  { id: 3, name: "Mango", color: "Orange", price: 150 }
];

// write fruit data to file
// ALso using the stringigy for convert the object into string
fruits.forEach(fruit => {
  writeStream.write(JSON.stringify(fruit) + "\n"); // write each fruit as JSON
});
writeStream.end(() => console.log("Data written to fruits.txt successfully."));

// create readable stream for fruits.txt & use utf8 for encoding purpose
const readStream = fs.createReadStream("fruits.txt", "utf8");

console.log("Reading fruits.txt using stream...");

// handle stream events
// we can use the stream for processing our data in chunks
readStream.on("data", chunk => {
  chunk.trim().split("\n").forEach(line => {
    let f = JSON.parse(line);
    console.log(`Fruit ID: ${f.id}, Name: ${f.name}, Color: ${f.color}, Price: ${f.price}`);
  });
});

// we can use the (readStream.on) listen to stream events like data, end, error
readStream.on("end", () => {
  console.log("Finished reading fruits.txt.");
});

readStream.on("error", err => {
  console.error("Error:", err);
});

// we can use the pipe to copy content to fruits_copy.txt
const copyStream = fs.createWriteStream("fruits_copy.txt");
readStream.pipe(copyStream).on("finish", () => {
  console.log("Content copied to fruits_copy.txt using pipe.");
});
