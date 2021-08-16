import { Container, Grid } from '@material-ui/core';
import cx from 'clsx';
import React, { useEffect } from 'react';

import sharedSectionStyles from '../../styles/pageSectionStyles';
import CategoryHeader from './sectionComponents/CategoryHeader';
import PostCard from './sectionComponents/PostCard';
import useStyles from './styles/sectionStyles';

const CategorySection1 = (props: any) => {
  const { category } = props;
  const classes = useStyles();
  const sharedClasses = sharedSectionStyles();
  const posts = [
    {
      title: 'Test',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      author: 'SZ',
    },
    {
      title: 'Test2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      author: 'SZ',
    },
  ];
  useEffect(() => {}, []);
  return (
    <div className={cx(sharedClasses.sectionWrapper, sharedClasses.lightWrapper)}>
      <Container
        maxWidth={'xl'}
        className={cx(sharedClasses.sectionContainer, classes.category3Container)}
      >
        <Grid container style={{ flexGrow: 1 }} spacing={2}>
          <CategoryHeader category={category} />
          <Grid item sm={1} className={classes.hiddenGrid}></Grid>
          <Grid item sm={8} md={8} lg={7} style={{ display: 'flex', flexGrow: 1 }}>
            <Grid container style={{ flexGrow: 1 }} spacing={5}>
              {posts.map((post) => {
                return (
                  <Grid sm={6} key={post.title} item className={sharedClasses.gridItemContainer}>
                    <PostCard post />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CategorySection1;
