import React from 'react';

import AboutSection from './AboutSection';
import CategorySection1 from './CategorySection1';
import CategorySection2 from './CategorySection2';
import CategorySection3 from './CategorySection3';
import LandingSection from './LandingSection';

const HomePage = () => {
  const sections = ['Books', 'Health & Fitness', 'Other'];
  return (
    <>
      <LandingSection />
      <CategorySection1 category={sections[0]} />
      <CategorySection2 category={sections[1]} />
      <CategorySection3 category={sections[2]} />
      <AboutSection />
    </>
  );
};

export default HomePage;
