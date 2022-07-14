import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from './assets/style/GlobalStyles'
import { store, persistor } from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'jquery/dist/jquery.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { ProfileContext } from "./context";

//Pages
import Profile from './pages/user/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import DetailRecipe from './pages/recipe/DetailRecipe'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element = {<Home />} />
              <Route path = 'register' element = {<Register />} />
              <Route path = 'login' element = {<Login />} />
              <Route path = 'profile' element = {<Profile />} />
              <Route path = 'detailRecipe' element = {<DetailRecipe />} />
              <Route path = '*' element = {<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
   )
}