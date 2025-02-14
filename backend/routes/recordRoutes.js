const express = require('express');
const router = express.Router();
const {
  getAllRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
} = require('../controllers/recordController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for protecting routes

// Route: GET /api/records
// Description: Fetch all records for the authenticated user
router.get('/', authMiddleware, getAllRecords);

// Route: GET /api/records/:id
// Description: Fetch a specific record by ID
router.get('/:id', authMiddleware, getRecordById);

// Route: POST /api/records
// Description: Create a new medical record
router.post('/', authMiddleware, createRecord);

// Route: PUT /api/records/:id
// Description: Update an existing record by ID
router.put('/:id', authMiddleware, updateRecord);

// Route: DELETE /api/records/:id
// Description: Delete a specific record by ID
router.delete('/:id', authMiddleware, deleteRecord);

module.exports = router;
