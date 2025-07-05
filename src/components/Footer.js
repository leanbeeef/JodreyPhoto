import React from 'react';

const Footer = () => (
  <footer className="d-flex justify-content-between align-items-center p-3 border-top bg-light">
    <div>
      <a href="/" className="text-decoration-none me-3">Home</a>
      <a href="/about" className="text-decoration-none me-3">About</a>
      <a href="/pricing" className="text-decoration-none">Pricing</a>
    </div>
    <div>
      <a href="https://instagram.com" aria-label="Instagram" className="me-2">📷</a>
      <a href="https://twitter.com" aria-label="Twitter" className="me-2">🐦</a>
      <a href="https://facebook.com" aria-label="Facebook">📘</a>
    </div>
    <div>
      <img src="/camera-icon.svg" alt="Site logo" width="40" />
    </div>
  </footer>
);

export default Footer;
