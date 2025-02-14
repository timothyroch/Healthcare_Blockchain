import React, { useState, useEffect } from 'react';
import RecordCard from '../components/RecordCard'; // Import the reusable RecordCard component
import blockchainService from '../services/blockchainService'; // Import the blockchain interaction service
import './styles/DoctorDashboard.css'; // Import styles for the doctor dashboard

const DoctorDashboard = () => {
  const [records, setRecords] = useState([]); // State to store the list of records
  const [loading, setLoading] = useState(true); // State for loading indicator

  // Fetch records from the blockchain
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const fetchedRecords = await blockchainService.getAccessibleRecords();
        setRecords(fetchedRecords);
      } catch (error) {
        console.error('Error fetching records:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, []);

  // Handle viewing a record
  const handleViewRecord = (record) => {
    alert(`Viewing record: ${record.fileName}\nDescription: ${record.description}`);
    // Additional logic to open the record or display its details can be added here
  };

  return (
    <div className="doctor-dashboard">
      <h2>Doctor Dashboard</h2>
      <p>Welcome, Doctor! Here are the medical records you have access to:</p>

      {loading ? (
        <p>Loading records...</p>
      ) : records.length > 0 ? (
        <div className="record-list">
          {records.map((record, index) => (
            <RecordCard
              key={index}
              record={record}
              userRole="doctor"
              onView={handleViewRecord}
            />
          ))}
        </div>
      ) : (
        <p>No records available.</p>
      )}
    </div>
  );
};

export default DoctorDashboard;
