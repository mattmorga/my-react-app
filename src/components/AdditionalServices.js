import React from "react";

const services = [
  {
    title: "General Checkup",
    description:
      "With 2 decades of experience in business, we operate with a customer-first approach. Our unique model thrives on mutual trust between us and our customers.",
    image: "/images/service1.jpg",
    alt: "Professional General Checkup Service",
  },
  {
    title: "Network Design",
    description:
      "We deliver top-tier network design tailored to your specific business requirements, ensuring optimal performance and scalability.",
    image: "/images/service2.jpg",
    alt: "Expert Network Design Solutions",
  },
  {
    title: "Annual Maintenance Contract",
    description: `
      Desktops, Laptops, Servers, Networks - Comprehensive Coverage.
      Save Money & Simplify Budgeting.
      Maximize Hardware Efficiency.
      Focus on Growth, Leave Maintenance to Us.
      Access Expert Technicians Anytime.
      Emergency Support When You Need It.
    `,
    image: "/images/service3.jpg",
    alt: "Reliable Annual Maintenance Contract",
  },
];

const AdditionalServices = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 animate-fade-in-down">
          Additional Services
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          We offer a range of specialized services tailored to meet your business needs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12 relative z-10">
        {services.map((service, index) => (
          <article
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-gray-200 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${index * 150 + 200}ms` }}
          >
            <figure className="relative group">
              <img
                src={service.image}
                alt={service.alt}
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
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AdditionalServices;
