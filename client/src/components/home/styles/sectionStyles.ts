import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sectionWrapper: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
  },
  sectionContainer: {
    padding: '20px 16px',
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    position: 'relative',
    flexDirection: 'column',
    [theme.breakpoints.up('xl')]: {
      padding: '0 120px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 120px !important',
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
  darkWrapper: {
    // @ts-ignore
    backgroundColor: theme.palette.backgroundColors.main,
  },
  lightWrapper: {
    // @ts-ignore
    background: theme.palette.backgroundColors.light,
    // @ts-ignore
    boxShadow: `0 0 100px 100px ${theme.palette.backgroundColors.main} inset`,
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
  category1Container: {
    '&::before': {
      flexGrow: 1,
      content: '""',
      background: 'url(/welcomeImage2.jpg) center no-repeat',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: '0.1',
      // @ts-ignore
      boxShadow: `0 0 50px 50px ${theme.palette.backgroundColors.main} inset`,
    },
  },
  category3Container: {
    '&::before': {
      flexGrow: 1,
      content: '""',
      background: 'url(/section-background.svg) center no-repeat',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: '0.1',

      // @ts-ignore
      boxShadow: `0 0 50px 50px ${theme.palette.backgroundColors.main} inset`,
    },
  },
  gridItemContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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

  catHeaderContainer: {
    '& .MuiTypography-root': {
      paddingBottom: '20px',
    },
  },
  catHeaderButtonContainer: {
    padding: '15px 0',
    display: 'flex',
    alignItems: 'center',
    zIndex: 101,
    '& .MuiButtonBase-root': {
      width: '56px',
      height: '50px',
      // @ts-ignore
      background: theme.palette.backgroundColors.button,
      marginRight: '10px',
      [theme.breakpoints.down('xs')]: {
        width: '28px',
        height: '40px',
      },
    },

    '& .MuiTypography-root': {
      padding: 0,
    },
  },

  hiddenGrid: {
    [theme.breakpoints.down('lg')]: {
      padding: 0,
      display: 'none',
    },
  },
}));

export default useStyles;
