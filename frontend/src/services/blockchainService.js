import Web3 from 'web3';
import RecordStorageABI from './abis/RecordStorage.json';
import PatientAccessABI from './abis/PatientAccess.json';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

// Replace with the deployed contract addresses
const recordStorageAddress = '0xYourRecordStorageContractAddress';
const patientAccessAddress = '0xYourPatientAccessContractAddress';

// Initialize contract instances
const recordStorageContract = new web3.eth.Contract(RecordStorageABI, recordStorageAddress);
const patientAccessContract = new web3.eth.Contract(PatientAccessABI, patientAccessAddress);

const blockchainService = {
  // Fetch records owned by the current account
  getPatientRecords: async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const patientAddress = accounts[0];
      const recordCount = await recordStorageContract.methods.recordCount().call();

      const records = [];
      for (let i = 1; i <= recordCount; i++) {
        const record = await recordStorageContract.methods.records(i).call();
        if (record.owner.toLowerCase() === patientAddress.toLowerCase()) {
          records.push({ id: i, ...record });
        }
      }

      return records;
    } catch (error) {
      console.error('Error fetching patient records:', error);
      throw error;
    }
  },

  // Fetch records accessible by the current doctor
  getAccessibleRecords: async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const doctorAddress = accounts[0];
      const recordCount = await recordStorageContract.methods.recordCount().call();

      const records = [];
      for (let i = 1; i <= recordCount; i++) {
        const isAuthorized = await recordStorageContract.methods.isAuthorized(i, doctorAddress).call();
        if (isAuthorized) {
          const record = await recordStorageContract.methods.records(i).call();
          records.push({ id: i, ...record });
        }
      }

      return records;
    } catch (error) {
      console.error('Error fetching accessible records:', error);
      throw error;
    }
  },

  // Grant access to a specific record
  grantAccess: async (recordId, providerAddress) => {
    try {
      const accounts = await web3.eth.getAccounts();
      await recordStorageContract.methods.grantAccess(recordId, providerAddress).send({ from: accounts[0] });
      return 'Access granted successfully!';
    } catch (error) {
      console.error('Error granting access:', error);
      throw error;
    }
  },

  // Revoke access to a specific record
  revokeAccess: async (recordId, providerAddress) => {
    try {
      const accounts = await web3.eth.getAccounts();
      await recordStorageContract.methods.revokeAccess(recordId, providerAddress).send({ from: accounts[0] });
      return 'Access revoked successfully!';
    } catch (error) {
      console.error('Error revoking access:', error);
      throw error;
    }
  },

  // Add a new record
  addRecord: async (recordHash, fileName, description) => {
    try {
      const accounts = await web3.eth.getAccounts();
      await recordStorageContract.methods
        .addRecord(recordHash, fileName, description)
        .send({ from: accounts[0] });
      return 'Record added successfully!';
    } catch (error) {
      console.error('Error adding record:', error);
      throw error;
    }
  },
};

export default blockchainService;
