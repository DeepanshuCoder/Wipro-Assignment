// we can use the buffer to store the entire data at once

// create buffer of 256 bytes
let buffer = Buffer.alloc(256);

// student data in JSON format
// convert your object into string by using (stringify)
let student1 = JSON.stringify({ id: 1, name: "Deepanshu", age: 23, grade: "A" });

// write student1 data to buffer
let bytesWritten = buffer.write(student1, "utf8");
console.log("Bytes written to buffer:", bytesWritten);

// read buffer content as string
let bufferStr = buffer.toString("utf8", 0, bytesWritten);
console.log("Buffer content as string:", bufferStr);

// parse string back to object
let parsed = JSON.parse(bufferStr);
console.log("Parsed Student Data:");
console.log("ID:", parsed.id);
console.log("Name:", parsed.name);
console.log("Age:", parsed.age);
console.log("Grade:", parsed.grade);

// append another student if space permits
let student2 = JSON.stringify({ id: 2, name: "Ayush", age: 25, grade: "B" });
buffer.write(student2, bytesWritten, "utf8");

// slice buffer for first student only
// slice starts the index from 0 and ends with before one from the last
let slice = buffer.slice(0, bytesWritten);
console.log("First student slice:", slice.toString());

// copy buffer data to another buffer
let copyBuffer = Buffer.alloc(256);
buffer.copy(copyBuffer);
console.log("Copied buffer string:", copyBuffer.toString("utf8", 0, bytesWritten));

// demonstrate encodings
console.log("Buffer in utf8:", buffer.toString("utf8", 0, bytesWritten));
//normal readable text (default encoding in Node.js)
console.log("Buffer in ascii:", buffer.toString("ascii", 0, bytesWritten));
// old encoding, only works for English letters & symbols
console.log("Buffer in base64:", buffer.toString("base64", 0, bytesWritten));
// special format to represent binary data as text & and it is also not human readable