/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ContentLoader from 'react-content-loader';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getDetailRecipe } from '../../redux/action/recipe';
// import { getRecipeComments } from '../redux/action/comment';

import NavBar from '../../components/atoms/Navbar';
import FormDetailRecipe from '../../components/organisms/FormRecipe/FormDetailRecipe';
import Footer from '../../components/Footer';

const App = () => {
   const { id } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { detailRecipe } = useSelector((state) => state);

   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - Detail Recipe`;

      dispatch(getDetailRecipe(id, navigate));
   }, []);
   return (
      <>
         <NavBar />

         {detailRecipe.isLoading ? (
            <ContentLoader />
         ) : detailRecipe.isError ? (
            <div>Error</div>
         ) : (
            <FormDetailRecipe recipes={detailRecipe} />
         )}
         <Footer />
      </>
   );
};

export default App;
