import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ContentLoader from 'react-content-loader';
import { useSelector, useDispatch } from 'react-redux';
import { getListRecipe } from '../../../redux/action/recipe';

import Navbar from '../../atoms/Navbar';
import Pagination from '../../Pagination';
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
   Button,
} from '../style/recipeStyle';

const List = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { listRecipe } = useSelector((state) => state);

   const [queryParams] = useSearchParams();
   const [searchQuery, setSearchQuery] = useState('');
   const [limitQuery, setLimitQuery] = useState('');
   const [sortQuery, setSortQuery] = useState('');

   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - List Page`;
   }, []);

   useEffect(() => {
      let url = `/recipes?`;

      setSearchQuery('');
      if (queryParams.get('search')) {
         setSearchQuery(queryParams.get('search'));
         url += `&search=${queryParams.get('search')}`;
      }

      setLimitQuery('');
      if (queryParams.get('limit')) {
         setLimitQuery(queryParams.get('limit'));
         url += `&limit=${queryParams.get('limit')}`;
      }

      if (queryParams.get('page')) {
         url += `&page=${queryParams.get('page')}`;
      }

      dispatch(getListRecipe(url, navigate));
   }, [dispatch, navigate, queryParams]);

   const applyFilter = (page = '') => {
      let url = '/recipe?';
      if (searchQuery) {
         url += `&search=${searchQuery}`;
      }
      if (limitQuery) {
         url += `&limit=${limitQuery}`;
      }
      if (sortQuery) {
         url += `&sort=${sortQuery}`;
      }
      if (page) {
         url += `&page=${page}`;
      }

      return navigate(url);
   };

   const search = (e) => {
      e.preventDefault();

      applyFilter();
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
         <div className="row mx-auto" style={{ maxWidth: '1000px' }}>
            <div className="col-12 col-sm-6">
               <form className="d-flex my-2" onSubmit={search}>
                  <select
                     className="form-select form-select-md"
                     onChange={(e) => setSortQuery(e.target.value)}
                     value={sortQuery}
                  >
                     <option value="">Sort By</option>
                     <option value="title">Title</option>
                     <option value="date">Date</option>
                  </select>
                  <Button className="ms-2" type="submit">
                     Sort
                  </Button>
               </form>
            </div>
            <div className="col-12 col-sm-6">
               <form className="d-flex my-2" onSubmit={search}>
                  <select
                     className="form-select form-select-md"
                     onChange={(e) => setLimitQuery(e.target.value)}
                     value={limitQuery}
                  >
                     <option value="">Limit</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                  </select>
                  <Button className="ms-2" type="submit">
                     Limit
                  </Button>
               </form>
            </div>
         </div>

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
                                 to={`/recipes/${item.id_recipe}`}
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

         {listRecipe.data.length && (
            <Pagination
               pagination={listRecipe.pagination}
               applyFilter={applyFilter}
            />
         )}

         <Footer />
      </>
   );
};

export default List;
