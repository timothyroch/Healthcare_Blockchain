Here’s a comprehensive **`DeveloperGuide.md`** for your **`docs`** folder. This guide is aimed at developers working on the **Healthcare Blockchain Project** to help them understand the system architecture, setup, and development workflow.

---

# **Developer Guide for Healthcare Blockchain Project**

## **Table of Contents**

1. [Introduction](#introduction)
2. [System Architecture](#system-architecture)
3. [Technology Stack](#technology-stack)
4. [Setup Instructions](#setup-instructions)
   - [Prerequisites](#prerequisites)
   - [Frontend Setup](#frontend-setup)
   - [Backend Setup](#backend-setup)
   - [Smart Contracts](#smart-contracts)
5. [Development Workflow](#development-workflow)
   - [Running the Application](#running-the-application)
   - [Testing](#testing)
6. [Code Structure](#code-structure)
   - [Frontend](#frontend)
   - [Backend](#backend)
   - [Smart Contracts](#smart-contracts)
7. [Best Practices](#best-practices)
8. [Deployment Guide](#deployment-guide)
9. [Troubleshooting](#troubleshooting)
10. [Future Improvements](#future-improvements)

---

## **Introduction**

The **Healthcare Blockchain Project** is a decentralized application that provides secure and transparent management of medical records. This guide explains how to set up, develop, and contribute to the project.

---

## **System Architecture**

![System Architecture](../docs/SystemArchitecture.png) <!-- Replace with the actual file path -->

### Components:
1. **Frontend**:
   - A React-based UI for patients and doctors to interact with the system.
2. **Backend**:
   - Node.js-based REST API for user authentication and record management.
3. **Blockchain**:
   - Smart contracts deployed on Ethereum to manage access control and record metadata.
4. **IPFS**:
   - Decentralized storage for medical records.

---

## **Technology Stack**

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT
- **Blockchain**: Solidity, Web3.js
- **Storage**: IPFS
- **Testing**: Mocha, Chai, Truffle

---

## **Setup Instructions**

### **Prerequisites**

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)
- [MetaMask](https://metamask.io/)
- [Truffle](https://trufflesuite.com/)
- [Ganache](https://trufflesuite.com/ganache/)

---

### **Frontend Setup**

1. Navigate to the `frontend` folder:
   ```bash
   cd Healthcare_Blockchain_Project/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

### **Backend Setup**

1. Navigate to the `backend` folder:
   ```bash
   cd Healthcare_Blockchain_Project/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env`:
   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   BLOCKCHAIN_RPC_URL=https://your_blockchain_node_url
   RECORD_STORAGE_ADDRESS=0xYourDeployedRecordStorageContractAddress
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

---

### **Smart Contracts**

1. Navigate to the `smart_contracts` folder:
   ```bash
   cd Healthcare_Blockchain_Project/smart_contracts
   ```

2. Compile the contracts:
   ```bash
   truffle compile
   ```

3. Deploy the contracts to a local or test blockchain:
   ```bash
   truffle migrate --network development
   ```

4. Run the smart contract tests:
   ```bash
   truffle test
   ```

---

## **Development Workflow**

### **Running the Application**

1. Start the backend server.
2. Start the frontend development server.
3. Ensure your MetaMask wallet is connected to the correct network.
4. Interact with the application via the frontend.

---

### **Testing**

1. **Frontend Tests**:
   - Run the frontend tests:
     ```bash
     npm test
     ```

2. **Backend Tests**:
   - Use tools like Postman for API testing.
   - Write unit and integration tests using Mocha and Chai.

3. **Smart Contract Tests**:
   - Run the Truffle test suite as mentioned above.

---

## **Code Structure**

### **Frontend**
```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── contexts/
│   ├── services/
│   ├── utils/
│   └── styles/
```

### **Backend**
```
backend/
├── routes/
├── controllers/
├── models/
├── middleware/
└── server.js
```

### **Smart Contracts**
```
smart_contracts/
├── contracts/
├── migrations/
├── tests/
└── truffle-config.js
```

---

## **Best Practices**

1. Write clean and modular code.
2. Use version control (Git) for collaborative development.
3. Document your code and APIs.
4. Secure sensitive data using environment variables.

---

## **Deployment Guide**

1. **Frontend**:
   - Build the production version:
     ```bash
     npm run build
     ```

   - Deploy using a platform like Vercel, Netlify, or AWS.

2. **Backend**:
   - Use a cloud provider (e.g., Heroku, AWS, DigitalOcean) for deployment.

3. **Smart Contracts**:
   - Deploy to Ethereum Mainnet or a testnet (e.g., Rinkeby) using Truffle.

---

## **Troubleshooting**

- **MetaMask Connection Issues**:
  - Ensure the correct network is selected.
  - Refresh the page after switching networks.

- **Database Connection Errors**:
  - Verify the `MONGO_URI` in the `.env` file.
  - Ensure MongoDB is running.

- **Smart Contract Deployment Errors**:
  - Check the network configuration in `truffle-config.js`.
  - Ensure your blockchain node is running.

---

## **Future Improvements**

1. Add multi-language support.
2. Implement dark mode for the frontend.
3. Add analytics and visualizations for patient and doctor dashboards.
4. Expand to support other blockchain platforms (e.g., Polkadot, Solana).
