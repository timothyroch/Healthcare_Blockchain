import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext'; // AuthContext for managing authentication
import { BlockchainProvider } from './contexts/BlockchainContext'; // BlockchainContext for blockchain interactions
import './styles/styles.css'; // Global styles

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BlockchainProvider>
        <App />
      </BlockchainProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root') // Attach the app to the root element in public/index.html
);
