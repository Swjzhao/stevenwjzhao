import Head from 'next/head';
import React from 'react';

const resetPassword = () => {
  return (
    <>
      <Head>
        <title>About Steven</title>
        <meta property="og:image" content={'/logo.png'} />
        <link rel="icon" href="logo.png" />
      </Head>
    </>
  );
};

export default resetPassword;
