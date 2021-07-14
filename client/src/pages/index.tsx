import Head from 'next/head';
import React from 'react';

import HomePage from '../components/home/HomePage';
// eslint-disable-next-line

const Home = () => (
  <>
    <Head>
      <title>SZ</title>
      <meta property='og:image' content={'/logo.png'} />
    </Head>
    <HomePage />
  </>
);

export default Home;
