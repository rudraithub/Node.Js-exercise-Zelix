const Buffer = require('buffer').Buffer;

const originalBuffer = Buffer.from("Hello, World!");


console.log("Original Buffer:", originalBuffer);

console.log("Buffer Length:", originalBuffer.length);
console.log("Buffer as String:", originalBuffer.toString());


originalBuffer.write("Goodbye", 0, 7);
console.log("Modified Buffer:", originalBuffer.toString());

const slicedBuffer = originalBuffer.slice(0, 6);
console.log("Sliced Buffer:", slicedBuffer.toString());

const concatenatedBuffer = Buffer.concat([originalBuffer, Buffer.from(" Node.js")]);
console.log("Concatenated Buffer:", concatenatedBuffer.toString());

const comparison = originalBuffer.compare(Buffer.from("Hello"));
console.log("Compare Buffers:", comparison);

const copiedBuffer = Buffer.alloc(10);
originalBuffer.copy(copiedBuffer, 0, 0, 10);
console.log("Copied Buffer:", copiedBuffer.toString());

originalBuffer.fill("A", 0, 13);
console.log("Filled Buffer:", originalBuffer.toString());

console.log("Includes \"Hello\":", originalBuffer.includes("Hello"));
console.log("Includes \"Goodbye\":", originalBuffer.includes("Goodbye"));


const bufferJSON = originalBuffer.toJSON();
console.log("Buffer as JSON:", bufferJSON);

const bufferFromJSON = Buffer.from(bufferJSON.data);
console.log("Buffer from JSON:", bufferFromJSON.toString());

