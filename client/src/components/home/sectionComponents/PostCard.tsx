import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
// import { FaRegComment } from 'react-icons/fa';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import React from 'react';

import ShareOptionsPopover from '../../global/utils/ShareOptionsPopover';
import useStyles from '../styles/postCardStyles';

const PostCard = (props: any) => {
  const classes = useStyles();
  const { photoUrl, title } = props;
  const post = { id: 0, title, description: '' };
  return (
    <Card key={title} className={classes.mainMediaWrapper} elevation={0}>
      <CardActionArea>
        <div className={classes.thumbnailWrapper}>
          <CardContent>
            <Typography color="primary" component="h2">
              Title Title Title Title Title
            </Typography>
            <Typography color="primary" variant="subtitle2" component="p">
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
          color="primary"
          className={classes.actionButton}
        >
          <QuestionAnswerIcon />
        </IconButton>

        <ShareOptionsPopover post={post} />
      </CardActions>
    </Card>
  );
};

export default PostCard;
