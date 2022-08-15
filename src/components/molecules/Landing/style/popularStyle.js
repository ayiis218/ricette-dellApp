import styled from 'styled-components';

export const Section = styled.section`
   height: 100vh;
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

export const Box = styled.div`
   position: absolute;
   width: 500px;
   height: 450px;
   border-radius: 15px;
   border: 3px solid var(--secondary-color);
   right: 20px;
   bottom: 40px;
   z-index: -1;

   @media screen and (max-width: 1200px) {
      width: 450px;
      height: 450px;
      right: 10px;
   }

   @media screen and (max-width: 940px) {
      width: 400px;
      height: 400px;
      right: -15px;
   }

   @media screen and (max-width: 576px) {
      width: 300px;
      height: 300px;
      right: 40px;
      bottom: -25px;
   }
`;

export const Vector = styled.img`
   position: absolute;
   margin: 30px 0 0 5px;
   width: 320px;
   height: auto;
   z-index: -1;

   @media screen and (max-width: 576px) {
      width: 250px;
   }
`;

export const Image = styled.img`
   width: 500px;
   height: 450px;
   margin-left: 90px;
   object-fit: cover;
   object-position: center;
   border-radius: 15px;
   animation: bounceTop_01 3s ease infinite;

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

export const TitleRecipe = styled.h1`
   margin-left: 50px;
   font-family: 'Airbnb Cereal App Medium';
   color: var(--color-3);
   width: 70%;

   @media screen and (max-width: 1200px) {
      font-size: 40px;
      width: 80%;
   }

   @media screen and (max-width: 940px) {
      font-size: 27px;
   }

   @media screen and (max-width: 576px) {
      font-size: 25px;
      text-align: center;
      margin-top: 35px;
   }
`;

export const Border = styled.hr`
   width: auto;
   border: solid var(--secondary-color);
   margin-left: 50px;

   @media screen and (max-width: 576px) {
      width: 50%;
      margin-left: 25% !important;
      margin-right: 25% !important;
   }
`;

export const DetailRecipe = styled.p`
   margin-left: 50px;
   font-family: 'Airbnb Cereal App Light';
   color: var(--color-3);
   width: 65%;
   font-size: 18px;

   @media screen and (max-width: 1200px) {
      font-size: 16px;
      width: 75%;
   }

   @media screen and (max-width: 940px) {
      font-size: 14px;
   }

   @media screen and (max-width: 576px) {
      text-align: center;
   }
`;