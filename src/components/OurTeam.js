import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      photo: '/images/user.jpg',
      name: 'CK Sathayanarayana',
      phone: '📞 9940042415',
      job: 'Business Development',
      jobDetail: 'Complete Sales, Complete IT Infrastructure solutions.\n📧 sathya@nbtechnology.in'
    },
    {
      photo: '/images/user.jpg',
      name: "S Murali",
      phone: '📞 9380209661',
      job: 'Product Solutions',
      jobDetail: 'Linux solutions, mail server solutions, Infrastructure designs.\n📧 murali@nbtechnology.in'
    },
    {
      photo: '/images/user.jpg',
      name: "M R Hari",
      phone: '📞 9380931521',
      job: 'Support & Service',
      jobDetail: 'Linux authentication, Storage & Backup, Firewall solutions.\n📧 hari@nbtechnology.in'
    },
    {
      photo: '/images/user.jpg',
      name: 'G Dwaraknath',
      phone: '📞 9381931525',
      job: 'Hardware & Finance',
      jobDetail: 'Hardware solutions, Desktop Security, Accounts.\n📧 gd@nbtechnology.in'
    }
  ];

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-lg font-medium text-gray-500">MEET THE TEAM</p>
        <h3 className="text-4xl font-extrabold text-gray-900">
          Our <span className="text-blue-600">Team</span>
        </h3>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200 hover:shadow-2xl transition duration-300">
            <img className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-blue-600 object-cover" src={member.photo} alt={member.name} />
            
            {/* Name */}
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            
            {/* Job Title */}
            <p className="text-blue-600 font-semibold">{member.job}</p>
            
            {/* Job Details */}
            <pre className="text-gray-600 text-sm whitespace-pre-wrap">{member.jobDetail}</pre>
            
            {/* Phone Number */}
            <p className="mt-2 text-gray-700 font-medium">{member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
