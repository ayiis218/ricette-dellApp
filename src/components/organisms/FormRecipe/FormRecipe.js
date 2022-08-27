import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useSearchParams, useNavigate } from 'react-router-dom';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
// import { getListRecipe } from '../../../redux/action/recipe';

import Navbar from '../../atoms/Navbar';
// import Pagination from '../../Pagination';
import Footer from '../../Footer';
import icon from '../../../assets/icons/search.svg';
import Default from '../../../assets/img/original.jpg';
import {
   Main,
   Input,
   Icon,
   Latest,
   Section,
   Card,
   TitleRecipe,
   Images,
} from '../style/recipeStyle';

const List = () => {
   // const navigate = useNavigate();
   // const dispatch = useDispatch();
   // const [queryParams] = useSearchParams();
   const { listRecipe } = useSelector((state) => state);
   const [searchQuery, setSearchQuery] = useState('');

   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - List Page`;
   }, []);

   const search = (e) => {
      e.preventDefault();
   };

   return (
      <>
         <Navbar />
         <Main>
            <form onSubmit={search}>
               <Input className="p-3 pl-4">
                  <Icon>
                     <img src={icon} alt="Search" />
                  </Icon>
                  <input
                     type="search"
                     className="form-control"
                     style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        outline: 'none',
                        boxShadow: 'none',
                     }}
                     placeholder="Search Restaurant, Food"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </Input>
            </form>
         </Main>
         <Latest>
            <Section>
               {listRecipe.isLoading ? (
                  <ContentLoader />
               ) : listRecipe.isError ? (
                  <h2 className="text-center">{listRecipe.message}</h2>
               ) : (
                  <>
                     {listRecipe.data.length ? (
                        listRecipe.data.map((item) => (
                           <div className="d-flex justify-content-center">
                              <Link
                                 to={`/recipe/${item.id_recipe}`}
                                 style={{ textDecoration: 'none' }}
                              >
                                 <Card lg="3">
                                    <div className="w-100 h-100 d-flex align-items-end">
                                       <TitleRecipe>
                                          {item.name_recipe}
                                       </TitleRecipe>
                                       <Images
                                          src={`${process.env.REACT_APP_API_URL}${item.images}`}
                                          alt=""
                                          onError={(e) => {
                                             e.target.src = Default;
                                          }}
                                       />
                                    </div>
                                 </Card>
                              </Link>
                           </div>
                        ))
                     ) : (
                        <h2 className="text-center">Recipe not found</h2>
                     )}
                  </>
               )}
            </Section>
         </Latest>
         {/* 

         
         {listRecipe.data.length && (
            <Pagination
               pagination={listRecipe.pagination}
               applyFilter={applyFilter}
            />
         )} */}

         <Footer />
      </>
   );
};

export default List;
