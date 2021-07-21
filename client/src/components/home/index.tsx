import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import CategorySection1 from './CategorySection1';
import CategorySection2 from './CategorySection2';
import CategorySection3 from './CategorySection3';
import LandingSection from './LandingSection';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  innerRoot: {
    width: '100vw',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  welcomeImage: {
    width: '100%',
    // background: 'linear-gradient(0.25turn, #000, #111, #000)',
    height: '1000px',
    position: 'relative',
    maxHeight: '70vh',
    '& img': {
      width: 'auto',
      height: '1000px',
      maxHeight: '70vh',
    },
    '& div': {
      width: 'auto',
      height: '1000px',
      maxHeight: '70vh',
    },
  },
  logoContainer: {
    position: 'absolute',
    height: '100%',
    width: '100% !important',
    top: 0,
    '& img': {
      width: '50%',
      height: 'auto',
      objectFit: 'contain',
      marginRight: '50px',
    },
    '& .MuiGrid-item': {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },
  mainPanelGrid: {
    [theme.breakpoints.up('sm')]: {
      paddingRight: '40px !important',
    },
  },
  sidePanelGrid: {
    borderLeft: '1px solid rgba(0, 0, 0, 0.05)',
    [theme.breakpoints.down('xs')]: {
      borderLeft: 'none',
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const sections = ['Books', 'Health and Fitness', 'Other'];
  return (
    <>
      <LandingSection />
      <CategorySection1 category={sections[0]} />
      <CategorySection2 category={sections[1]} />
      <CategorySection3 category={sections[2]} />
    </>
  );
};

export default HomePage;
