import React from 'react';
import { useTranslation } from 'react-i18next';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = t('team.members', { returnObjects: true });
  const teamImages = [
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  ];

  return (
    <section className="py-24 bg-[#00020F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Centered */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 leading-relaxed tracking-normal">
            {t('team.title')}

          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 shrink-0">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="p-8 border-r-[1px] flex flex-col items-center text-center border-[#242424]/80 group">
              {/* Image Container */}
              <div className="w-28 h-28 rounded-2xl mb-6 relative p-1 shadow-sm transition-transform duration-300">
                <img
                  src={teamImages[idx]}
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