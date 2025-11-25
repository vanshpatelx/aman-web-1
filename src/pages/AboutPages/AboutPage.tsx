import React from 'react';
import BrandStory from './BrandStory';
import MissionVision from './MissionVision';
import TeamSection from './TeamSection';
import CTASection from './CTASection';
import Navbar from '../Navbar';
import Footer from '../Footer';


const AboutPage: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
    <Navbar/>

      <main>
        <BrandStory />
        <MissionVision />
        <TeamSection />
        <CTASection />
        <Footer/>
      </main>
    </div>
  );
};

export default AboutPage;