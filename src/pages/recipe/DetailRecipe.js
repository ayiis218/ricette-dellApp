/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { List } from 'react-content-loader';
import { getDetailRecipe } from '../../redux/action/recipe';
import { getRecipeComments } from '../../redux/action/comment';
import Default from '../../assets/img/user.jpg';
import NavBar from '../../components/atoms/Navbar';
import FormDetailRecipe from '../../components/organisms/FormRecipe/FormDetailRecipe';
import Comment from '../../components/organisms/slideComment';
import Footer from '../../components/Footer';

const Info = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-left: 20px;
`;

const Profile = styled.img`
   max-width: 65px;
   min-width: 65px;
   max-height: 65px;
   min-height: 65px;
   object-fit: cover;
   object-position: center;
`;

const Detail = styled.div`
   margin: 0 auto;
   margin-top: 40px;
   max-width: 900px;
`;

const Item = styled.h3`
   color: var(--color-3);
   margin-bottom: 20px;
`;

const App = () => {
   const isLogin = Boolean(localStorage.getItem('token'));

   const { id } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { detailRecipe } = useSelector((state) => state);
   const { recipeComment } = useSelector((state) => state);

   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - Detail Recipe`;

      dispatch(getDetailRecipe(id, navigate));
      dispatch(getRecipeComments(id, navigate));
   }, []);
   return (
      <>
         <NavBar />

         {detailRecipe.isLoading ? (
            <ContentLoader />
         ) : detailRecipe.isError ? (
            <div>Error</div>
         ) : (
            <>
               <FormDetailRecipe recipes={detailRecipe} />
               {isLogin ? (
                  <Comment comments={recipeComment} />
               ) : (
                  <Detail>
                     <Item>Comment</Item>
                     {recipeComment.isLoading ? (
                        <List />
                     ) : (
                        recipeComment.data.map((item, index) => (
                           <div
                              className="d-flex align-items-center mb-3"
                              key={index}
                           >
                              <Profile
                                 src={`${process.env.REACT_APP_API_URL}${item.photo}`}
                                 alt={item.name}
                                 className="rounded-circle"
                                 onError={(e) => {
                                    e.target.src = Default;
                                 }}
                              />
                              <Info className="h-100">
                                 <h6>{item.name}</h6>
                                 <span>{item.text}</span>
                              </Info>
                           </div>
                        ))
                     )}
                  </Detail>
               )}
            </>
         )}
         <Footer />
      </>
   );
};

export default App;
