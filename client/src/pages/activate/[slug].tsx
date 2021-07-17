import { Container } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { activate } from '../../store/actions';

const Active = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (slug) {
      activateAccount(slug as string);
    }
  }, [slug]);

  const activateAccount = async (activateToken: string) => {
    try {
      await dispatch(activate(activateToken));

      setSuccess(true);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (e: any) {
      setError(e?.response?.data?.msg);
    }
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
      }}
    >
      {error}
      {success && <div>{'Account Activated'} </div>}
    </Container>
  );
};

export default Active;
