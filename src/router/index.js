import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'

//Pages
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import Edit from '../pages/Edit'
import NotFound from '../pages/NotFound'

const PrivateRoute = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  };

const router = () => {
    return ( 
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element = {<Home />} />
            <Route path = 'register' element = {<Register />} />
            <Route path = 'login' element = {<Login />} />
            <Route path = 'profile' element = {<PrivateRoute />}>
              <Route index element = {<Profile />} />
              <Route path = 'edit' element = {<Edit />} />
            </Route>
            <Route path = '*' element = {<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default router;