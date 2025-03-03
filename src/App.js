import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import DynamicWebsite from './DynamicWebsite';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import OurITSolutions from './components/OurITSolutions';
import OurTeam from './components/OurTeam';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DynamicWebsite />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about/company" element={<AboutUs />} />
        <Route path="/our-it-solutions" element={<OurITSolutions />} />
        <Route path="/about/OurTeam" element={<OurTeam />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
