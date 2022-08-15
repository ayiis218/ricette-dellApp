/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import alert from 'sweetalert2';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailUser } from '../../../redux/action/user';
import User from '../../../assets/icons/user.jpg';

function Auth({ isLogin }) {
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { detailUser } = useSelector((state) => state);

   // Decoded Token
   let decoded = '';
   if (isLogin) {
      decoded = jwt_decode(localStorage.getItem('token'));
   }

   const logout = () => {
      localStorage.clear();
      alert.fire({
         title: 'success',
         text: 'Back login to access',
         icon: 'success',
      });
      navigate('/login');
   };

   useEffect(() => {
      dispatch(getDetailUser(decoded.id_users));
   }, []);

   return (
      <>
         {isLogin ? (
            <div
               className={
                  location.pathname === '/' ? 'nav-auth' : 'nav-inverse'
               }
            >
               <img
                  src={`https://ricette-dellapp.herokuapp.com/${detailUser?.data[0]?.photo}`}
                  alt={detailUser.name}
                  onError={(e) => {
                     e.target.src = User;
                  }}
               />

               <Link to="/profile">{detailUser.name}</Link>
               <button title="Logout" onClick={logout}>
                  <i className="fa-solid fa-right-from-bracket" />
               </button>
            </div>
         ) : (
            <div className="nav-auth">
               <Link to="/login">Login</Link>
            </div>
         )}
      </>
   );
}

export default Auth;
