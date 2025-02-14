const config = {
    blockchain: {
      recordStorageAddress: '0xYourRecordStorageContractAddress', // Replace with your deployed RecordStorage contract address
      patientAccessAddress: '0xYourPatientAccessContractAddress', // Replace with your deployed PatientAccess contract address
      network: 'https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Replace with your Infura project endpoint
    },
    ipfs: {
      gatewayUrl: 'https://ipfs.infura.io/ipfs/', // Default IPFS gateway
      apiUrl: 'https://ipfs.infura.io:5001/api/v0', // IPFS API endpoint
    },
    app: {
      appName: 'Healthcare Blockchain',
      version: '1.0.0',
    },
  };
  
  export default config;
  