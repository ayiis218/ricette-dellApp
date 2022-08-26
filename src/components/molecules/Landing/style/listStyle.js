import styled from 'styled-components';

export const Section = styled.section`
   margin-top: 80px;
   margin-bottom: 20px;
   @media screen and (max-width: 576px) {
      margin-top: -10px;
   }
`;

export const Title = styled.h2`
   border-left: 12px solid var(--secondary-color);
   margin: 0 0 0 50px;
   padding: 15px;
   display: flex;
   font-family: 'Airbnb Cereal App Medium';
   color: var(--color-3);

   @media screen and (max-width: 576px) {
      margin-left: 10px;
   }
`;

export const Item = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-left: 50px;
   gap: 28px;

   @media screen and (max-width: 576px) {
      margin-left: 0;
      gap: 10px;
      justify-content: center;
   }
`;

export const Card = styled.div`
   position: relative;
   width: 250px;
   height: 250px;
   min-height: 300px;
   max-height: 500px;
   border-radius: 20px;
   transition: ease-in-out 150ms;

   &:hover {
      box-shadow: 0 0 12px -2px var(--secondary-color);
      transition: ease-in-out 150ms;
      cursor: pointer;
   }

   @media screen and (max-width: 576px) {
      width: 350px;
      height: 100px;
   }
`;

export const TitleRecipe = styled.h2`
   text-transform: capitalize;
   padding: 0;
   color: var(--color-3);
   z-index: 2;
   margin-left: 10px;
`;

export const Image = styled.img`
   position: absolute;
   width: 240px;
   height: 240px;
   z-index: 1;
   top: 5px;
   left: 5px;
   object-fit: cover;
   object-position: center;
   border-radius: 20px;
   transition: ease-in-out 150ms;

   @media screen and (max-width: 1200px) {
      width: 450px;
      height: 450px;
   }

   @media screen and (max-width: 940px) {
      width: 400px;
      height: 400px;
   }

   @media screen and (max-width: 576px) {
      width: 300px;
      height: 300px;
      margin-left: 28px;
   }
`;
