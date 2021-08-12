import { useMediaQuery } from '@material-ui/core';
import React from 'react';

import LandingSection from './LandingSection';
// import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';
import WorkExpSection from './WorkExpSection';
import WorkExpSectionMobile from './WorkExpSectionMobile';

const AboutPage = () => {
  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));

  return (
    <>
      <LandingSection />
      {isDesktop ? <WorkExpSection /> : <WorkExpSectionMobile />}
      <SkillsSection />
    </>
  );
};

export default AboutPage;
