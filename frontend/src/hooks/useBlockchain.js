import { useState, useEffect } from 'react';
import Web3 from 'web3';
import RecordStorageABI from '../abis/RecordStorage.json'; // Import the ABI of your RecordStorage contract
import PatientAccessABI from '../abis/PatientAccess.json'; // Import the ABI of your PatientAccess contract

const useBlockchain = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [recordStorageContract, setRecordStorageContract] = useState(null);
  const [patientAccessContract, setPatientAccessContract] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Smart contract addresses
  const recordStorageAddress = '0xYourRecordStorageContractAddress'; // Replace with deployed address
  const patientAccessAddress = '0xYourPatientAccessContractAddress'; // Replace with deployed address

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

  return { web3, account, recordStorageContract, patientAccessContract, isLoading };
};

export default useBlockchain;
