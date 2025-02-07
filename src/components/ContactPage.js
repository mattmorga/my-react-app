import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    issues: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-extrabold text-white mb-8">Contact Us</h1>
      <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl space-y-6 md:space-y-0 md:space-x-10">
        {/* Left Side: Contact Info */}
        <div className="w-full md:w-1/2 bg-white bg-opacity-90 p-6 shadow-lg rounded-lg">
          <p className="mb-4 text-gray-800">
            <strong>Head Office:</strong> 123 Tech Street, Nixbase Cit
          </p>
          <iframe
            title="Head Office Location"
            src="https://www.google.com/maps/embed"
            width="100%"
            height="400"
            className="mt-4 rounded-lg"
          ></iframe>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 bg-white bg-opacity-90 p-6 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit}>
            {[
              { label: 'First Name', name: 'firstName', type: 'text' },
              { label: 'Last Name', name: 'lastName', type: 'text' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Phone', name: 'phone', type: 'tel' },
              { label: 'Company', name: 'company', type: 'text' },
            ].map((field) => (
              <div className="mb-4" key={field.name}>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor={field.name}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            ))}

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="issues"
              >
                Issues
              </label>
              <textarea
                name="issues"
                id="issues"
                value={formData.issues}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
