// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/LandingPage'
import NotFound from './pages/NotFound'

export default function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element = {<home />} />
          <Route path = 'register' element = {<Register />} />
          <Route path = 'login' element = {<Login />} />
          <Route path = 'landing' element = {<Landing />} />
          <Route path = 'profile' element = {<Profile />} />
          <Route path = '*' element = {<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
   )
}