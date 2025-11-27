import React from 'react';
import { useTranslation } from 'react-i18next';

const MissionVision: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#00020F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Intro */}
        <div className="mb-12">
          <h3 className="text-brand-orange text-white font-normal text-lg tracking-wide uppercase">{t('missionVision.intro')}
          </h3>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.5px] bg-[#242424] mb-12"></div>

        {/* Mission Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-24 mb-12">
          <div className="lg:w-1/3">
            <span className="text-gray-400 font-medium tracking-widest text-xs uppercase mb-2 block">{t('missionVision.mission.section')}</span>
            <h2 className="text-5xl lg:text-6xl font-medium text-white"> {t('missionVision.mission.title')}</h2>
          </div>
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-normal text-white mb-2">{t('missionVision.mission.heading')}</h3>
            <p className="text-[#A7ADBE] leading-relaxed">
                {t('missionVision.mission.content')}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.5px] bg-[#242424] mb-12"></div>

        {/* Vision Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-24 mb-12">
          <div className="lg:w-1/3">
            <span className="text-gray-400 font-medium tracking-widest text-xs uppercase mb-2 block"> {t('missionVision.vision.section')}</span>
            <h2 className="text-5xl lg:text-6xl font-medium text-white"> {t('missionVision.vision.title')}</h2>
          </div>
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-normal text-white mb-2">{t('missionVision.vision.heading')}</h3>
            <p className="text-[#A7ADBE] leading-relaxed">
                {t('missionVision.vision.content')}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.5px] bg-[#242424]"></div>

      </div>
    </section>
  );
};

export default MissionVision;