import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DynamicWebsite from "./DynamicWebsite";
import ContactPage from "./components/ContactPage"; // Add your Contact Us page here

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DynamicWebsite />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;

