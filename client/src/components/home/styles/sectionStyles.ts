import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sectionWrapper: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    padding: '20px 0',
  },
  sectionContainer: {
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    position: 'relative',
    flexDirection: 'column',
    [theme.breakpoints.up('xl')]: {
      padding: '0 120px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 120px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 50px',
    },
  },
  logoText: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '60pt',
    },
  },
  landingWrapper: {
    // @ts-ignore
    backgroundColor: theme.palette.backgroundColors.main,
  },
  landingContainer: {
    '&::before': {
      flexGrow: 1,
      content: '""',
      background: 'url(/Logo-white-large.png) center no-repeat',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      margin: '5%',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: '0.05',
    },
  },
  gridItemContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& .MuiTypography-root': {
      paddingBottom: '20px',
    },
  },
  scrollContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '30px',
    // @ts-ignore
    color: theme.palette.textColor.subtext,
  },
  scrollTriangle: {
    transform: 'rotate(180deg)',
    marginRight: 10,
    color: theme.palette.secondary.main,
  },
  root: {
    position: 'relative',
    padding: '10px 0',
    '& .MuiInputLabel-root': {
      // @ts-ignore
      color: theme.palette.textColor.subtext,
    },
    '& .MuiInput-underline:before': {
      // @ts-ignore
      borderColor: `${theme.palette.textColor.subtext} !important`,
    },

    '& .MuiInputBase-input': {
      color: theme.palette.primary.main,
    },
  },

  category1Container: {
    // @ts-ignore
    background: theme.palette.backgroundColors.light,
  },
  catHeaderButtonContainer: {
    padding: '15px 0',
    display: 'flex',
    alignItems: 'center',
    '& .MuiButtonBase-root': {
      width: '56px',
      height: '50px',
      // @ts-ignore
      background: theme.palette.backgroundColors.button,
      marginRight: '10px',
    },

    '& .MuiTypography-root': {
      padding: 0,
    },
  },
}));

export default useStyles;
