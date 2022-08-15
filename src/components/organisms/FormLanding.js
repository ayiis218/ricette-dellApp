import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import ContentLoader from 'react-content-loader';
import { getLatestRecipe } from '../../redux/action/recipe';

import NavBar from '../atoms/Navbar';
import Slider from '../molecules/Landing/Slider';
import Popular from '../molecules/Landing/Popular';
import Latest from '../molecules/Landing/Latest';
import ListPopular from '../molecules/Landing/ListPopular';
import Footer from '../Footer';

const RightBar = styled.div`
   position: absolute;
   right: 0;
   top: 0;
   bottom: 0;
   height: 740px;
   width: 350px;
   background-color: var(--secondary-color);
   z-index: -1;

   @media screen and (max-width: 991px) {
      width: 250px;
   }

   @media screen and (max-width: 767px) {
      width: 150px;
   }

   @media screen and (max-width: 450px) {
      width: 50px;
   }
`;

const FormLanding = () => {
   const dispatch = useDispatch();
   const { latestRecipe } = useSelector((state) => state);

   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - Landing Page`;

      dispatch(getLatestRecipe);
   }, [dispatch]);
   return (
      <>
         <NavBar />
         <RightBar />
         <Slider />
         {latestRecipe.isLoading ? (
            <ContentLoader />
         ) : latestRecipe.isError ? (
            <div>Error</div>
         ) : (
            <Popular recipes={latestRecipe} />
         )}
         {latestRecipe.isLoading ? (
            <ContentLoader />
         ) : latestRecipe.isError ? (
            <div>Error</div>
         ) : (
            <Latest recipes={latestRecipe} />
         )}
         {latestRecipe.isLoading ? (
            <ContentLoader />
         ) : latestRecipe.isError ? (
            <div>Error</div>
         ) : (
            <ListPopular recipes={latestRecipe} />
         )}
         <Footer />
      </>
   );
};

export default FormLanding;
