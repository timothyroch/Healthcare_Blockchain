import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css'; // Import styles for the homepage

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Healthcare Blockchain</h1>
          <p>
            Empowering patients and healthcare providers with secure, decentralized access to medical records.
          </p>
          <div className="hero-buttons">
            <Link to="/login" className="btn-primary">Get Started</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Patient-Controlled Access</h3>
            <p>Grant and revoke access to your medical records with ease.</p>
          </div>
          <div className="feature">
            <h3>Data Integrity</h3>
            <p>Ensure your medical data remains secure and tamper-proof.</p>
          </div>
          <div className="feature">
            <h3>Transparency</h3>
            <p>Track who accessed your records and when, ensuring complete visibility.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Transform Your Healthcare Experience?</h2>
        <Link to="/login" className="btn-primary">Join Us Today</Link>
      </section>
    </div>
  );
};

export default HomePage;
