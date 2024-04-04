const path = require('path');

const originalPath = '/path/./file.txt';

console.log('basename:', path.basename(originalPath));
console.log('dirname:', path.dirname(originalPath));
console.log('extname:', path.extname(originalPath));
console.log('isAbsolute:', path.isAbsolute(originalPath));

const joinedPath = path.join('path', '.', 'file.txt');  
console.log('join:', joinedPath);

const normalizedPath = path.normalize('/path/./folder/../file.txt');
console.log('normalize:', normalizedPath);

const parsedPath = path.parse(originalPath);
console.log('parse:', parsedPath);

const resolvedPath = path.resolve(__dirname, 'path', '.', 'file.txt'); 
console.log('resolve:', resolvedPath);
