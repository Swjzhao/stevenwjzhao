import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  divider: {
    background: theme.palette.success.main,
    height: '3px',
    width: '120px',
    marginTop: '10px',
    marginBottom: '20px',
  },
  sectionWrapper: {
    padding: '10px 0',
  },
}));

export default useStyles;
