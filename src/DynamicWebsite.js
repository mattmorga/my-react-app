import React, { useState } from 'react';
import HeroSlider from './components/HeroSlider';
import CompanyInfo from './components/CompanyInfo';
import ServicesSection from './components/ServicesSection';
import AdditionalServices from './components/AdditionalServices';
import OurOrganization from './components/OurOrganization';
import OurCustomers from './components/OurCustomers';
import ContactSection from './components/ContactSection';
import InAddition from './components/InAddition';
import AboutUs from './components/AboutUs';
import OurITSolutions from './components/OurITSolutions';
import OurTeam from './components/OurTeam';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar'; // Ensure Navbar is imported

const DynamicWebsite = () => {
  const [currentView, setCurrentView] = useState("home");
  const [showContactForm, setShowContactForm] = useState(false);

  const handleShowContactForm = () => {
    setShowContactForm(true);
    setCurrentView("contact"); // Set the view to contact
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
    setCurrentView("home"); // Return to home view
  };

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return (
          <>
            <HeroSlider onNavigate={setCurrentView} onShowContactForm={handleShowContactForm} />
            <CompanyInfo />
            <ServicesSection />
            <InAddition />
            <AdditionalServices />
            <OurOrganization />
            <OurCustomers />
            <ContactSection />
          </>
        );
      case "company":
        return <AboutUs />;
      case "services":
        return <OurITSolutions />;
      case "OurTeam":
        return <OurTeam />;
      case "contact":
        return <ContactForm onClose={handleCloseContactForm} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar onNavigate={setCurrentView} /> {/* Pass the onNavigate function */}
      {renderContent()}
    </div>
  );
};

export default DynamicWebsite;
