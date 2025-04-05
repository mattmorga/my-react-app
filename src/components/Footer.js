import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, ArrowUp, Calendar } from 'lucide-react';

const Footer = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    dateTime: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setShowScrollUp(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send email
    try {
      await fetch('https://formspree.io/f/xjkybgyr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dateTime: formData.dateTime,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      setSuccessMessage('Appointment submitted successfully!');
      setTimeout(() => {
        setShowAppointmentForm(false);
        setSuccessMessage('');
      }, 3000);

      setFormData({ dateTime: '', name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Nixbase Technology</h3>
              <address className="not-italic">
                <p className="mb-2">No:45, 1st Floor, Jagajeevanram Street,</p>
                <p className="mb-2">Thiruvallur Nagar, Pammal</p>
                <p>Chennai-600074, Tamil Nadu, India</p>
              </address>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Working Hours</h3>
              <p>Monday - Friday: <span className="text-orange-400">9am - 5pm</span></p>
              <p>Saturday - Sunday: <span className="text-orange-400">Holiday</span></p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Quick Links</h3>
              <nav className="space-y-2">
                <Link to="/" className="block hover:text-orange-400 transition-colors">Home</Link> {/* Home button */}
                <Link to="/about/company" className="block hover:text-orange-400 transition-colors">About Us</Link>
                <Link to="/our-it-solutions" className="block hover:text-orange-400 transition-colors">Services</Link>
                <Link to="/careers" className="block hover:text-orange-400 transition-colors">Careers</Link>
                <Link to="/contact" className="block hover:text-orange-400 transition-colors">Contact</Link>
                <button
                  onClick={() => setShowAppointmentForm(true)}
                  className="block text-orange-400 hover:text-orange-500 transition-colors mt-2"
                >
                  <Calendar className="inline-block w-4 h-4 mr-2" /> Schedule Appointment
                </button>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/nixbase-technology/about/" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Nixbase Technology. All rights reserved.
              <br className="md:hidden" />
              <a href="/privacy" className="hover:text-orange-400 transition-colors mx-2">Privacy Policy</a>
              <a href="/terms" className="hover:text-orange-400 transition-colors mx-2">Terms of Service</a>
            </p>
          </div>

          {showScrollUp && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </footer>

      {showAppointmentForm && (
        <div className="bg-white py-12 px-6 sm:px-10 lg:px-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Schedule an Appointment</h2>
          <p className="text-gray-600 text-center mt-2">We look forward to meeting with you!</p>

          {successMessage && (
            <p className="text-green-600 text-center mt-4">{successMessage}</p>
          )}

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
            <label className="block text-gray-700 font-semibold">Select Date and Time:</label>
            <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-md" required />

            <label className="block text-gray-700 font-semibold mt-4">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-md" required />

            <label className="block text-gray-700 font-semibold mt-4">Email Address:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-md" required />

            <label className="block text-gray-700 font-semibold mt-4">Phone Number:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-md" required />

            <label className="block text-gray-700 font-semibold mt-4">Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full mt-2 p-2 border border-gray-300 rounded-md"></textarea>

            <button type="submit" className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all">
              Submit Appointment
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Footer;
