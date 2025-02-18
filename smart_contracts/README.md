# **Smart Contracts for Healthcare Blockchain Project**

## **Overview**

This folder contains the Solidity smart contracts for the **Healthcare Blockchain Project**. These contracts manage the secure and decentralized storage of medical record metadata, as well as patient-controlled access to records. The contracts are designed to ensure data integrity, privacy, and accessibility, providing a foundation for the healthcare system.

---

## **Contracts**

### 1. **PatientAccess.sol**
   - **Purpose**: Manages access control for patient records.
   - **Key Features**:
     - Patients can grant and revoke access to healthcare providers.
     - Tracks authorized users and their permissions.
     - Enables adding new medical records by authorized users.
   - **Key Functions**:
     - `grantAccess(address provider)`: Grants access to a healthcare provider.
     - `revokeAccess(address provider)`: Revokes access from a healthcare provider.
     - `addRecord(string recordHash, string description)`: Adds a new medical record.
     - `isAuthorized(address provider)`: Checks if a provider is authorized.

### 2. **RecordStorage.sol**
   - **Purpose**: Stores metadata for medical records and manages access to specific records.
   - **Key Features**:
     - Stores file hashes, descriptions, and record owners.
     - Grants or revokes access to specific records.
     - Enables authorized users to retrieve record metadata.
   - **Key Functions**:
     - `addRecord(string recordHash, string fileName, string description)`: Adds a new record.
     - `grantAccess(uint256 recordId, address provider)`: Grants access to a specific record.
     - `revokeAccess(uint256 recordId, address provider)`: Revokes access to a specific record.
     - `getRecord(uint256 recordId)`: Retrieves metadata for a specific record.
     - `isAuthorized(uint256 recordId, address provider)`: Checks if a provider has access to a specific record.

### 3. **Migrations.sol**
   - **Purpose**: Tracks the deployment history of the smart contracts.
   - **Key Features**:
     - Ensures proper deployment of contracts.
     - Required by the Truffle framework.

---

## **Folder Structure**

```plaintext
smart_contracts/
├── PatientAccess.sol         # Smart contract for patient-controlled access
├── RecordStorage.sol         # Smart contract for storing record metadata
├── Migrations.sol            # Tracks deployment history
├── migrations/               # Deployment scripts
│   ├── 1_initial_migration.js
│   ├── 2_deploy_patient_access.js
│   └── 3_deploy_record_storage.js
├── tests/                    # Test scripts for smart contracts
│   ├── test_patient_access.js
│   └── test_record_storage.js
└── README.md                 # Documentation for the smart contracts
```

---

## **Installation and Setup**

1. **Install Dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) and [Truffle](https://www.trufflesuite.com/) installed.
   ```bash
   npm install -g truffle
   ```

2. **Compile the Smart Contracts**:
   ```bash
   truffle compile
   ```

3. **Deploy the Smart Contracts**:
   Run migrations to deploy the contracts to a local blockchain (e.g., Ganache).
   ```bash
   truffle migrate --network development
   ```

---

## **Testing**

1. **Run Tests**:
   Test the functionality of the smart contracts using Truffle.
   ```bash
   truffle test
   ```

2. **Test Files**:
   - `test_patient_access.js`: Tests for `PatientAccess.sol`.
   - `test_record_storage.js`: Tests for `RecordStorage.sol`.

---

## **Usage**

- **PatientAccess.sol**:
  - Deploy the contract with the patient’s address.
  - Use `grantAccess` and `revokeAccess` to manage permissions.
  - Add records using `addRecord`.

- **RecordStorage.sol**:
  - Deploy the contract for managing record metadata.
  - Use `addRecord` to store new records.
  - Grant or revoke access to specific records using `grantAccess` and `revokeAccess`.

---

## **Security Considerations**

- **Access Control**:
  - Ensure only authorized users can access or modify records.
  - Use secure authentication methods for interacting with the contracts.

- **Data Integrity**:
  - Store only the hash of medical records on-chain to ensure immutability.
  - Use off-chain storage (e.g., IPFS) for large files.

- **Gas Optimization**:
  - Keep functions efficient to minimize gas costs.

---

## **Future Improvements**

- Implement advanced access control mechanisms (e.g., role-based access control).
- Add support for multi-signature approvals for sensitive actions.
- Optimize contract design for lower gas consumption.

---

## **License**

This project is licensed under the [MIT License](../LICENSE).

---

## **Contact**

- **Author**: Timothy Roch 
- **Email**: timothyroch@gmail.com  


