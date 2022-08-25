import styled from 'styled-components';

export const Section = styled.section`
   margin: 0 auto;
   margin-top: 150px;
   max-width: 800px;
   margin-bottom: 20px;

   @media screen and (max-width: 576px) {
      margin-top: 90px;
   }
`;

export const Title = styled.h1`
   font-family: 'Airbnb Cereal App Medium';
   color: var(--color-2);
   text-align: center;
   margin-bottom: 60px;

   @media screen and (max-width: 576px) {
   }
`;

export const Image = styled.img`
   min-width: 100%;
   max-width: 300px;
   min-height: 200px;
   max-height: 500px;
   object-fit: cover;
   object-position: center;
   margin: 0 auto;
   border-radius: 15px !important;
   margin-top: 40px;
`;

export const Icon = styled.div`
   z-index: 2;
   right: 20px;
   bottom: 20px;
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;

   @media screen and (max-width: 576px) {
      right: 65px;
      bottom: 10px;
   }
`;

export const Saved = styled.div`
   border-radius: 7px !important;
   padding: 5px;
   width: 35px;
   background-color: var(--secondary-color);

   &:hover {
      cursor: pointer;
      color: #cea905;
   }
`;

export const Liked = styled.div`
   border-radius: 7px !important;
   padding: 2px;
   width: 37px;
   background-color: var(--main-color);

   &:hover {
      cursor: pointer;
   }
`;

export const Item = styled.div`
   margin: 0 auto;
   margin-top: 40px;
   max-width: 900px;
`;

export const Heading = styled.h3`
   font-family: 'Airbnb Cereal App Medium';
   color: var(--color-3);
   margin-bottom: 20px;
`;

export const Ingredients = styled.p`
   margin: 0;
   font-family: 'Airbnb Cereal App Light';
   white-space: pre-line;
   text-transform: capitalize;
`;

export const Video = styled.button`
   width: 30%;
   height: 50px;
   border: 0;
   border-radius: 10px;
   background-color: #efc81a;
   color: var(--main-color);
   margin-bottom: 30px;

   &:hover {
      color: #cea905;
      box-shadow: var(--shadow-black-300);
   }

   @media screen and (max-width: 576px) {
      width: 60%;
   }
`;

export const Play = styled.img`
   width: 15px;
   height: auto;
`;

export const Author = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: -25px;
`;

export const Profile = styled.img`
   max-width: 60px;
   min-width: 60px;
   max-height: 60px;
   min-height: 60px;
   object-fit: cover;
   object-position: center;
`;

export const Info = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-left: 15px;
`;
