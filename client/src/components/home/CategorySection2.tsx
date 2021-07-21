import { Container, Grid } from '@material-ui/core';
// @ts-ignore
import cx from 'classnames';
import React, { useEffect } from 'react';

import CategoryHeader from './sectionComponents/CategoryHeader';
import PostCard from './sectionComponents/PostCard';
import useStyles from './styles/sectionStyles';

const CategorySection1 = (props: any) => {
  const { category } = props;
  const classes = useStyles();
  const posts = [
    {
      title: 'Test',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      author: 'SZ',
    },
    {
      title: 'Test',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      author: 'SZ',
    },
  ];
  useEffect(() => {}, []);
  return (
    <div className={cx(classes.sectionWrapper, classes.darkWrapper)}>
      <Container maxWidth={'xl'} className={cx(classes.sectionContainer)}>
        <Grid container style={{ flexGrow: 1 }} spacing={2}>
          <Grid item sm={7} style={{ display: 'flex', flexGrow: 1 }}>
            <Grid container style={{ flexGrow: 1 }} spacing={10}>
              {posts.map((post) => {
                return (
                  <Grid sm={6} key={post.title} item className={classes.gridItemContainer}>
                    <PostCard post />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          <Grid item sm={1} />
          <CategoryHeader category={category} />
        </Grid>
      </Container>
    </div>
  );
};

export default CategorySection1;
