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
// import { FaRegComment } from 'react-icons/fa';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import React from 'react';
// @ts-ignore
import LinesEllipsis from 'react-lines-ellipsis';

import ShareOptionsPopover from '../../global/utils/ShareOptionsPopover';
import useStyles from '../styles/postCardStyles';

const PostCard = (props: any) => {
  const classes = useStyles();
  const { photoUrl, title } = props;
  const post = { id: 0, title, description: '' };
  return (
    <div className={classes.cardWrapper}>
      <Card key={title} className={classes.mainMediaWrapper} elevation={0}>
        <CardActionArea
          classes={{
            root: classes.cardActionArea,
          }}
        >
          <CardMedia
            className={classes.photoWrapper}
            image={`${
              photoUrl ||
              'https://res.cloudinary.com/we-are-still-dreamers/image/upload/v1629356330/wearestilldreamers/static/azqzjjupu25nwjpcqywe.png'
            }`}
            title="Test"
          />
          <CardContent
            classes={{
              root: classes.cardContent,
            }}
          >
            <Typography color="primary" variant="h6">
              <LinesEllipsis
                text={`Coming Soon!`}
                maxLine="1"
                ellipsis="..."
                trimRight
                basedOn="words"
              />
            </Typography>
            <br />
            <Typography color="primary" variant="subtitle2" component="p">
              <LinesEllipsis
                text={`Greatest fear is mediocrity.`}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="words"
              />
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
                  src={
                    'https://media-exp1.licdn.com/dms/image/C5603AQHBMSesjLe3Yw/profile-displayphoto-shrink_200_200/0/1553361214770?e=1634169600&v=beta&t=3PeJof7oM6qgbYEkhL8GgkMN8a_GFL7_Q8xWKN1UU_4'
                  }
                  style={{ width: '30px', height: '30px', borderRadius: '5px' }}
                />
              </ListItemAvatar>
              <ListItemText primary="Steven Zhao" />
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
