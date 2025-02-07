import React from 'react';

const OurOrganization = () => {
  return (
    <section className="relative py-20 px-6 min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Background Grid & Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(12,82,255,0.15),transparent),radial-gradient(circle_at_bottom_right,rgba(255,0,150,0.1),transparent)] opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 opacity-20 animate-gradient-x"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header with Logo */}
        <header className="flex items-center justify-center mb-12">
          <img
            src="/images/logo.png" // Directly referencing from public folder
            alt="Organization Logo"
            className="w-16 h-16 rounded-full shadow-lg border-2 border-white/20 hover:border-purple-400 transition duration-300"
          />
        </header>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 animate-fade-in-down tracking-tight leading-tight">
          Our Organization
        </h1>

        {/* Introduction Section */}
        <article className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-xl leading-relaxed text-gray-300">
              A two-decade-old organization built with care by a passionate team dedicated to excellence.
            </p>
            <p className="text-xl leading-relaxed text-gray-300">
              Small in size, big at heart — driven by seasoned professionals with diverse experience across industries.
            </p>
          </div>

          {/* Image with Hover Animation */}
          <figure className="group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-1">
            <img
              src="/images/tower.jpg" // Image from the public folder
              alt="Our Team at Work"
              className="w-full h-auto object-cover rounded-3xl"
            />
            <figcaption className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 text-lg font-semibold">
              Inspiring Growth Together
            </figcaption>
          </figure>
        </article>

        {/* Core Values List */}
        <ul className="mt-16 space-y-4 text-lg backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg">
          {[
            "Core IT Knowledge",
            "Customer-First Culture",
            "India-Centric Approach",
            "Our Work Speaks for Us",
            "We Grow Through Word of Mouth"
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 group transition-transform duration-300 hover:translate-x-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <span className="h-4 w-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full relative">
                <span className="absolute inset-0 animate-ping rounded-full bg-purple-500 opacity-30"></span>
              </span>
              <span className="text-gray-200 group-hover:text-white transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurOrganization;
