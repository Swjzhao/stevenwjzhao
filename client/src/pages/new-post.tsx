import cx from 'clsx';
import Head from 'next/head';
import React from 'react';

import sharedSectionStyles from '../styles/pageSectionStyles';

const newPost = () => {
  const sharedClasses = sharedSectionStyles();
  return (
    <>
      <Head>
        <title>About Steven</title>
        <meta property="og:image" content={'/logo.png'} />
        <link rel="icon" href="logo.png" />
      </Head>
      <div className={cx(sharedClasses.flexGrowWrapper, sharedClasses.lightWrapper)}></div>
    </>
  );
};

export default newPost;
