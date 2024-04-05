const fs = require('fs');

fs.writeFile('data.txt', 'hello, welcome to rudra it hub', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Text file created successfully!');

    const readableStream = fs.createReadStream('data.txt');

    let data = '';

    readableStream.on('data', (chunk) => {
        data += chunk.toString();
        console.log('Received chunk:', chunk.toString());
    });

    readableStream.on('end', () => {
        console.log('End of stream.');
        console.log('Complete data:', data);
    });

    readableStream.on('error', (err) => {
        console.error('Error reading stream:', err);
    });
});