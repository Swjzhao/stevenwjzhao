import Head from 'next/head';
import React from 'react';

import HomePage from '../components/home';
// eslint-disable-next-line

const Home = () => {
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    setKey(1);
  }, []);
  return (
    <>
      <Head>
        <title>We Are Still Dreamers</title>
        <meta property="og:image" content={'/logo.png'} />
        <link rel="icon" href="/logo.png" />
      </Head>
      <HomePage key={key} />
    </>
  );
};

export default Home;
