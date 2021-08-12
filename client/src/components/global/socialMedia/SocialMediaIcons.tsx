import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Facebook, GitHub, Instagram, LinkedIn } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  iconGrid: {
    textAlign: 'center',
    padding: 5,
  },
}));

const SocialMediaIcons = (props: any) => {
  const classes = useStyles();
  return (
    <div style={{ display: 'flex' }}>
      <IconButton color="secondary">
        <Facebook />
      </IconButton>
      <IconButton color="secondary">
        <Instagram />
      </IconButton>
      <IconButton color="secondary">
        <LinkedIn />
      </IconButton>
      <IconButton color="secondary">
        <GitHub />
      </IconButton>
    </div>
  );
};

export default SocialMediaIcons;
