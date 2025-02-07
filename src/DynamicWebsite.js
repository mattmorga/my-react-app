import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import CompanyInfo from './components/CompanyInfo';
import ServicesSection from './components/ServicesSection';
import AdditionalServices from './components/AdditionalServices';
import OurOrganization from './components/OurOrganization';
import OurCustomers from './components/Ourcustomers';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InAddition from './components/InAddition';
import ContactPage from './components/ContactPage';

const DynamicWebsite = () => {
  const [currentView, setCurrentView] = useState("home"); // State to manage the current view

  return (
    <div>
      {/* Pass setCurrentView as a prop to Navbar */}
      <Navbar onContactClick={() => setCurrentView("contact")} />

      {/* Conditionally render content */}
      {currentView === "home" ? (
        <>
          <HeroSlider />
          <CompanyInfo />
          <ServicesSection />
          <InAddition />
          <AdditionalServices />
          <OurOrganization />
          <OurCustomers />
          <ContactSection/>
        </>
      ) : (
        <ContactPage />
      )}

      {/* Footer remains constant */}
      <Footer />
    </div>
  );
};

export default DynamicWebsite;
