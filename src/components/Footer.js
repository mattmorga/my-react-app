import React, { useState, useEffect } from 'react';
import { Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);
  
  useEffect(() => {
    const handleScroll = () => setShowScrollUp(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Nixbase Technology</h3>
            <address className="not-italic">
              <p className="mb-2">86/1, Lake View Rd,</p>
              <p className="mb-2">West Mambalam</p>
              <p>Chennai-600 033</p>
              <p>Tamil Nadu, India</p>
            </address>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Working Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: <span className="text-orange-400">9am - 5pm</span></p>
              <p>Saturday - Sunday: <span className="text-orange-400">Holiday</span></p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Quick Links</h3>
            <nav className="space-y-2">
              <a href="/about" className="block hover:text-orange-400 transition-colors">About Us</a>
              <a href="/services" className="block hover:text-orange-400 transition-colors">Services</a>
              <a href="/careers" className="block hover:text-orange-400 transition-colors">Careers</a>
              <a href="/contact" className="block hover:text-orange-400 transition-colors">Contact</a>
            </nav>
          </div>

          {/* Social & Enquiry */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={togglePopup}
              className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
            >
              Send Enquiry
            </button>
          </div>
        </div>

        {/* Popup Form */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full shadow-2xl animate-popIn">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Contact Form</h3>
                  <button
                    onClick={togglePopup}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Close form"
                  >
                    ✕
                  </button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      rows="4"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nixbase Solutions Limited. All rights reserved.
            <br className="md:hidden" />
            <a href="/privacy" className="hover:text-orange-400 transition-colors mx-2">Privacy Policy</a>
            <a href="/terms" className="hover:text-orange-400 transition-colors mx-2">Terms of Service</a>
          </p>
        </div>

        {/* Scroll to Top */}
        {showScrollUp && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;