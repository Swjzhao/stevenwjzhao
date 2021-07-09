import { Divider, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';

import PostCard from './PostCard';
import useStyles from './style';

const PostCardListing = (props:any) => {
  useEffect(() => {

  }, []);

  const { title } = props;
  const classes = useStyles();
  const posts = ['post1', 'post2'];
  return (
    <div className={classes.sectionWrapper}>
      <Typography variant="h6">
        {title}
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6}>
            <PostCard title={post} />
          </Grid>
        ))}
      </Grid>
    </div>

  );
};

export default PostCardListing;
