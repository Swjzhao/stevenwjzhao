import { alpha, makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    // borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    // background: theme.palette.nav.light,
    background: '#171717',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  transparentAppBar: {
    background: 'none',
  },
  navContainer: {
    [theme.breakpoints.up('xl')]: {
      padding: '0 100px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 100px !important',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 30px',
    },
  },
  scrollToolbar: {
    minHeight: '64px !important',
  },
  logoImg: {
    height: '25px',
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: '0',
    right: '0',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  activeButton: {
    color: '#FFF',
  },
  defaultButton: {},
  tab: {
    fontWeight: 'bold',
  },
  activeTab: {
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      left: '50%',
      display: 'block',
      borderBottom: `4px solid ${theme.palette.secondary.main}`,
    },
  },
  avatar: {
    color: theme.palette.primary.main,
    // @ts-ignore
    backgroundColor: theme.palette.backgroundColors.main,
    border: `${theme.palette.primary.main} 1px solid`,
  },
}));

export default useStyles;
