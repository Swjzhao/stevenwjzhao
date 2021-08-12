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
      <IconButton
        color="secondary"
        target="_blank"
        href="https://www.instagram.com/swjz_perspective/"
      >
        <Instagram />
      </IconButton>
      <IconButton
        color="secondary"
        target="_blank"
        href="https://www.linkedin.com/in/wen-jie-steven-zhao-b4212514a/"
      >
        <LinkedIn />
      </IconButton>
      <IconButton color="secondary" target="_blank" href="https://github.com/Swjzhao">
        <GitHub />
      </IconButton>
    </div>
  );
};

export default SocialMediaIcons;
