/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailRecipe } from '../../redux/action/recipe';
import { getRecipeComments } from '../../redux/action/comment';

import NavBar from '../../components/atoms/Navbar';
import FormDetailRecipe from '../../components/organisms/FormRecipe/FormDetailRecipe';
import Comment from '../../components/organisms/slideComment';
import Footer from '../../components/Footer';

const App = () => {
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
               <Comment comments={recipeComment} />
            </>
         )}
         <Footer />
      </>
   );
};

export default App;
