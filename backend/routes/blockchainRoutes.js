const express = require('express');
const router = express.Router();
const { getTransaction, interactWithContract, getRecordDetails } = require('../controllers/blockchainController');

// Route: GET /api/blockchain/transaction/:id
// Description: Fetch transaction details by transaction ID
router.get('/transaction/:id', getTransaction);

// Route: POST /api/blockchain/interact
// Description: Interact with a smart contract (e.g., call a method, send a transaction)
router.post('/interact', interactWithContract);

// Route: GET /api/blockchain/record/:recordId
// Description: Retrieve record details from the blockchain
router.get('/record/:recordId', getRecordDetails);

module.exports = router;
