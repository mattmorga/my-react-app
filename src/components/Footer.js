import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

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
            <h3 className="text-2xl font-bold text-white">nixbase Technology</h3>
            <address className="not-italic">
              <p className="mb-2">No:45, 1st Floor, Jagajeevanram Street,</p>
              <p className="mb-2">Thiruvallur Nagar, Pammal</p>
              <p>Chennai-600074</p>
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
              <Link to="/about/company" className="block hover:text-orange-400 transition-colors">About Us</Link>
              <Link to="/our-it-solutions" className="block hover:text-orange-400 transition-colors">Services</Link>
              <Link to="/about/OurTeam" className="block hover:text-orange-400 transition-colors">Careers</Link>
              <Link to="/contact" className="block hover:text-orange-400 transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/nixbase-technology/about/" aria-label="LinkedIn" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} nixbase Technology. All rights reserved.
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
