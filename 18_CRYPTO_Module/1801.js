const crypto = require('crypto');

function encrypt(text, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encryptedText, key) {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

const password = 'secretPassword123';
const encryptionKey = 'MySuperSecretKey';

const encryptedPassword = encrypt(password, encryptionKey);
console.log('Encrypted Password:', encryptedPassword);

const decryptedPassword = decrypt(encryptedPassword, encryptionKey);
console.log('Decrypted Password:', decryptedPassword);
