import crypto from 'crypto';

// Generate a SHA-256 hash of the given data
const generateHash = (data) => {
  if (!data) throw new Error('No data provided for hashing');
  return crypto.createHash('sha256').update(data).digest('hex');
};

// Verify if the given data matches the provided hash
const verifyHash = (data, hash) => {
  if (!data || !hash) throw new Error('Data and hash are required for verification');
  const dataHash = generateHash(data);
  return dataHash === hash;
};

export { generateHash, verifyHash };
