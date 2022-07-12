import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'

//Pages
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import CreateRecipe from '../pages/AddRecipe'
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
          </Route>
          <Route path = '/login'> 
            <Route index element = {<Login />} />
          </Route>
          <Route path = '/register'>
            <Route index element = {<Register />} />
          </Route>

          <Route path = '/profile' element = {<PrivateRoute />}>
            <Route index element = {<Profile />} />
          </Route>
          <Route path = '/add/recipe' element = {<PrivateRoute />}>
            <Route index element = {<CreateRecipe />} />
          </Route>
          <Route path = '*' element = {<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
}

export default router;