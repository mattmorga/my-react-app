import React, { useState } from "react";

const InAddition = () => {
  const services = [
    {
      logo: "🛡️",
      title: "Open Source Solutions",
      content:
        "Encryption is extremely important today, where privacy and sensitive data has become a talking point all across the world. Encryption is like the lock on a Pandora’s box because it allows security of all sensitive data. Businesses encrypt corporate secrets, Governments encrypt classified information. Individuals use encryption to protect personal information. We at Nixbase Technology will give custom solutions catered to your needs.",
    },
    {
      logo: "🔒",
      title: "Data Leakage Prevention (DLP)",
      content:
        "Protecting data leakage for any organization has been a primary concern in today’s world, which has rapidly increased the need for DLP solutions in the market. We at Nixbase help you demystify the jargon and select the apt DLP solution for your organization.",
    },
    {
      logo: "📱",
      title: "Data & App Management - Mobile (MDM)",
      content:
        "Business organizations are rapidly adopting the trends of enterprise mobility and the bring your own device (BYOD) movement. These options offer workforce productivity as well as the ability for employees to work from anywhere, at any time, using any device.",
    },
    {
      logo: "💻",
      title: "Desktop Data & App Security",
      content:
        "Information and Data are some of the most important organizational assets in today’s businesses. As a Security Consultant, we analyze business requirements to design and implement the best security solutions for your needs.",
    },
    {
      logo: "🛠️",
      title: "Data Security",
      content:
        "Advanced Technology & Threat Intelligence Network Protection. Information security services span your network, endpoints, vulnerability management, monitoring, and analysis. We extend your security operations to bridge people, processes, and technology for 24x7 support.",
    },
    {
      logo: "☁️",
      title: "Cloud Data Storage",
      content:
        "Powerful cloud storage service for all your files. No matter the file or folder you’re trying to back up – from photos and videos to large CAD files and PowerPoint presentations – you can store it safely using cloud storage solutions from Nixbase.",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center py-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Big Rounded Button */}
      <a
        href="#_"
        onClick={toggleVisibility}
        className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
      >
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
          {isVisible ? "Hide Services" : "Explore Services"}
        </span>
        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
      </a>

      {/* InAddition Component */}
      {isVisible && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-3xl"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4 text-blue-400">{service.logo}</div>
                <h3 className="text-2xl font-semibold text-gray-200">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-300 text-sm">{service.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InAddition;
