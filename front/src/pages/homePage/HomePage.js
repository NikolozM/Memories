import React, { useEffect, useState } from 'react';
import Form from './Components/Form';
import Posts from './Components/Posts';
import { getPosts } from '../../redux/actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import useStyles from '../../styles';
const HomePage = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      <Grid
        className={classes.mainContainer}
        container
        justify='space-between'
        alignItems='stretch'
        spacing={3}
      >
        <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
