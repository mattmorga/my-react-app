import React, { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeModal, setActiveModal] = useState(null);
  const modalRef = useRef(null);

  const services = [
    {
      title: "Policy Server Authentication",
      desc: "Centralized data security with Linux-powered storage and backups.",
      details: `
        🔐 AUTHENTICATION SERVER:
        - Authentication for Windows systems
        - Linux for storage & backup
        - Group Policy enforcement (Windows only)
  
        💾 STORAGE SERVER:
        - High-performance storage configuration
        - User-folder mapping
        - Auto data backup
        - File type restrictions
  
        ☁️ DATA BACKUP SYSTEM:
        - Automated backups with web interface for logs
      `,
    },
    {
      title: "Mail Server Solutions",
      desc: "Robust mail servers with anti-spam, bulk mail, and secure backups.",
      details: `
        📧 MAIL SERVER:
        - On-Premise & Relay Mail Servers
        - Anti-Spam filters & Bulk Mail support
  
        ⚙️ FEATURES:
        - Unlimited accounts with self-service tools
        - Per-user service controls (POP3, IMAP, SMTP)
        - Advanced quota & spam management
        - Full web interface for admin tasks
      `,
    },
    {
      title: "Firewall & VPN Solutions",
      desc: "Enterprise-grade firewall with secure VPN configurations.",
      details: `
        🔥 FIREWALL:
        - Gateway Antivirus (HTTP/FTP/SMTP)
        - Real-time signature updates
        - Blacklist/Whitelist features
  
        🛡️ VPN:
        - IPSec & SSL Secure Client Support
        - AES/3DES Encryption, SHA-1/MD5 Authentication
        - Auto-reconnect & Failover VPN support
      `,
    },
    {
      title: "IT Infrastructure Solutions",
      desc: "Complete IT audits, hardware support, and network design.",
      details: `
        🏢 IT INFRASTRUCTURE:
        - IT Audits & Compliance Checks
        - Hardware/OS Support
        - Network Design & Optimization
      `,
    },
    {
      title: "Web Hosting",
      desc: "Reliable hosting with 99.9% uptime and custom web development.",
      details: `
        🌐 WEB HOSTING:
        - VPS, Dedicated & Storage Servers
        - 99.9% Uptime Guarantee
        - Website Development Services
      `,
    },
    {
      title: "System Solutions",
      desc: "Comprehensive IT hardware and software solutions.",
      details: `
        💻 SYSTEM SOLUTIONS:
        - Reselling IT products (HP, Dell, Lenovo)
        - Unified Communication Solutions
        - Security (Antivirus, Surveillance, UTMs)
        - Power Backup & Structured Cabling
      `,
    },
  ];

  // Intersection Observer for Animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Modal Outside Click Handling
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActiveModal(null);
      }
    };

    if (activeModal !== null) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [activeModal]);

  return (
    <section
      className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
      aria-label="Our Services"
    >
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center z-10 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-fade-in-down">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Explore our wide range of IT solutions designed to power your business.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12 z-10 relative">
        {services.map((service, index) => (
          <article
            key={index}
            id={`service-${index}`}
            className={`animate-on-scroll bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-3xl ${
              isVisible[`service-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            aria-labelledby={`service-title-${index}`}
          >
            <h2 id={`service-title-${index}`} className="text-2xl font-semibold text-blue-300 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-300 mb-4">{service.desc}</p>
            {service.details && (
              <button
                onClick={() => setActiveModal(index)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                aria-label={`More details about ${service.title}`}
              >
                Learn More
              </button>
            )}
          </article>
        ))}
      </div>

      {/* Modal Popup */}
      {activeModal !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
          <div
            ref={modalRef}
            className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl max-w-2xl w-full relative animate-fade-in-up border border-gray-700"
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-400 text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 id="modal-title" className="text-3xl font-bold text-blue-400 mb-4">
              {services[activeModal].title}
            </h2>
            <p className="text-gray-300 whitespace-pre-line text-sm leading-relaxed">
              {services[activeModal].details}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
