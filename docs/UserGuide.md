Here’s a comprehensive **`UserGuide.md`** for your **`docs`** folder. This guide is written for end users to help them navigate and use the **Healthcare Blockchain Project** application effectively.

---

# **User Guide for Healthcare Blockchain Project**

## **Table of Contents**

1. [Introduction](#introduction)
2. [System Requirements](#system-requirements)
3. [Getting Started](#getting-started)
4. [User Roles](#user-roles)
   - [Patient](#patient)
   - [Doctor](#doctor)
5. [Features](#features)
   - [Login and Registration](#login-and-registration)
   - [Patient Dashboard](#patient-dashboard)
   - [Doctor Dashboard](#doctor-dashboard)
6. [Managing Records](#managing-records)
   - [Uploading Records](#uploading-records)
   - [Granting and Revoking Access](#granting-and-revoking-access)
   - [Viewing Records](#viewing-records)
7. [Troubleshooting](#troubleshooting)
8. [Support](#support)

---

## **Introduction**

The **Healthcare Blockchain Project** provides a secure and decentralized platform for managing and sharing medical records. Patients have complete control over their data, while healthcare providers can access records only with patient consent.

---

## **System Requirements**

To use the platform, ensure your system meets the following requirements:

- **Web Browser**: Google Chrome, Mozilla Firefox, or Microsoft Edge (latest versions recommended)
- **MetaMask Wallet**: Installed and configured for blockchain interactions
- **Internet Connection**: Stable connection for seamless operation

---

## **Getting Started**

1. Open your web browser and navigate to the application URL.
2. Ensure your MetaMask wallet is installed and connected to the correct blockchain network (e.g., Rinkeby or Mainnet).
3. Register or log in using your credentials.

---

## **User Roles**

### **Patient**

As a patient, you can:
- Upload and manage your medical records.
- Grant or revoke access to your records for specific doctors.
- View a history of your record interactions.

### **Doctor**

As a doctor, you can:
- Access patient records with their permission.
- View the metadata and details of the shared records.

---

## **Features**

### **Login and Registration**

- **Login**:
  - Enter your email and password to access the platform.
  - If you’re a new user, click **Register** to create an account.
  
- **Registration**:
  - Select your role as `Patient` or `Doctor`.
  - Provide your email and password.
  - Complete the registration to log in.

---

### **Patient Dashboard**

As a patient, the dashboard provides the following functionalities:

1. **View Records**:
   - See a list of your uploaded medical records.
   - Each record displays its title, description, and upload date.

2. **Upload Records**:
   - Click the **Upload Record** button.
   - Provide a title, description, and select the file to upload.
   - The file will be securely stored on IPFS, and the metadata will be recorded on the blockchain.

3. **Grant or Revoke Access**:
   - Select a record and click **Grant Access** to share it with a doctor.
   - To revoke access, click **Revoke Access** for the selected record.

---

### **Doctor Dashboard**

As a doctor, the dashboard provides the following functionalities:

1. **View Accessible Records**:
   - See a list of patient records that you have been granted access to.
   - Click on a record to view its metadata and download the file.

2. **Search for Records**:
   - Use the search bar to find specific records by patient name or record ID.

---

## **Managing Records**

### **Uploading Records**

1. Navigate to the **Patient Dashboard**.
2. Click **Upload Record**.
3. Fill in the required fields (title and description) and select the file to upload.
4. Click **Submit** to upload the file.

### **Granting and Revoking Access**

1. Select a record from your record list.
2. Click **Grant Access** and enter the doctor’s Ethereum address.
3. To revoke access, select the record and click **Revoke Access**.

### **Viewing Records**

- As a patient, view your records in the **Patient Dashboard**.
- As a doctor, view shared records in the **Doctor Dashboard**.

---

## **Troubleshooting**

1. **Unable to Login**:
   - Ensure you’re using the correct email and password.
   - Reset your password if needed.

2. **MetaMask Not Connected**:
   - Ensure MetaMask is installed and connected to the correct network.
   - Refresh the page after connecting MetaMask.

3. **File Upload Issues**:
   - Ensure the file size is within the allowed limit.
   - Check your internet connection and try again.

4. **Access Errors**:
   - Verify the Ethereum address provided for granting or revoking access.
   - Ensure your MetaMask wallet is unlocked.

---

## **Support**

For additional help, contact the support team:

- **Email**: support@healthcareblockchain.com
- **Documentation**: [Official Docs](#)
- **Community Forum**: [Forum Link](#)

