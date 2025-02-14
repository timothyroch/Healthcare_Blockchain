const Web3 = require('web3');
const RecordStorageABI = require('../abis/RecordStorage.json'); // ABI for RecordStorage contract

// Initialize Web3 with the blockchain RPC URL (e.g., Infura or local node)
const web3 = new Web3(process.env.BLOCKCHAIN_RPC_URL);

// Replace with your deployed contract address
const recordStorageAddress = process.env.RECORD_STORAGE_ADDRESS;
const recordStorageContract = new web3.eth.Contract(RecordStorageABI, recordStorageAddress);

// Fetch transaction details by transaction ID
const getTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await web3.eth.getTransaction(id);

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json({ transaction });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transaction', error: error.message });
  }
};

// Interact with a smart contract (e.g., call a method or send a transaction)
const interactWithContract = async (req, res) => {
  try {
    const { method, params, from } = req.body;

    // Ensure method exists on the contract
    if (!recordStorageContract.methods[method]) {
      return res.status(400).json({ message: `Method ${method} not found on contract` });
    }

    const result = await recordStorageContract.methods[method](...params).send({ from });
    res.status(200).json({ message: 'Contract interaction successful', result });
  } catch (error) {
    res.status(500).json({ message: 'Error interacting with contract', error: error.message });
  }
};

// Retrieve record details from the blockchain by record ID
const getRecordDetails = async (req, res) => {
  try {
    const { recordId } = req.params;

    const record = await recordStorageContract.methods.records(recordId).call();

    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.status(200).json({ record });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching record details', error: error.message });
  }
};

module.exports = {
  getTransaction,
  interactWithContract,
  getRecordDetails,
};
