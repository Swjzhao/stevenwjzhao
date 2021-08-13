import Head from 'next/head';
import React from 'react';

const newPost = () => {
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

export default newPost;
