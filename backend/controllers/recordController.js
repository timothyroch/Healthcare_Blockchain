const records = []; // Mock database (replace with actual DB logic)

// Get all records for the authenticated user
const getAllRecords = (req, res) => {
  const userId = req.user.id; // Extract user ID from JWT payload
  const userRecords = records.filter((record) => record.ownerId === userId);
  res.status(200).json({ records: userRecords });
};

// Get a specific record by ID
const getRecordById = (req, res) => {
  const record = records.find((record) => record.id === parseInt(req.params.id));
  if (!record) {
    return res.status(404).json({ message: 'Record not found' });
  }
  if (record.ownerId !== req.user.id) {
    return res.status(403).json({ message: 'Unauthorized access to this record' });
  }
  res.status(200).json({ record });
};

// Create a new medical record
const createRecord = (req, res) => {
  const { title, description, hash } = req.body;

  if (!title || !hash) {
    return res.status(400).json({ message: 'Title and hash are required' });
  }

  const newRecord = {
    id: records.length + 1,
    ownerId: req.user.id, // Owner ID from JWT payload
    title,
    description: description || '',
    hash, // IPFS or file hash
    createdAt: new Date(),
  };

  records.push(newRecord);
  res.status(201).json({ message: 'Record created successfully', record: newRecord });
};

// Update an existing record by ID
const updateRecord = (req, res) => {
  const record = records.find((record) => record.id === parseInt(req.params.id));
  if (!record) {
    return res.status(404).json({ message: 'Record not found' });
  }
  if (record.ownerId !== req.user.id) {
    return res.status(403).json({ message: 'Unauthorized to update this record' });
  }

  const { title, description } = req.body;
  record.title = title || record.title;
  record.description = description || record.description;

  res.status(200).json({ message: 'Record updated successfully', record });
};

// Delete a specific record by ID
const deleteRecord = (req, res) => {
  const recordIndex = records.findIndex((record) => record.id === parseInt(req.params.id));
  if (recordIndex === -1) {
    return res.status(404).json({ message: 'Record not found' });
  }
  const record = records[recordIndex];
  if (record.ownerId !== req.user.id) {
    return res.status(403).json({ message: 'Unauthorized to delete this record' });
  }

  records.splice(recordIndex, 1);
  res.status(200).json({ message: 'Record deleted successfully' });
};

module.exports = {
  getAllRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
};
