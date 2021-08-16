import { makeStyles } from '@material-ui/core/styles';

const sharedSectionStyles = makeStyles((theme) => ({
  // Landing
  logoText: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '60pt',
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
  flexGrowWrapper: {
    flexGrow: 1,
    position: 'relative',
    display: 'flex',
  },
  sectionWrapper: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    position: 'relative',
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
  gridItemContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  gridItemCenter: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },

  textField: {
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
  readMoreContainer: {
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
      paddingBottom: '0 !important',
    },
  },
}));

export default sharedSectionStyles;
