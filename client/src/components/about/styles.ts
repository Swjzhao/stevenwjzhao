import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  aboutGridContainer: {
    flexGrow: 1,
    paddingTop: '100px',
    paddingBottom: '100px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '50px',
      paddingBottom: '50px',
    },
  },
  landingContainer: {
    '&::before': {
      flexGrow: 1,
      content: '""',
      background: 'url(/about-background.svg) left',
      // @ts-ignore
      boxShadow: `0 0 100px 100px ${theme.palette.backgroundColors.main} inset`,

      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: '0.5',
      pointerEvents: 'none',
    },
  },
  timelineContainer: {
    [theme.breakpoints.down('xs')]: {
      '& .MuiTimelineItem-missingOppositeContent:before': {
        padding: 0,
        flex: 0,
      },
    },
  },
  watermarkWrapper: {
    position: 'relative',
    '& .watermarkContainer': {
      position: 'absolute',

      pointerEvents: 'none',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    },
    '& .watermarkContainer > .watermark': {
      width: '100%',
      height: 'fit-content',

      opacity: '0.1',
      '-webkit-transform': 'rotate(-20deg)',
      '- moz - transform': 'rotate(-20deg)',
      color: '#fff',
      fontSize: '25em',
      textAlign: 'center',
      lineHeight: '1',

      [theme.breakpoints.down('lg')]: {
        fontSize: '20em',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '15em',
      },
    },
    '& .watermarkContainer > .bubblewatermark': {
      width: '100%',
      height: 'fit-content',
      textShadow: `${theme.palette.secondary.main} 0px 0px 5px`,
      '-webkit-font-smoothing': 'antialiased',
      opacity: '0.4',
      // @ts-ignore
      color: theme.palette.backgroundColors.main,
      fontSize: '40em',
      textAlign: 'center',
      lineHeight: '1',
    },
  },
  profilePicImg: {
    borderRadius: '50%',
    padding: '30px',
    maxWidth: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  paper: {
    textAlign: 'start',
    padding: '30px 40px',
    borderRadius: '10px',
  },
  resumeDescription: {
    paddingTop: '20px',
    listStyle: 'none',
    '& li::before': {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      content: '""',
      fontSize: '12pt',
      color: '#fff',
      backgroundColor: theme.palette.secondary.main,
      position: 'absolute',
      marginTop: '5px',
      marginLeft: '-25px',
    },
    '& b': {
      color: theme.palette.secondary.main,
    },
  },

  skillsContainer: {
    '& .MuiPaper-root': {
      padding: '50px',
      borderRadius: '10px',
      zIndex: 1,
      position: 'relative',
      height: '100%',
    },
    '& .MuiTypography-root > b': {
      color: theme.palette.secondary.main,
    },
    '& .MuiTypography-subtitle1': {
      // @ts-ignore
      color: theme.palette.textColor.light,
    },
  },
  ratingSystem: {
    paddingTop: 50,
  },
  rating: {
    display: 'inline-block',
    margin: 0,
    width: 20,
    height: 20,
    borderRadius: '50%',
    border: '0.5px solid #fff',
    marginRight: 20,
  },

  fill: {
    backgroundColor: theme.palette.secondary.main,
    border: 'none !important',
  },
  outlined: {
    color: '#fff',
    textShadow: `${theme.palette.secondary.main} 0px 0px 1px`,
    '-webkit-font-smoothing': 'antialiased',
  },
}));

export default useStyles;
