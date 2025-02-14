import { create } from 'ipfs-http-client';

// Initialize IPFS client (replace with your IPFS node URL if needed)
const ipfs = create({ url: 'https://ipfs.infura.io:5001/api/v0' });

const storageService = {
  // Upload a file to IPFS
  uploadFile: async (file) => {
    try {
      const result = await ipfs.add(file);
      console.log('File uploaded to IPFS:', result);
      return {
        success: true,
        hash: result.path, // This is the IPFS hash
        url: `https://ipfs.infura.io/ipfs/${result.path}`, // Full URL for accessing the file
      };
    } catch (error) {
      console.error('Error uploading file to IPFS:', error);
      return {
        success: false,
        message: 'File upload failed',
      };
    }
  },

  // Retrieve a file from IPFS
  getFile: async (hash) => {
    try {
      const url = `https://ipfs.infura.io/ipfs/${hash}`;
      console.log('Retrieving file from IPFS:', url);
      return url; // Returns the IPFS file URL
    } catch (error) {
      console.error('Error retrieving file from IPFS:', error);
      throw error;
    }
  },
};

export default storageService;
