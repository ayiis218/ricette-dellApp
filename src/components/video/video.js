import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Row } from 'reactstrap';

const Left = styled.div`
   display: flex;
   justify-content: center;
   margin-left: 130px;

   @media screen and (max-width: 576px) {
      margin-left: 25px;
   }
`;

const IFrame = styled.div`
   margin-top: 150px;
   width: 100%;
   height: 250px;
   background-color: var(--second-color);

   @media screen and (max-width: 576px) {
      margin: 90px -20px 0 10px;
   }
`;

const Title = styled.h2`
   text-transform: capitalize;
   width: 80%;
   margin-top: 30px;

   font-size: 28px;
   line-height: 30px;

   @media screen and (max-width: 576px) {
      font-size: 24px;
      margin-top: 10px;
   }
`;

const Date = styled.p`
   font-size: 18px;
   margin-top: 5px;
   color: #aaaaaa;

   @media screen and (max-width: 576px) {
      font-size: 13px;
      margin-top: -8px;
   }
`;

function Video({ recipe }) {
   console.log(recipe?.data);
   return (
      <main className="col-12 col-lg-8">
         {recipe.data.map((item) => (
            <Row className="vh-100">
               <Left className="col-12">
                  <IFrame className="mx-1 mx-sm-3 mx-md-5">
                     <iframe
                        width="560"
                        height="315"
                        src={item.video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                     ></iframe>
                     <Title>{item.name_recipe}</Title>
                     <Date>{moment(item.create_at).fromNow()}</Date>
                  </IFrame>
               </Left>
            </Row>
         ))}
      </main>
   );
}

export default Video;
