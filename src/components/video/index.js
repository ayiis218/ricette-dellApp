/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import Default from '../../assets/img/original.jpg';

const Side = styled.div`
   margin-top: 150px;
   margin-left: 30px;
`;

const Image = styled.img`
   border-radius: 7px;
   object-fit: cover;
   object-position: center;
   width: 300px;
   height: 200px;
`;

const Name = styled.h5`
   margin-top: 7px;
   margin-left: -15px;
   font-size: 22px;
   line-height: 0px;

   &:hover {
      color: var(--secondary-color);
   }
`;

const Author = styled.p`
   margin-top: 15px;
   margin-left: -15px;
   font-size: 13px;
   color: #aaaaaa;
   font-family: 'Airbnb Cereal App Medium';
`;

function List({ recipe }) {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      if (recipe) {
         setLoading(false);
      }
   }, []);

   return (
      <aside className="col-lg-4 d-none d-lg-block">
         <Side>
            {loading ? (
               <div>Loading</div>
            ) : (
               recipe.data.map((item, index) => (
                  <Card className="border-0" key={index}>
                     <Link to={`/recipes/video/${item.id_recipe}`}>
                        <Image
                           src={`${process.env.REACT_APP_API_URL}${item.images}`}
                           alt={item.name_recipe}
                           onError={(e) => {
                              e.target.src = Default;
                           }}
                        />
                     </Link>

                     <CardBody>
                        <Link
                           to={`/recipes/video/${item.id_recipe}`}
                           style={{ color: '#000', textDecoration: 'none' }}
                        >
                           <Name>{item.name_recipe}</Name>
                        </Link>
                        <Author>
                           <Link
                              to={`/recipes/${item.id_recipe}`}
                              style={{ color: '#AAA', textDecoration: 'none' }}
                           >
                              {item.name}{' '}
                           </Link>{' '}
                           - {moment(item.create_at).fromNow()}
                        </Author>
                     </CardBody>
                  </Card>
               ))
            )}
         </Side>
      </aside>
   );
}

export default List;
