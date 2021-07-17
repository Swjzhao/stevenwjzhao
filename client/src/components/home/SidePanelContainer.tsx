import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    '& img': { width: '70%', height: 'auto', borderRadius: '50%' },
  },
  tab: {
    tabSize: 2,
  },
  sectionTitle: {
    borderLeft: '2px solid #2ec605',
    paddingLeft: '15px',
  },
}));

const SidePanelContainer = (props: any) => {
  useEffect(() => {}, []);
  const classes = useStyles();
  return (
    <Container maxWidth={'md'}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            style={{ marginTop: '65px' }}
            className={classes.sectionTitle}
          >
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.avatarContainer}>
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQHBMSesjLe3Yw/profile-displayphoto-shrink_200_200/0/1553361214770?e=1631145600&v=beta&t=cQeSkKC7PVrTj_biqqSzUo9Yi3PPchPkzics8He__nc"
            alt="avatarUrl"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography component="h2" style={{ textAlign: 'center', padding: '5px 0' }}>
            Hi I&apos;m Steven!
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            &nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum ex vix illud nonummy novumtatio et his. At vix
            patrioque scribentur at fugitertissi ext scriptaset verterem molestiae.
          </Typography>
          <Button
            style={{
              textTransform: 'none',
              textDecoration: 'none',
              backgroundColor: 'transparent',
              float: 'right',
            }}
          >
            {' '}
            Read More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SidePanelContainer;
