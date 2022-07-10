import React from 'react';
/* import Router from './router/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'; */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProfileContext } from "./context";

//Pages
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <ProfileContext.Provider value={{ name: "ayiis" }}>
    <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element = {<Home />} />
              <Route path = 'register' element = {<Register />} />
              <Route path = 'login' element = {<Login />} />
              <Route path = 'profile' element = {<Profile />} />
              <Route path = '*' element = {<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </ProfileContext.Provider>
   )
}

{/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider> */}