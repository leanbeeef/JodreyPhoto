import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="fixed-top bg-white shadow-sm border-bottom">
    <nav className="navbar navbar-expand-lg container">
      <Link className="navbar-brand" to="/">
        <img src="/camera-icon.svg" alt="Site logo" width="32" height="32" />
      </Link>
      <div className="navbar-nav ms-auto">
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/pricing">Pricing</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>
    </nav>
  </header>
);

export default Header;
