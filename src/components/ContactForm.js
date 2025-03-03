import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false); // State for submission message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Show success message
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold dark:text-gray-100">Contact</h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-gray-400">
          Want to contact us? Choose an option below, and we'll be happy to
          assist you, Fill up the form.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-bold dark:text-gray-100">Contact Us</h2>
          <p className="max-w-sm mt-4 mb-4 dark:text-gray-400">
            nixbase-Innovate. Automate. Elevate.
          </p>
          <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-gray-400">
            <span>No:45, 1st Floor, Jagajeevanram Street, Thiruvallur Nagar, Pammal, Chennai-600074</span>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
            <a href="mailto:hello@company.com"> www.nbtechnology.in</a>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
            <a href="tel:+919940042415">+91 99400 42415</a>
          </div>
        </div>
        <div>
          {submitted ? (
            <p className="text-green-500 font-bold">
              Message sent! We will get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border-2 rounded-md outline-none"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border-2 rounded-md outline-none"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border-2 rounded-md outline-none h-36"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 font-semibold text-white bg-gray-900 rounded-md hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
