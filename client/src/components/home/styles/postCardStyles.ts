import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardActionArea: {
    '&:hover $focusHighlight': {
      opacity: 0,
    },
  },
  cardContent: { paddingBottom: '0px !important' },
  cardWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    zIndex: 100,
  },
  photoWrapper: {
    width: '100%',
    borderRadius: '10px',
    paddingTop: '56.25%',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    '& .postCardImage': {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      borderRadius: '10px',
    },
  },
  mainMediaWrapper: {
    width: '100%',
    height: 'fit-content',
    position: 'relative',
    // @ts-ignore
    backgroundColor: theme.palette.backgroundColors.card,
    borderRadius: '10px',
    // padding: '10px',
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
  iconGrid: {
    textAlign: 'center',
    padding: 5,
  },
}));

export default useStyles;
