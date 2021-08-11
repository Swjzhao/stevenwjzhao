import React from 'react';

import LandingSection from './LandingSection';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';
import WorkExpSection from './WorkExpSection';

const AboutPage = () => {
  return (
    <>
      <LandingSection />
      <WorkExpSection />
      <SkillsSection />
      <ProjectSection />
    </>
  );
};

export default AboutPage;
