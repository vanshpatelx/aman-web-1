import React from 'react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Mike Simorangkir",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Mike, MBA, has 15+ years of experience in semiconductor commercial strategies and mixed-use equipment development."
    },
    {
      name: "Stanley George",
      role: "Retired EVP & CCO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Stanley was a partner at Heenan Blaikie LLP until September 2005, specializing in global tech compliance."
    },
    {
      name: "Eliza Baker",
      role: "VP, Operations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Eliza, MBA, has 12+ years of experience in commercial logistics and semiconductor supply chain management."
    },
    {
      name: "Sally Cruz",
      role: "Chief Marketing Officer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Sally has 10+ years of experience in both the Canadian and Asia Pacific tech markets."
    }
  ];

  return (
    <section className="py-24 bg-[#00020F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Centered */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 leading-relaxed tracking-normal">
            Our team has over <span className="text-blue-700">100 years</span><br className="hidden lg:block" /> of combined experience!
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our team brings experience, innovation, and creativity to the semiconductor industry to ensure your plans are in good hands.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className=" p-8 border-r-[1px] flex flex-col items-center text-center  border-[#242424]/80 group">
              {/* Image Container */}
              <div className="w-28 h-28 rounded-2xl mb-6 relative p-1shadow-sm  transition-transform duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center rounded-2xl"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-normal text-white mb-1">{member.name}</h3>
              <p className="text-[#A7ADBE] font-normal text-sm uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-[#A7ADBE]/60 text-sm leading-relaxed opacity-90">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;