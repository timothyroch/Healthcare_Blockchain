import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './styles/LoginPage.css'; // Import styles for the login page

const LoginPage = () => {
  const { login } = useContext(AuthContext); // Access login function from AuthContext
  const [role, setRole] = useState('patient'); // Default role selection
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(role);
      if (role === 'patient') {
        navigate('/patient-dashboard');
      } else {
        navigate('/doctor-dashboard');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <p>Select your role to log in:</p>

      <div className="role-selection">
        <label>
          <input
            type="radio"
            name="role"
            value="patient"
            checked={role === 'patient'}
            onChange={(e) => setRole(e.target.value)}
          />
          Patient
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="doctor"
            checked={role === 'doctor'}
            onChange={(e) => setRole(e.target.value)}
          />
          Doctor
        </label>
      </div>

      {error && <p className="error">{error}</p>}

      <button onClick={handleLogin} className="btn-primary">
        Login
      </button>
    </div>
  );
};

export default LoginPage;
