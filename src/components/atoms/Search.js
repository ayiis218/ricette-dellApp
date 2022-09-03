import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import icon from '../../assets/icons/Vector.png';

const Search = styled.div`
   border-radius: 10px;
   max-width: 500px;
   display: flex;
   align-items: center;
   background-color: #efefef;
`;

const Icon = styled.label`
   display: flex;
   align-items: center;
   justify-content: center;
`;

function SearchRecipe() {
   const navigate = useNavigate();
   const [searchQuery, setSearchQuery] = useState('');

   const search = (e, query) => {
      e.preventDefault();
      return navigate(`/recipes?search=${query}&limit=5&sort=name_recipe`);
   };

   return (
      <>
         <form onSubmit={(e) => search(e, searchQuery)}>
            <Search className="p-3 pl-4">
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
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
            </Search>
         </form>
      </>
   );
}

export default SearchRecipe;
