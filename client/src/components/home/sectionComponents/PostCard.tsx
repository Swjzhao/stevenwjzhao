import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { FaRegComment } from 'react-icons/fa';

import ShareOptionsPopover from '../../global/utils/ShareOptionsPopover';

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

const PostCard = (props: any) => {
  const classes = useStyles();
  const { photoUrl, title } = props;
  const post = { id: 0, title, description: '' };
  return (
    <Card key={title} className={classes.mainMediaWrapper} elevation={0}>
      <CardActionArea>
        <div className={classes.thumbnailWrapper}>
          <CardMedia
            className={classes.media}
            image={
              photoUrl ||
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Clouds_over_the_Atlantic_Ocean.jpg/330px-Clouds_over_the_Atlantic_Ocean.jpg'
            }
          />
          <CardContent>
            <Typography component="h2">Title Title Title Title Title</Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
        </div>
        <CardActions />
      </CardActionArea>
      <CardActions className={classes.actionButtons} disableSpacing>
        <List className={classes.actionList}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="User" src="" style={{ width: '30px', height: '30px' }} />
            </ListItemAvatar>
            <ListItemText primary="John Smith" />
          </ListItem>
        </List>
        <IconButton
          aria-label="comment"
          style={{ marginLeft: 'auto' }}
          className={classes.actionButton}
        >
          <FaRegComment />
        </IconButton>

        <ShareOptionsPopover post={post} />
      </CardActions>
    </Card>
  );
};

export default PostCard;
