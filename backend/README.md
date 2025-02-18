

# **Backend for Healthcare Blockchain Project**

## **Overview**

The **Backend** folder provides the server-side logic for the **Healthcare Blockchain Project**, including APIs for authentication, record management, and blockchain interactions. It ensures secure and seamless communication between the frontend, blockchain, and any off-chain data storage.

---

## **Folder Structure**

```plaintext
backend/
├── server.js               # Entry point for the backend
├── routes/                 # API endpoints
│   ├── authRoutes.js       # Handles user authentication
│   ├── recordRoutes.js     # Handles record-related APIs
│   └── blockchainRoutes.js # APIs for blockchain interactions
├── controllers/            # Business logic for APIs
│   ├── authController.js
│   ├── recordController.js
│   └── blockchainController.js
├── models/                 # Database models (if applicable)
│   └── User.js             # Example user schema
├── middleware/             # Middleware for security and validation
│   └── authMiddleware.js   # JWT authentication middleware
└── README.md               # Documentation for the backend
```

---

## **Key Features**

- **Authentication**:
  - Secure user login and registration with JWT-based authentication.
  - Role-based access for `patient` and `doctor`.

- **Medical Record Management**:
  - Create, update, and delete medical records.
  - Fetch user-specific medical records.

- **Blockchain Integration**:
  - Interact with smart contracts for record storage and access control.
  - Fetch blockchain transaction details and record metadata.

---

## **API Endpoints**

### **Authentication Routes** (`/api/auth`)
| Method | Endpoint        | Description                |
|--------|-----------------|----------------------------|
| POST   | `/login`        | User login                |
| POST   | `/register`     | User registration         |
| POST   | `/logout`       | User logout               |

### **Record Routes** (`/api/records`)
| Method | Endpoint        | Description                       |
|--------|-----------------|-----------------------------------|
| GET    | `/`             | Get all records for a user       |
| GET    | `/:id`          | Get a specific record by ID      |
| POST   | `/`             | Create a new record              |
| PUT    | `/:id`          | Update an existing record        |
| DELETE | `/:id`          | Delete a specific record         |

### **Blockchain Routes** (`/api/blockchain`)
| Method | Endpoint             | Description                        |
|--------|----------------------|------------------------------------|
| GET    | `/transaction/:id`   | Fetch transaction details by ID   |
| POST   | `/interact`          | Interact with a smart contract    |
| GET    | `/record/:recordId`  | Retrieve record details from blockchain |

---

## **Technologies Used**

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for creating RESTful APIs.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **Web3.js**: Blockchain interaction library.
- **JSON Web Token (JWT)**: For secure user authentication.
- **bcrypt.js**: Password hashing for secure storage.

---

## **Setup Instructions**

### **Prerequisites**

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud-based)
- [MetaMask](https://metamask.io/) (for blockchain interactions)

### **Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/Healthcare_Blockchain_Project.git
   cd Healthcare_Blockchain_Project/backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the backend folder and add the following:
   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   BLOCKCHAIN_RPC_URL=https://your_blockchain_node_url
   RECORD_STORAGE_ADDRESS=0xYourDeployedRecordStorageContractAddress
   ```

4. **Run the Server**:
   ```bash
   node server.js
   ```

### **Testing the API**

Use tools like **Postman** or **cURL** to test the endpoints. Ensure you include the `Authorization` header with a valid JWT token for protected routes.

---

## **Next Steps**

- **Connect to Smart Contracts**:
  Ensure your smart contracts are deployed, and the contract addresses are added to the environment variables.

- **Database Integration**:
  Replace the mock data with a real MongoDB database for user and record management.

- **Add Unit and Integration Tests**:
  Use testing libraries like **Jest** or **Mocha** to test API functionality.

- **Improve Security**:
  - Use HTTPS for secure communication.
  - Implement rate limiting to prevent abuse.

---

## **Contributing**

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

---

## **License**

This project is licensed under the [MIT License](../LICENSE).

---

