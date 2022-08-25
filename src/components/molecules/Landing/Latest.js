import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import Button from '../../atoms/Button';
import vector from '../../../assets/icons/vector.svg';
import Default from '../../../assets/img/original.jpg';
import {
   Section,
   Title,
   Box,
   Vector,
   Image,
   TitleRecipe,
   Border,
   DetailRecipe,
} from './style/latestStyle';

function Latest({ recipes }) {
   const [loading, setLoading] = useState(true);
   const recipe = recipes?.data[0];

   useEffect(() => {
      AOS.init();
      if (recipe) {
         setLoading(false);
      }
   }, [recipe]);

   return (
      <Section data-aos="zoom-in-down">
         <Title className="mb-4 mb-md-5">New Recipe</Title>
         {loading ? (
            <div />
         ) : (
            <Row>
               <Col md="6" className="position-relative">
                  <Box />
                  <Vector src={vector} alt="Vector" />
                  <Image
                     src={`${process.env.REACT_APP_API_URL}${recipe.images}`}
                     alt={recipe.name_recipe}
                     onError={(e) => {
                        e.target.src = Default;
                     }}
                  />
               </Col>
               <Col md="6" className="flex-column justify-content-center">
                  <TitleRecipe>{recipe.name_recipe}</TitleRecipe>
                  <Border />
                  <DetailRecipe>{recipe.ingredients}</DetailRecipe>
                  <Button
                     text="learn more"
                     link={`/recipe/${recipe.id_recipe}`}
                  />
               </Col>
            </Row>
         )}
      </Section>
   );
}

export default Latest;
