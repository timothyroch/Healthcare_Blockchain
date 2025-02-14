const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Paths for key storage
const privateKeyPath = path.join(__dirname, 'keys', 'private.pem');
const publicKeyPath = path.join(__dirname, 'keys', 'public.pem');

// Key generation
const generateKeys = () => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
  });

  // Save keys to files
  fs.writeFileSync(privateKeyPath, privateKey);
  fs.writeFileSync(publicKeyPath, publicKey);

  console.log('Keys generated and saved to /keys directory');
};

// Encrypt data
const encryptData = (data) => {
  const publicKey = fs.readFileSync(publicKeyPath, 'utf8');
  const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(data));
  return encryptedData.toString('base64');
};

// Decrypt data
const decryptData = (encryptedData) => {
  const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
  const decryptedData = crypto.privateDecrypt(privateKey, Buffer.from(encryptedData, 'base64'));
  return decryptedData.toString('utf8');
};

// Hash data (e.g., for verifying file integrity)
const hashData = (data) => {
  return crypto.createHash('sha256').update(data).digest('hex');
};

// Verify hash
const verifyHash = (data, hash) => {
  return hashData(data) === hash;
};

module.exports = {
  generateKeys,
  encryptData,
  decryptData,
  hashData,
  verifyHash,
};
