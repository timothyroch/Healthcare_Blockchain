import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from './contexts/AuthContext'; // Authentication context for user role and login state
import '/Header.css'; // Import the header styles

const Header = () => {
  const { isAuthenticated, userRole, logout } = useContext(AuthContext); // Access user authentication and role
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" aria-label="Navigate to homepage">
            <img src="/assets/logo.png" alt="Healthcare Blockchain Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`} aria-label="Main Navigation">
          <Link to="/">Home</Link>
          {isAuthenticated && userRole === 'patient' && <Link to="/patient-dashboard">My Dashboard</Link>}
          {isAuthenticated && userRole === 'doctor' && <Link to="/doctor-dashboard">Doctor Dashboard</Link>}
          <Link to="/about">About</Link>
          {isAuthenticated ? (
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
