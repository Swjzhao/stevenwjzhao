import cx from 'clsx';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import * as api from '../../api';
import sharedSectionStyles from '../../components/global/sections/styles';

const Profile = (props: any) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const { slug } = router.query;

  const sharedClasses = sharedSectionStyles();

  useEffect(() => {
    fetchUser();
  }, [slug]);

  const fetchUser = async () => {
    console.log(slug);
    try {
      const res = await api.getUser(slug as string);
      setUser(res.data);
    } catch (e) {
      // @ts-ignore
    }
  };
  return <div className={cx(sharedClasses.flexGrowWrapper)}></div>;
};

export default Profile;
