import React, { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';
import RecordStorageABI from './abis/RecordStorage.json'; // ABI for RecordStorage contract
import PatientAccessABI from './abis/PatientAccess.json'; // ABI for PatientAccess contract

// Create the context
const BlockchainContext = createContext();

// BlockchainProvider component to wrap the application
const BlockchainProvider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [recordStorageContract, setRecordStorageContract] = useState(null);
  const [patientAccessContract, setPatientAccessContract] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Smart contract addresses (replace with your actual deployed addresses)
  const recordStorageAddress = '0xYourRecordStorageContractAddress';
  const patientAccessAddress = '0xYourPatientAccessContractAddress';

  // Initialize Web3 and contracts
  useEffect(() => {
    const initBlockchain = async () => {
      try {
        if (window.ethereum) {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const accounts = await web3Instance.eth.requestAccounts();
          setAccount(accounts[0]);

          const recordStorage = new web3Instance.eth.Contract(RecordStorageABI, recordStorageAddress);
          setRecordStorageContract(recordStorage);

          const patientAccess = new web3Instance.eth.Contract(PatientAccessABI, patientAccessAddress);
          setPatientAccessContract(patientAccess);

          setIsLoading(false);
        } else {
          alert('Please install MetaMask to interact with the blockchain.');
        }
      } catch (error) {
        console.error('Error initializing blockchain:', error);
      }
    };

    initBlockchain();
  }, [recordStorageAddress, patientAccessAddress]);

  // Utility function to get the user's current balance
  const getBalance = async () => {
    if (web3 && account) {
      return await web3.eth.getBalance(account);
    }
    return '0';
  };

  return (
    <BlockchainContext.Provider
      value={{
        web3,
        account,
        recordStorageContract,
        patientAccessContract,
        getBalance,
        isLoading,
      }}
    >
      {!isLoading && children} {/* Render children only after loading is complete */}
    </BlockchainContext.Provider>
  );
};

export { BlockchainContext, BlockchainProvider };
