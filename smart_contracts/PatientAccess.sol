// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientAccess {
    // Struct to represent a medical record
    struct MedicalRecord {
        string recordHash; // Hash of the medical record stored off-chain
        string description; // Description of the record
        address uploadedBy; // Address of the uploader (doctor or patient)
        uint256 timestamp; // Timestamp of record upload
    }

    // Patient data
    address public patient; // Owner of the records
    mapping(address => bool) public authorizedProviders; // Authorized doctors/providers
    MedicalRecord[] public medicalRecords; // List of records

    // Events
    event RecordAdded(string recordHash, string description, address indexed uploadedBy);
    event AccessGranted(address indexed provider);
    event AccessRevoked(address indexed provider);

    // Modifier to restrict actions to the patient
    modifier onlyPatient() {
        require(msg.sender == patient, "Only the patient can perform this action");
        _;
    }

    // Modifier to restrict access to authorized providers or the patient
    modifier onlyAuthorized() {
        require(
            msg.sender == patient || authorizedProviders[msg.sender],
            "Not authorized to access records"
        );
        _;
    }

    // Constructor to set the patient
    constructor(address _patient) {
        patient = _patient;
    }

    // Function to grant access to a healthcare provider
    function grantAccess(address _provider) public onlyPatient {
        authorizedProviders[_provider] = true;
        emit AccessGranted(_provider);
    }

    // Function to revoke access from a healthcare provider
    function revokeAccess(address _provider) public onlyPatient {
        authorizedProviders[_provider] = false;
        emit AccessRevoked(_provider);
    }

    // Function to add a new medical record
    function addRecord(string memory _recordHash, string memory _description) public onlyAuthorized {
        medicalRecords.push(MedicalRecord({
            recordHash: _recordHash,
            description: _description,
            uploadedBy: msg.sender,
            timestamp: block.timestamp
        }));
        emit RecordAdded(_recordHash, _description, msg.sender);
    }

    // Function to get all records
    function getRecords() public view onlyAuthorized returns (MedicalRecord[] memory) {
        return medicalRecords;
    }

    // Function to check if a provider is authorized
    function isAuthorized(address _provider) public view returns (bool) {
        return authorizedProviders[_provider];
    }
}
