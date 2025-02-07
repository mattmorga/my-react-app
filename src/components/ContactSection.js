import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [activeBox, setActiveBox] = useState(null);

  const toggleBox = (box) => {
    setActiveBox(activeBox === box ? null : box);
  };

  const contactInfo = [
    {
      title: "When Needed, Call Us",
      id: "services",
      content: [
        "For IT Solutions",
        "For Emergency Support",
        "For Hardware Requirements",
        "For Backup Issues",
      ],
    },
    {
      title: "Meet Our Experts 👥",
      id: "team",
      people: [
        {
          name: "CK Sathayanarayana",
          role: "Business Development",
          phone: "9940042415",
          details: "Complete Sales, IT Infrastructure solutions\n📧 sathya@nbtechnology.in",
        },
        {
          name: "S Murali",
          role: "Product Solutions",
          phone: "9380209661",
          details: "Linux solutions, mail server solutions, Infrastructure designs\n📧 murali@gnbtechnology.in",
        },
        {
          name: "M R Hari",
          role: "Support & Service",
          phone: "9380931521",
          details: "Linux authentication, Storage & Backup, Firewall solutions\n📧 hari@nbtechnology.in",
        },
        {
          name: "G Dwaraknath",
          role: "Hardware & Finance",
          phone: "9381931525",
          details: "Hardware solutions, Desktop Security, Accounts\n📧 gd@nbtechnology.in",
        },
      ],
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 font-['Poppins']">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8">
        
        {/* Contact Info Card */}
        {contactInfo.map((info, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="w-full md:w-1/2 bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <button
              onClick={() => toggleBox(info.id)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <h2 className="text-2xl font-semibold text-cyan-400">
                {index === 0 ? "🔧" : "👥"} {info.title}
              </h2>
              <motion.span
                animate={{ rotate: activeBox === info.id ? 180 : 0 }}
                className="text-cyan-400"
              >
                ▼
              </motion.span>
            </button>

            {/* Dropdown Content */}
            {activeBox === info.id && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4"
              >
                {info.content && (
                  <ul className="space-y-3">
                    {info.content.map((item, i) => (
                      <li key={i} className="pl-3 border-l-2 border-cyan-400/30 text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {info.people && (
                  <div className="space-y-5 border-t border-white/10 pt-6">
                    {info.people.map((person, idx) => (
                      <motion.div
                        key={idx}
                        className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h3 className="text-lg font-medium text-cyan-400">{person.name}</h3>
                        <p className="text-sm text-gray-400">{person.role}</p>
                        <p className="text-sm text-gray-300 mt-1">📞 {person.phone}</p>
                        <p className="mt-2 text-gray-300 text-sm whitespace-pre-line">
                          {person.details}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
