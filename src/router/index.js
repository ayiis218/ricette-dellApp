import React from 'react';
import {
   BrowserRouter,
   Routes,
   Route,
   Navigate,
   Outlet,
} from 'react-router-dom';

//Pages
import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Profile from '../pages/user/Profile';
import UpdateProfile from '../pages/user/UpdateProfile';
import List from '../pages/recipe/ListRecipe';
import CreateRecipe from '../pages/recipe/AddRecipe';
import DetailRecipe from '../pages/recipe/DetailRecipe';
import UpdateRecipe from '../pages/recipe/UpdateRecipe';
import NotFound from '../pages/NotFound';

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
            <Route path="/">
               <Route index element={<Home />} />
            </Route>
            <Route path="/login">
               <Route index element={<Login />} />
            </Route>
            <Route path="/register">
               <Route index element={<Register />} />
            </Route>
            <Route path="/profile/" element={<PrivateRoute />}>
               <Route index element={<Profile me />} />
               <Route path=":id" element={<Profile />} />
               <Route path="update" element={<UpdateProfile />} />
               <Route path="password" element={<UpdateProfile />} />
            </Route>
            <Route path="/recipe/" element={<PrivateRoute />}>
               <Route index element={<NotFound />} />
               <Route path="Add" element={<CreateRecipe />} />
               <Route path=":id" element={<DetailRecipe />} />
               <Route path="update/:id" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
};

export default router;
