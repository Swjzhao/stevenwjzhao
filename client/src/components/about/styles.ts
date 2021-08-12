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
  profilePicImg: {
    borderRadius: '50%',
    padding: '30px',
    maxWidth: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default useStyles;
