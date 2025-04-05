import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    resumeLink: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const jobOpenings = [
    {
      title: "Software Engineer",
      description:
        "Develop and maintain software applications. Requires 3+ years of experience in software development.",
    },
    {
      title: "Product Manager",
      description:
        "Manage product lifecycle and collaborate with cross-functional teams. Requires 5+ years of experience in product management.",
    },
  ];

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
      const res = await fetch("https://formspree.io/f/xjkybgyr", {
        method: "POST",
        body: form,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          jobTitle: "",
          name: "",
          email: "",
          phone: "",
          location: "",
          resumeLink: "",
          message: "",
        });
        setTimeout(() => {
          setSubmitted(false);
          navigate("/"); // Redirect to homepage
        }, 4000);
      } else {
        alert("Something went wrong while submitting the form.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Careers at Nixbase Technology
      </h1>

      <div className="max-w-4xl mx-auto mb-12 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Openings</h2>
        <ul className="space-y-4">
          {jobOpenings.map((job, idx) => (
            <li key={idx} className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
              <p className="text-gray-700">{job.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg relative">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Apply Now</h2>

        {submitted && (
          <div className="absolute inset-0 bg-white/90 flex flex-col justify-center items-center z-10 rounded-2xl">
            <CheckCircle2 className="text-green-500 w-16 h-16 mb-2" />
            <p className="text-lg font-semibold text-green-600 text-center">
              Your application has been submitted!
              <br />
              Redirecting to home...
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              className="p-4 border rounded-xl outline-none focus:border-purple-600 shadow-sm"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 border rounded-xl outline-none focus:border-purple-600 shadow-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-4 border rounded-xl outline-none focus:border-purple-600 shadow-sm"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-4 border rounded-xl outline-none focus:border-purple-600 shadow-sm"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              value={formData.location}
              onChange={handleChange}
              className="p-4 border rounded-xl outline-none focus:border-purple-600 shadow-sm col-span-2"
              required
            />
            <input
              type="url"
              name="resumeLink"
              placeholder="Paste Resume Link (Google Drive, etc.)"
              value={formData.resumeLink}
              onChange={handleChange}
              className="p-4 border rounded-xl outline-none focus:border-purple-600 shadow-sm col-span-2"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Cover Letter / Message"
            value={formData.message}
            onChange={handleChange}
            className="mt-4 w-full p-4 border rounded-xl outline-none h-32 focus:border-purple-600 shadow-sm"
          ></textarea>

          <button
            type="submit"
            className="w-full mt-6 py-3 font-semibold text-white bg-purple-700 rounded-xl hover:bg-purple-800 transition-all shadow-md"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Careers;
