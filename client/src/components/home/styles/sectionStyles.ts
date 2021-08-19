import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    '&::before': {
      flexGrow: 1,
      content: '""',
      background: 'url(/Logo-white-large.png) center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      margin: '5%',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: '0.05',
      pointerEvents: 'none',
    },
  },
  category1Container: {
    '&::before': {
      flexGrow: 1,
      content: '""',
      background:
        'url(https://res.cloudinary.com/we-are-still-dreamers/image/upload/v1629356594/wearestilldreamers/static/welcomeImage2_b8aeg1.jpg) center no-repeat',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: '0.1',

      pointerEvents: 'none',
      // @ts-ignore
      boxShadow: `0 0 50px 50px ${theme.palette.backgroundColors.main} inset`,
    },
  },
  category3Container: {
    '&::before': {
      flexGrow: 1,
      content: '""',
      background:
        'url(https://res.cloudinary.com/we-are-still-dreamers/image/upload/v1629356773/wearestilldreamers/static/section-background_hv1w8f.png) center no-repeat',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      top: 0,
      right: 0,

      pointerEvents: 'none',
      bottom: 0,
      left: 0,
      opacity: '0.1',

      // @ts-ignore
      boxShadow: `0 0 50px 50px ${theme.palette.backgroundColors.main} inset`,
    },
  },
  photoContainer: {
    // marginTop: '100px',
    position: 'relative',
    maxHeight: '80vh',
    height: '500px',
    width: '90%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    boxShadow: `10px -10px ${theme.palette.primary.main}`,
    borderRadius: '20px',
    '& img': {
      height: '100%',
    },
    '& div': {
      borderRadius: '20px',
      position: 'absolute',
      marginLeft: '10px',
      width: '100%',
      height: '100%',
      marginTop: '-10px',
      content: '""',
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
  catHeaderContainer: {
    '& .MuiTypography-root': {
      paddingBottom: '20px',
    },
  },

  hiddenGrid: {
    [theme.breakpoints.down('md')]: {
      padding: 0,
      display: 'none',
    },
  },
  circleContainer: {
    paddingRight: '90vh',
    position: 'absolute',
    top: '5%',
    height: '90%',
    pointerEvents: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    '& .circle': {
      position: 'absolute',
      top: 0,
      borderRadius: '50%',
      border: `1px solid ${theme.palette.secondary.main}`,
      height: '100%',
      content: '""',
      width: '100%',
      marginLeft: '-100px',
      opacity: '0.5',
    },
  },

  circleContainerLeft: {
    paddingRight: '50vh',
    position: 'absolute',
    top: 0,
    height: '50%',
    pointerEvents: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    '& .circle': {
      position: 'absolute',
      top: 0,
      borderRadius: '50%',
      border: `2px solid ${theme.palette.secondary.main}`,
      height: '100%',
      content: '""',
      width: '100%',
      marginLeft: '-80%',
      opacity: '0.5',
    },
    '& .circle2': {
      position: 'absolute',
      top: '20%',
      borderRadius: '50%',
      zIndex: 1,
      border: `1px solid ${theme.palette.secondary.main}`,
      height: '60%',
      content: '""',
      width: '60%',
      marginLeft: '-60%',
      opacity: '0.2',
    },
  },
  aboutTextContainer: {
    padding: '50px 0px',
    position: 'relative',
    '& div': {
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      background: 'url(/Logo-white-large.png) center no-repeat',
      backgroundSize: 'contain',
      opacity: '0.1',
      width: '100%',
      height: '100%',
    },
  },
}));

export default useStyles;
