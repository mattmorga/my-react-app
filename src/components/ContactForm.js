import React, { useState } from "react";
import { CheckCircle2, MapPin, Phone, Globe } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    solution: "",
    otherSolution: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) form.append(key, value);
    });

    try {
      await fetch("https://formspree.io/f/xjkybgyr", {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });

      setShowPopup(true);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        solution: "",
        otherSolution: "",
      });

      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
        <p className="pt-6 pb-6 text-base max-w-2xl mx-auto text-gray-300">
          We'd love to hear from you! Whether you have a question, need support, or want to explore how our IT solutions can benefit your business, feel free to reach out.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            nixbase Technology - Innovate. Automate. Elevate.
          </p>
          <div className="flex items-start mb-4 text-gray-700 dark:text-gray-300 space-x-3">
            <MapPin className="w-6 h-6 mt-1" />
            <span>No:45, 1st Floor, Jagajeevanram Street, Thiruvallur Nagar, Pammal, Chennai-600074</span>
          </div>
          <div className="flex items-start mb-4 text-gray-700 dark:text-gray-300 space-x-3">
            <Globe className="w-6 h-6 mt-1" />
            <a href="https://www.nbtechnology.in" target="_blank" rel="noopener noreferrer">www.nbtechnology.in</a>
          </div>
          <div className="flex items-start text-gray-700 dark:text-gray-300 space-x-3">
            <Phone className="w-6 h-6 mt-1" />
            <a href="tel:+919940042415">+91 99400 42415</a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="px-5 py-4 border rounded-xl w-full focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="px-5 py-4 border rounded-xl w-full focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="px-5 py-4 border rounded-xl w-full focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="px-5 py-4 border rounded-xl w-full focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <select
              name="solution"
              required
              className="w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-sm"
              value={formData.solution}
              onChange={handleChange}
            >
              <option value="">Select IT Solution</option>
              <option value="IT Solutions">IT Solutions</option>
              <option value="Cloud">Cloud</option>
              <option value="Security">Security</option>
              <option value="Networking">Networking</option>
              <option value="Others">Others</option>
            </select>
            {formData.solution === "Others" && (
              <input
                type="text"
                name="otherSolution"
                placeholder="Please specify"
                required
                className="w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-sm"
                value={formData.otherSolution}
                onChange={handleChange}
              />
            )}
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-5 py-4 border rounded-xl h-40 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 font-semibold text-white bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-white border border-green-300 shadow-lg px-6 py-4 rounded-lg flex items-center space-x-3 animate-fade-in-out z-50">
          <CheckCircle2 className="text-green-500 w-6 h-6" />
          <p className="text-green-700 font-medium">
            Our team will contact you soon. Thanks for reaching out!
          </p>
        </div>
      )}

      <style>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(20px); }
          10%, 90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(20px); }
        }

        .animate-fade-in-out {
          animation: fade-in-out 4s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
