import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';

import PostCard from './PostCard';
import useStyles from './styles/PostCardListingStyles';

const PostCardListing = (props:any) => {
  const { title } = props;
  const classes = useStyles();
  const posts = ['post1', 'post2'];
  return (
    <div key={title} className={classes.sectionWrapper}>
      <Typography variant="h6">
        {title}
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid key={post} item xs={12} sm={6}>
            <PostCard key={post} title={post} />
          </Grid>
        ))}
      </Grid>
    </div>

  );
};

export default PostCardListing;
