import React, { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeService, setActiveService] = useState(null);
  const contentRef = useRef(null);

  const services = [
    {
      title: "Policy Server Authentication",
      desc: "Centralized data security with Linux-powered storage and backups.",
      imgUrl: `${process.env.PUBLIC_URL}/images/secure.jpg`,
      details: [
        {
          title: "AUTHENTICATION SERVER",
          items: [
            "Authentication for Windows systems",
            "Linux for storage & backup",
            "Group Policy enforcement (Windows only)",
          ],
        },
        {
          title: "STORAGE SERVER",
          items: [
            "High-performance storage configuration",
            "User-folder mapping",
            "Auto data backup",
            "File type restrictions",
          ],
        },
        {
          title: "DATA BACKUP SYSTEM",
          items: ["Automated backups with web interface for logs"],
        },
      ],
    },
    {
      title: "Mail Server Solutions",
      desc: "Robust mail servers with anti-spam, bulk mail, and secure backups.",
      imgUrl: `${process.env.PUBLIC_URL}/images/gmail.jpg`,
      details: [
        {
          title: "Mail Server",
          items: [
            "On-Premise & Relay Mail Servers",
            "Anti-Spam filters & Bulk Mail support",
          ],
        },
        {
          title: "Features",
          items: [
            "Unlimited accounts with self-service tools",
            "Per-user service controls (POP3, IMAP, SMTP)",
            "Advanced quota & spam management",
            "Full web interface for admin tasks",
          ],
        },
      ],
    },
    {
      title: "Firewall & VPN Solutions",
      desc: "Enterprise-grade firewall with secure VPN configurations.",
      imgUrl: `${process.env.PUBLIC_URL}/images/vpn.jpg`,
      details: [
        {
          title: "Firewall",
          items: [
            "Gateway Antivirus (HTTP/FTP/SMTP)",
            "Real-time signature updates",
            "Blacklist/Whitelist features",
          ],
        },
        {
          title: "VPN",
          items: [
            "IPSec & SSL Secure Client Support",
            "AES/3DES Encryption, SHA-1/MD5 Authentication",
            "Auto-reconnect & Failover VPN support",
          ],
        },
      ],
    },
    {
      title: "IT Infrastructure Solutions",
      desc: "Complete IT audits, hardware support, and network design.",
      imgUrl: `${process.env.PUBLIC_URL}/images/hs.jpg`,
      details: [
        {
          title: "IT Infrastructure",
          items: [
            "IT Audits & Compliance Checks",
            "Hardware/OS Support",
            "Network Design & Optimization",
          ],
        },
      ],
    },
    {
      title: "Web Hosting",
      desc: "Reliable hosting with 99.9% uptime and custom web development.",
      imgUrl: `${process.env.PUBLIC_URL}/images/webh.jpg`,
      details: [
        {
          title: "Web Hosting",
          items: [
            "VPS, Dedicated & Storage Servers",
            "99.9% Uptime Guarantee",
            "Website Development Services",
          ],
        },
      ],
    },
    {
      title: "System Solutions",
      desc: "Comprehensive IT hardware and software solutions.",
      imgUrl: `${process.env.PUBLIC_URL}/images/sol.jpg`,
      details: [
        {
          title: "System Solutions",
          items: [
            "Reselling IT products (HP, Dell, Lenovo)",
            "Unified Communication Solutions",
            "Security (Antivirus, Surveillance, UTMs)",
            "Power Backup & Structured Cabling",
          ],
        },
      ],
    },
  ];

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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        setActiveService(null);
      }
    };

    if (activeService !== null) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [activeService]);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 animate-fade-in-down">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Explore our wide range of IT solutions designed to power your business.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 relative z-10">
        {services.map((service, index) => (
          <article
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-gray-200 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${index * 150 + 200}ms` }}
          >
            <figure className="relative group">
              <img
                src={service.imgUrl}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 text-white text-sm">
                {service.title}
              </figcaption>
            </figure>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {service.desc}
              </p>
              <button
                onClick={() => setActiveService(activeService === index ? null : index)}
                className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                aria-label={`More details about ${service.title}`}
              >
                Learn More
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeService !== null && (
        <div
          ref={contentRef}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-lg max-h-[80vh] bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-50 p-8 text-white overflow-hidden"
        >
          <button
            onClick={() => setActiveService(null)}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-400 text-2xl"
            aria-label="Close content"
          >
            &times;
          </button>
          <h2 className="text-3xl font-bold text-blue-400 mb-4 text-center">
            {services[activeService].title}
          </h2>
          <div className="border-t border-gray-700 mt-4 pt-4">
            {services[activeService].details.map((detail, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-2xl font-semibold text-yellow-500 mb-2">{detail.title}</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {detail.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
