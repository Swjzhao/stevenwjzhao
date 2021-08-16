import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profilePaper: {
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px`,
    margin: `${theme.spacing(5)}px ${theme.spacing(0)}px`,
  },
}));

export default useStyles;
