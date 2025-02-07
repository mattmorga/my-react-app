import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);

  // SEO-friendly navigation
  const navigation = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "#",
      submenu: [
        { name: "IT Infrastructure", path: "/it-infrastructure" },
        { name: "Cyber Security", path: "/cyber-security" },
        { name: "Cloud Solutions", path: "/cloud-solutions" },
        { name: "Network Management", path: "/network-management" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Case Studies", path: "/case-studies" },
  ];

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigateTo = (path) => {
    navigate(path);
    setIsOpen(false);
    setIsServicesOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            className="h-10 w-auto"
            src="/images/logo.png"
            alt="Nixbase Technology - Premier IT Solutions Provider"
            loading="eager"
          />
          <span className="text-2xl font-bold font-['Poppins']">
            <span className="text-blue-500">Nixbase</span> Technology
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 font-['Inter'] text-lg">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <button
                onClick={() => item.submenu && setIsServicesOpen(!isServicesOpen)}
                className="flex items-center hover:text-blue-400 transition duration-200"
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                )}
              </button>

              {item.submenu && isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 shadow-lg rounded-lg border border-gray-700 opacity-100 transform scale-95 group-hover:scale-100 transition-transform duration-300">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.path}
                      className="block px-4 py-3 text-white hover:bg-gray-800 transition"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <button
            onClick={() => navigateTo("/contact")}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-blue-400 transition"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed inset-0 bg-black/80 backdrop-blur-md transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 pb-8 px-6 space-y-6">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              <button
                onClick={() => item.submenu ? setIsServicesOpen(!isServicesOpen) : navigateTo(item.path)}
                className="flex items-center justify-between w-full text-xl font-semibold text-white hover:text-blue-400 transition"
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown className={`h-6 w-6 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                )}
              </button>

              {item.submenu && isServicesOpen && (
                <div className="mt-2 ml-4 space-y-3 border-l border-gray-700 pl-4">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.path}
                      className="block text-lg text-gray-300 hover:text-white transition"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button
            onClick={() => navigateTo("/contact")}
            className="mt-6 w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center transition-all"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
