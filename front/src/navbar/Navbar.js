import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Avatar,
} from '@material-ui/core';
import memories from '../images/memories.png';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.auth.user)

  // const [user, setUser] = useState(
  //   JSON.parse(localStorage.getItem('profile'))
  // );
  console.log(user);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    // setUser(null);
  };

  // useEffect(() => {
  //     user && setUser(JSON.parse(localStorage.getItem('profile')));
  // }, [localStorage]);

  return (
    <div>
      <AppBar
        className={classes.appBar}
        position='static'
        color='inherit'
      >
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to='/'
            className={classes.heading}
            variant='h2'
            align='center'
          >
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt='icon'
            height='60'
          />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user.name}
                src={user.picture}
              >
                {user.name.charAt(0)}
              </Avatar>
              <Typography
                className={classes.userName}
                variant='h6'
              >
                {user.name}
              </Typography>
              <Button
                variant='contained'
                className={classes.logout}
                color='secondary'
                onClick={logout}
              >
                LOGOUT
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to='/auth'
              variant='contained'
              color='primary'
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
