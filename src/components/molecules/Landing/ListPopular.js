import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Default from '../../../assets/img/original.jpg';
import {
   Section,
   Title,
   Item,
   Card,
   TitleRecipe,
   Image,
} from './style/listStyle';

function ListPopular({ recipes }) {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      if (recipes) {
         setLoading(false);
      }
   }, [recipes]);

   return (
      <Section data-aos="zoom-in-down">
         <Title className="mb-4 mb-md-5">Popular Recipe</Title>
         <Item>
            {loading ? (
               <div />
            ) : (
               recipes.data.map((item) => (
                  <div className="justify-content-center" key={item.id_recipe}>
                     <Link
                        to={`/recipes/${item.id_recipe}`}
                        style={{ textDecoration: 'none' }}
                     >
                        <Row>
                           <Card lg="3">
                              <div className="w-100 h-100 d-flex align-items-end">
                                 <TitleRecipe>{item.name_recipe}</TitleRecipe>
                                 <Image
                                    src={`${process.env.REACT_APP_API_URL}${item.images}`}
                                    alt="popular recipe"
                                    onError={(e) => {
                                       e.target.src = Default;
                                    }}
                                 />
                              </div>
                           </Card>
                        </Row>
                     </Link>
                  </div>
               ))
            )}
         </Item>
      </Section>
   );
}

export default ListPopular;
