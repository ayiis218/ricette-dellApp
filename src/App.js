import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from './assets/style/GlobalStyles';
import { store, persistor } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'jquery/dist/jquery.min.js';

import Route from './router';

/* import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { ProfileContext } from "./context";

//Pages
import Profile from './pages/user/Profile'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home'
import DetailRecipe from './pages/recipe/DetailRecipe'
import CreateRecipe from './pages/recipe/AddRecipe'
import NotFound from './pages/NotFound' */

export default function App() {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <GlobalStyles />
            <Route />
         </PersistGate>
      </Provider>
   );
}
