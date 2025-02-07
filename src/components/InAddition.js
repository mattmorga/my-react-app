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
    <div className="flex flex-col items-center p-8 bg-gray-50">
      {/* Big Rounded Button */}
      <button
        onClick={toggleVisibility}
        className="w-52 h-20 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-all mb-8"
        title={isVisible ? "Hide" : "Show"}
      >
        {isVisible ? "Hide Services" : "Explore Services"}
      </button>

      {/* InAddition Component */}
      {isVisible && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center">
                <div className="text-3xl mr-4 text-gray-600">{service.logo}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600 text-sm">{service.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InAddition;
