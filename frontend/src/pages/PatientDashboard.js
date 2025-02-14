import React, { useState, useEffect } from 'react';
import RecordCard from '../components/RecordCard'; // Reusable RecordCard component
import blockchainService from '../services/blockchainService'; // Blockchain interaction service
import './styles/PatientDashboard.css'; // Import styles for the dashboard

const PatientDashboard = () => {
  const [records, setRecords] = useState([]); // State to store the patient's records
  const [loading, setLoading] = useState(true); // Loading indicator

  // Fetch patient records from the blockchain
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const fetchedRecords = await blockchainService.getPatientRecords();
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
  };

  // Handle sharing a record
  const handleShareRecord = (record) => {
    const providerAddress = prompt('Enter the provider address to share this record with:');
    if (providerAddress) {
      blockchainService
        .grantAccess(record.id, providerAddress)
        .then(() => alert('Access granted successfully!'))
        .catch((error) => console.error('Error granting access:', error));
    }
  };

  // Handle revoking access to a record
  const handleRevokeAccess = (record) => {
    const providerAddress = prompt('Enter the provider address to revoke access from:');
    if (providerAddress) {
      blockchainService
        .revokeAccess(record.id, providerAddress)
        .then(() => alert('Access revoked successfully!'))
        .catch((error) => console.error('Error revoking access:', error));
    }
  };

  return (
    <div className="patient-dashboard">
      <h2>Patient Dashboard</h2>
      <p>Manage your medical records and control access to healthcare providers.</p>

      {loading ? (
        <p>Loading your records...</p>
      ) : records.length > 0 ? (
        <div className="record-list">
          {records.map((record, index) => (
            <RecordCard
              key={index}
              record={record}
              userRole="patient"
              onView={handleViewRecord}
              onShare={handleShareRecord}
              onRevoke={handleRevokeAccess}
            />
          ))}
        </div>
      ) : (
        <p>No records available.</p>
      )}
    </div>
  );
};

export default PatientDashboard;
