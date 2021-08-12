import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    '&::before': {
      flexGrow: 1,
      content: '""',
      background: 'url(/about-background.svg) left',
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
  workexpContainer: {
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
    '& .watermarkContainer > p': {
      width: '100%',
      height: 'fit-content',

      opacity: '0.1',
      '-webkit-transform': 'rotate(-20deg)',
      '- moz - transform': 'rotate(-20deg)',
      color: '#fff',
      fontSize: '25em',
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
}));

export default useStyles;
