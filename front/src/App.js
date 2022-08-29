import React from 'react';
import { Container } from '@material-ui/core';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './navbar/Navbar';
import HomePage from './pages/homePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import './App.css';
const App = () => {
  return (
    <GoogleOAuthProvider clientId='450189898288-9k6bunga0gvu7rcnignirjg96febmgj0.apps.googleusercontent.com'>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default App;
