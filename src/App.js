import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Gallery from './pages/Gallery.js';
import Pricing from './pages/Pricing.js';

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-5 mt-5">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
