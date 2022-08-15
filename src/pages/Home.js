import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import ContentLoader from 'react-content-loader';
import { getLatestRecipe } from '../redux/action/recipe';

import NavBar from '../components/atoms/Navbar';
import Slider from '../components/molecules/Landing/Slider';
import Popular from '../components/molecules/Landing/Popular';
import Latest from '../components/molecules/Landing/Latest';
import ListPopular from '../components/molecules/Landing/ListPopular';
import Footer from '../components/Footer';

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

const Home = () => {
   const dispatch = useDispatch();
   const { latestRecipe } = useSelector((state) => state);

   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - Landing Page`;

      dispatch(getLatestRecipe(6));
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

export default Home;
