import {
  Card,
  CardActionArea,
  CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

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
  },
  media: {
    position: 'relative',
    height: 0,
    paddingTop: '56.25%', // 16:9
    [theme.breakpoints.down('xs')]: {
      paddingTop: '42.25%',
    },
  },
  videoActions: {
    padding: '5px 20px',
    display: 'flex',
    alignItem: 'flex-end',
    justifyContent: 'flex-end',
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
}));

const PostCard = (props: any) => {
  const classes = useStyles();
  return (
    <Card className={classes.mainMediaWrapper} elevation={3}>
      <CardActionArea>
        <CardActions />
      </CardActionArea>
    </Card>
  );
};

export default PostCard;
