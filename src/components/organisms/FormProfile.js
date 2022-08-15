/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import jwt_decode from 'jwt-decode';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailUser } from '../../redux/action/user';

import NavBar from '../atoms/Navbar';
import Profile from '../molecules/Profile/MyProfile';
import NavProfile from '../molecules/Profile/NavProfile';
import Footer from '../Footer';

function FormProfile({ me = false }) {
   const token = localStorage.getItem('token');
   const decoded = jwt_decode(token);

   const { id_users } = useParams();
   const dispatch = useDispatch();
   const { detailUser } = useSelector((state) => state);

   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - ${
         me ? 'My Profile' : 'Profile'
      }`;

      const userId = id_users || decoded.id_users;
      dispatch(getDetailUser(userId));
   }, []);

   return (
      <>
         <NavBar />
         {detailUser.isLoading ? (
            <ContentLoader />
         ) : detailUser.isError ? (
            <div>Error</div>
         ) : (
            <Profile users={detailUser} me={(me = true)} />
         )}
         <NavProfile me={me} profile={detailUser} />
         <Footer />
      </>
   );
}

export default FormProfile;
