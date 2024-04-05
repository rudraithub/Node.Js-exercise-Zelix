const zlib = require('zlib');


const inputData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';


const compressedData = zlib.deflateSync(inputData);


const decompressedData = zlib.inflateSync(compressedData).toString();


console.log('Compressed data:', compressedData);
console.log('Decompressed data:', decompressedData);
