import React from 'react';
import BrandStory from './BrandStory';
import MissionVision from './MissionVision';
import TeamSection from './TeamSection';
import CTASection from './CTASection';
import Navbar from '../Navbar';


const AboutPage: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
    <Navbar/>

      <main>
        <BrandStory />
        <MissionVision />
        <TeamSection />
        <CTASection />
      </main>
    </div>
  );
};

export default AboutPage;