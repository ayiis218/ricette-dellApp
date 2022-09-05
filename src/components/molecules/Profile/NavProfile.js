/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useSearchParams } from 'react-router-dom';
import { Nav, NavItem, NavLink, TabContent } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import ContentLoader from 'react-content-loader';
import { getUserRecipes } from '../../../redux/action/recipe';
// import { getListSavedRecipe } from '../../store/actions/savedRecipe';
// import { getListLikedRecipe } from '../../store/actions/likedRecipe';
import MyRecipe from './myRecipe';
// import SavedRecipe from './SavedRecipe';
// import LikedRecipe from './LikedRecipe';

const Menu = styled.div`
   margin-top: 10px;
   margin-bottom: -70px;
   display: block;
   width: 100%;
   padding: 80px;

   @media screen and (max-width: 576px) {
      margin-top: 20px;
      padding: 10px;
   }
`;

function Profile({ me, profile }) {
   const token = localStorage.getItem('token');
   const decoded = jwt_decode(token);
   const id = decoded.id_users;
   const dispatch = useDispatch();
   const { userRecipe } = useSelector((state) => state);
   const [tab, setTab] = useState('');
   const [queryParams] = useSearchParams();

   useEffect(() => {
      const userId = id;
      dispatch(getUserRecipes(userId));
      setTab(queryParams.get('tab'));
   }, [queryParams]);

   return (
      <Menu>
         <Nav tabs>
            <NavItem>
               <NavLink
                  tag={Link}
                  to={'/profile'}
                  className={tab !== 'liked' && tab !== 'saved' ? 'active' : ''}
                  onClick={() => setTab('my')}
                  style={{ color: '#574acd' }}
               >
                  My Recipe
               </NavLink>
            </NavItem>
            <NavItem>
               <NavLink
                  tag={Link}
                  to={'/profile'}
                  // to={
                  //    me
                  //       ? '/profile?tab=saved'
                  //       : `/profile/${profile.data.id_users}?tab=saved`
                  // }
                  className={tab === 'saved' ? 'active' : ''}
                  style={{ color: '#574acd' }}
                  onClick={() => setTab('saved')}
               >
                  Saved Recipe
               </NavLink>
            </NavItem>
            <NavItem>
               <NavLink
                  tag={Link}
                  to={'/profile'}
                  /* to={
                     me
                        ? '/profile?tab=liked'
                        : `/profile/${profile.data.id_users}?tab=liked`
                  } */
                  className={tab === 'liked' ? 'active' : ''}
                  style={{ color: '#574acd' }}
                  onClick={() => setTab('liked')}
               >
                  Liked Recipe
               </NavLink>
            </NavItem>
         </Nav>
         <hr />
         <TabContent activeTab={tab}>
            {tab !== 'saved' &&
               tab !== 'liked' &&
               (userRecipe.isLoading ? (
                  <ContentLoader />
               ) : userRecipe.data.length ? (
                  <MyRecipe me={me} myRecipe={userRecipe} />
               ) : (
                  <h4 className="my-4 text-center">
                     You have not created a recipe yet
                  </h4>
               ))}
         </TabContent>
      </Menu>
   );
}

export default Profile;
