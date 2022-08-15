import styled from 'styled-components';

export const Section = styled.section`
   display: flex;
   align-items: center;
   height: 100vh;
   padding: 100px 0;
   background: Old Lace;
`;

export const Image = styled.img`
   width: 520px;
   height: 380px;
   object-fit: cover;
   object-position: center;
   box-shadow: var(--shadow-black-300);
   border-radius: 15px;
   animation: bounceTop_01 3s ease infinite;

   @media screen and (max-width: 1110px) {
      width: 350px;
      height: 350px;
   }
   @media screen and (max-width: 991px) {
      margin-left: 55px;
   }
   @media screen and (max-width: 845px) {
      margin: 0 20px;
   }
   @media screen and (max-width: 772px) {
      margin-top: 70px;
      width: 300px;
      height: 300px;
   }
`;