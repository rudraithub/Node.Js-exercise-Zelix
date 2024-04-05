const fs = require('fs');

const inputData = 'hello world';
const outputFile = 'output.txt';

const writableStream = fs.createWriteStream(outputFile);

writableStream.write(inputData, (err) => {
    if (err) {
        console.error('Error writing to stream:', err);
        return;
    }

    console.log('Write operation completed.');

    writableStream.end();
});