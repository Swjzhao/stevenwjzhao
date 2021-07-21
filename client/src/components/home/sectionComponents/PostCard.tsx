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
    <div className={classes.cardWrapper}>
      <img src={photoUrl || '/card-background.svg'} className="postCardImage" />
      <Card key={title} className={classes.mainMediaWrapper} elevation={0}>
        <CardActionArea>
          <CardContent>
            <Typography color="primary" variant="h6">
              Title Title Title Title Title
            </Typography>
            <br />
            <Typography color="primary" variant="subtitle2" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests.
            </Typography>
          </CardContent>
          <CardActions />
        </CardActionArea>
        <CardActions className={classes.actionButtons} disableSpacing>
          <List className={classes.actionList}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt="User"
                  src=""
                  style={{ width: '30px', height: '30px', borderRadius: '5px' }}
                />
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
    </div>
  );
};

export default PostCard;
