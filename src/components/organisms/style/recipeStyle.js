import styled from 'styled-components';

export const Main = styled.main`
   margin-top: 120px;
   display: flex;
   justify-content: center;
   margin-bottom: 30px;

   @media screen and (max-width: 576px) {
      margin-top: 90px;
   }
`;

export const Input = styled.div`
   border-radius: 10px;
   width: 1000px;
   display: flex;
   align-items: center;
   background-color: #efefef;

   @media screen and (max-width: 576px) {
      width: 350px;
   }
`;

export const Icon = styled.label`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Latest = styled.section`
   margin-top: 50px;
   margin-bottom: 50px;
   margin-left: 105px;
   @media screen and (max-width: 576px) {
      margin-top: 30px;
      margin-left: 50px;
   }
`;

export const Section = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-left: 50px;
   gap: 15px;

   @media screen and (max-width: 576px) {
      margin-left: 50px;
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

export const Images = styled.img`
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

export const Button = styled.button`
background-color: var(--secondary-color);
color: var(--color-1);
padding: 0 15px;
border: none;
border-radius: 4px;
font-size: 16px;
text-transform: capitalize;
transition: all 0.5 ease;
font-weight: 500;
text-decoration: none;
text-align: center;

&:focus {
  box-shadow: var(--shadow-black-300);
}

&:hover {
  cursor: pointer;
  color: var(--main-color);
  background-color: #cea905;
}

@media screen and (max-width: 576px) {
  margin: 0 auto;
  display: block;
}
`;
