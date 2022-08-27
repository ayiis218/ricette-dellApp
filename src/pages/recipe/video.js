/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Code, List } from 'react-content-loader';
import { Container, Row } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailRecipe, getLatestRecipe } from '../../redux/action/recipe';

import Navbar from '../../components/atoms/Navbar';
import Video from '../../components/video/video';
import Lists from '../../components/video';
import Footer from '../../components/Footer';

const Leftbar = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   bottom: 0;
   width: 70px;
   background-color: #efc81a;
   z-index: -1;

   @media screen and (max-width: 576px) {
      top: 600px;
      width: 100%;
   }
`;

const App = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { detailRecipe } = useSelector((state) => state);
   const { latestRecipe } = useSelector((state) => state);

   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - Detail Video Page`;

      dispatch(getDetailRecipe(id, navigate));
      dispatch(getLatestRecipe(5));
   }, []);

   return (
      <>
         <Navbar />

         <Leftbar />
         <Container fluid>
            <Row>
               {detailRecipe.isLoading ? (
                  <Code />
               ) : (
                  <Video recipe={detailRecipe} />
               )}

               {latestRecipe.isLoading ? (
                  <List />
               ) : (
                  <Lists recipe={latestRecipe} />
               )}
            </Row>
         </Container>
         <Footer />
      </>
   );
};

export default App;
