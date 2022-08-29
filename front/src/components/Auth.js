import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  GoogleLogin,
  googleLogout,
} from '@react-oauth/google';
import Input from './Input';
import jwt_decode from 'jwt-decode';
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);

  const googleSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);
    try {
      dispatch({ type: 'AUTH', payload: decoded });
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log('cant get access');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {};
  const switchMode = () => {
    setIsSignup((previsSignup) => !previsSignup);
  };

  const handleShowPassword = () => {
    setShowPassword(
      (prevShowPassword) => !prevShowPassword
    );
  };
  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name='lastName'
                  label='Last Name'
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name='email'
              label='Email Address'
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name='confirmPassword'
                label='Repeat Password'
                handleChange={handleChange}
                type='password'
              />
            )}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>

          <GoogleLogin
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />

          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? 'Already have an account? Sign In'
                  : "Don't have an account? Sign In"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
