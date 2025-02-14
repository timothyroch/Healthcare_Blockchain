import React from 'react';
import '/RecordCard.css'; // Import styles for the card

const RecordCard = ({ record, userRole, onView, onShare, onRevoke }) => {
  return (
    <div className="record-card">
      <div className="record-header">
        <h3>{record.fileName}</h3>
        <p className="record-timestamp">{new Date(record.timestamp * 1000).toLocaleString()}</p>
      </div>
      <div className="record-body">
        <p><strong>Description:</strong> {record.description}</p>
        <p><strong>Uploaded By:</strong> {record.uploadedBy}</p>
        <p><strong>Record Hash:</strong> {record.recordHash}</p>
      </div>
      <div className="record-actions">
        <button className="view-button" onClick={() => onView(record)}>View</button>
        {userRole === 'patient' && (
          <>
            <button className="share-button" onClick={() => onShare(record)}>Share</button>
            <button className="revoke-button" onClick={() => onRevoke(record)}>Revoke Access</button>
          </>
        )}
      </div>
    </div>
  );
};

export default RecordCard;
