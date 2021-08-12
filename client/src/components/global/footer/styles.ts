import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  caption: {
    fontSize: 12,
    fontFamily: 'Josefin Sans',
    textAlign: 'center',
  },
  captionContainer: {
    padding: '10px 0',
  },
  outerContainer: {
    // @ts-ignore
    background: theme.palette.backgroundColors.light,
    padding: '50px 16px 20px 16px !important',
    boxShadow: `0 0 100px 100px ${theme.palette.backgroundColors.main} inset`,
  },

  iconGrid: {
    textAlign: 'center',
    padding: 5,
  },
}));

export default useStyles;
