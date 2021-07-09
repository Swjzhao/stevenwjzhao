import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: 'flex',

    '& img': { width: '70%', height: 'auto', borderRadius: '50%' },
  },
}));

const SidePanelContainer = (props: any) => {
  useEffect(() => {

  }, []);
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" style={{ marginTop: '65px' }}>
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} className={classes.avatarContainer}>

          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQHBMSesjLe3Yw/profile-displayphoto-shrink_200_200/0/1553361214770?e=1631145600&v=beta&t=cQeSkKC7PVrTj_biqqSzUo9Yi3PPchPkzics8He__nc"
            alt="avatarUrl"
          />
        </Grid>

        <Grid item xs={12} sm={3} />
      </Grid>
    </Container>
  );
};

export default SidePanelContainer;
