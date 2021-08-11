import Head from 'next/head';
import React from 'react';

import AboutPage from '../components/about';
// eslint-disable-next-line

const About = () => {
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    setKey(1);
  }, []);
  return (
    <>
      <Head>
        <title>About Steven</title>
        <meta property="og:image" content={'/logo.png'} />
      </Head>
      <AboutPage />
    </>
  );
};

export default About;
