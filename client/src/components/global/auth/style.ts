import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    boxShadow: 'none',
  },
  dialogContainer: {
    padding: 20,
    '& .MuiPaper-root': {
      margin: '0 !important',
    },
    '& .MuiDialogContent-root': {
      padding: '24px',
    },
  },
  signInsignUpToggle: {
    justifyContent: 'space-between',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
