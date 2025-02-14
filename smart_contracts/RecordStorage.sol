// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RecordStorage {
    // Struct to represent a medical record
    struct Record {
        string recordHash; // Hash of the medical record (off-chain storage)
        string fileName;   // Name of the file
        string description; // Short description of the record
        address owner;     // Address of the patient who owns the record
        uint256 timestamp; // Timestamp when the record was added
    }

    // Mapping of record ID to Record struct
    mapping(uint256 => Record) public records;
    uint256 public recordCount; // Counter for total records

    // Mapping of record ID to authorized addresses (doctors/providers)
    mapping(uint256 => mapping(address => bool)) public recordAccess;

    // Events
    event RecordAdded(uint256 indexed recordId, string fileName, address indexed owner);
    event AccessGranted(uint256 indexed recordId, address indexed provider);
    event AccessRevoked(uint256 indexed recordId, address indexed provider);

    // Modifier to restrict actions to the owner of a specific record
    modifier onlyOwner(uint256 _recordId) {
        require(records[_recordId].owner == msg.sender, "Not the record owner");
        _;
    }

    // Modifier to restrict access to authorized users
    modifier onlyAuthorized(uint256 _recordId) {
        require(
            records[_recordId].owner == msg.sender || recordAccess[_recordId][msg.sender],
            "Not authorized to access this record"
        );
        _;
    }

    // Function to add a new record
    function addRecord(
        string memory _recordHash,
        string memory _fileName,
        string memory _description
    ) public {
        recordCount++;
        records[recordCount] = Record({
            recordHash: _recordHash,
            fileName: _fileName,
            description: _description,
            owner: msg.sender,
            timestamp: block.timestamp
        });
        emit RecordAdded(recordCount, _fileName, msg.sender);
    }

    // Function to grant access to a specific record
    function grantAccess(uint256 _recordId, address _provider) public onlyOwner(_recordId) {
        recordAccess[_recordId][_provider] = true;
        emit AccessGranted(_recordId, _provider);
    }

    // Function to revoke access to a specific record
    function revokeAccess(uint256 _recordId, address _provider) public onlyOwner(_recordId) {
        recordAccess[_recordId][_provider] = false;
        emit AccessRevoked(_recordId, _provider);
    }

    // Function to retrieve a specific record's metadata
    function getRecord(uint256 _recordId) public view onlyAuthorized(_recordId) returns (
        string memory recordHash,
        string memory fileName,
        string memory description,
        address owner,
        uint256 timestamp
    ) {
        Record memory record = records[_recordId];
        return (
            record.recordHash,
            record.fileName,
            record.description,
            record.owner,
            record.timestamp
        );
    }

    // Function to check if a provider is authorized to access a specific record
    function isAuthorized(uint256 _recordId, address _provider) public view returns (bool) {
        return recordAccess[_recordId][_provider];
    }
}
