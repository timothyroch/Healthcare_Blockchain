import React, { createContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// AuthProvider component to wrap the application
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'patient' or 'doctor'
  const [loading, setLoading] = useState(true);

  // Simulated login function (replace with actual backend or blockchain logic)
  const login = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
    localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, userRole: role }));
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('auth');
  };

  // Check local storage for authentication on initial load
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('auth'));
    if (authData && authData.isAuthenticated) {
      setIsAuthenticated(true);
      setUserRole(authData.userRole);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout, loading }}>
      {!loading && children} {/* Ensure the app renders only after loading completes */}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
