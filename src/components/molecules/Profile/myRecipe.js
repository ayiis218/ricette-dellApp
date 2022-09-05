/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TabPane, Row, Col } from 'reactstrap';
import alert from 'sweetalert2';
import swal from 'sweetalert';
import { deleteRecipe, getUserRecipes } from '../../../redux/action/recipe';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import Default from '../../../assets/img/original.jpg';

const Card = styled.div`
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

const Image = styled.img`
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

const Title = styled.p`
   text-transform: capitalize;
   padding: 0;
   color: var(--color-3);
   z-index: 2;
   margin-left: 10px;
   margin-bottom: 5px;
   font-size: 30px;
   font-weight: 500;
`;

const Option = styled.div`
   position: absolute;
   top: 200px;
   right: 0;
   z-index: 2;

   @media screen and (max-width: 576px) {
      top: 10px;
      right: 70px;
   }
`;

function MyRecipe({ me, myRecipe }) {
   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch();
   const token = localStorage.getItem('token');
   const decoded = jwt_decode(token);

   useEffect(() => {
      if (myRecipe) {
         setLoading(false);
      }
   }, []);

   const remove = (id_recipe) => {
      swal({
         title: 'Are you sure?',
         text: 'you will not be able to recover this recipe',
         icon: 'warning',
         buttons: true,
         dangerMode: true,
      }).then((willDelete) => {
         if (willDelete) {
            deleteRecipe(id_recipe)
               .then((res) => {
                  alert.fire({
                     title: 'Success!',
                     text: res.message,
                     icon: 'success',
                  });
                  dispatch(getUserRecipes(decoded.id_recipe));
               })
               .catch((err) => {
                  alert.fire({
                     title: 'Failed!',
                     text: err.response.data.message,
                     icon: 'error',
                  });
               });
         }
      });
   };
   return (
      <TabPane tabId="my">
         <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-2 gx-4 mt-4 ml-5">
            {loading ? (
               <div />
            ) : (
               myRecipe.data.map((item) => (
                  <Col key={item.id_recipe}>
                     <Card lg="3">
                        <div className="w-100 h-100 d-flex align-items-end">
                           <Link
                              to={`/recipes/${item.id_recipe}`}
                              style={{ textDecoration: 'none' }}
                           >
                              <Title>{item.name_recipe}</Title>
                              <Image
                                 src={`${process.env.REACT_APP_API_URL}${item.images}`}
                                 alt={item.name_recipe}
                                 onError={(e) => {
                                    e.target.src = Default;
                                 }}
                              />
                           </Link>
                           <Option>
                              {me && (
                                 <>
                                    <Link
                                       to={`/recipes/update/${item.id_recipe}`}
                                       className="btn-edit"
                                    >
                                       <i
                                          className="far fa-edit"
                                          title="Edit Recipe"
                                       />
                                    </Link>
                                    <button
                                       onClick={() => remove(item.id_recipe)}
                                       className="btn-delete"
                                    >
                                       <i
                                          className="far fa-trash-can"
                                          title="Delete Recipe"
                                       />
                                    </button>
                                 </>
                              )}
                           </Option>
                        </div>
                     </Card>
                  </Col>
               ))
            )}
         </Row>
      </TabPane>
   );
}

export default MyRecipe;
