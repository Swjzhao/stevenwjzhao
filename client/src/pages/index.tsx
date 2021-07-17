import Head from 'next/head';
import React from 'react';

import HomePage from '../components/home/HomePage';
// eslint-disable-next-line

const Home = () => {
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    setKey(1);
  }, []);
  return (
    <>
      <Head>
        <title>SZ</title>
        <meta property="og:image" content={'/logo.png'} />
      </Head>
      <HomePage key={key} />
    </>
  );
};

export default Home;
