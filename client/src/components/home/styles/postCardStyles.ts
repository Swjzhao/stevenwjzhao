import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    position: 'relative',
    borderRadius: '20px',
    display: 'block',
    gridTemplateRows: '3rem auto 1fr',
    padding: 40,
    width: '100%',
    height: 'fit-content',
    pointerEvents: 'all',
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    },
  },
  mainMediaWrapper: {
    height: 'fit-content',
    position: 'relative',
    // @ts-ignore
    backgroundColor: theme.palette.backgroundColors.card,
  },
  media: {
    position: 'relative',
    height: 0,
    paddingTop: '56.25%',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '56.25%', // 16:9
    },
  },
  actionButtons: {},
  actionButton: {
    width: '30px',
    height: '30px',
    padding: 0,
    margin: '0 5px',
  },
  thumbnailWrapper: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '5px 20px',
    width: '100%',
    transition: 'all linear 300ms',
    display: 'flex',
    alignItems: 'center',

    justifyContent: 'space-between',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.down('xs')]: {
      padding: '5px 5px',
    },
  },
  actionList: {
    padding: 0,
    height: 30,
    color: theme.palette.primary.main,
    '& li': {
      height: '100%',
      padding: 0,
    },

    '& .MuiListItemAvatar-root': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));

export default useStyles;
