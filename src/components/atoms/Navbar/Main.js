import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Main({ isLogin }) {
   const location = useLocation();

   return (
      <Nav className="me-auto" navbar>
         <NavItem>
            <NavLink tag={Link} to="/" active={location.pathname === '/'}>
               Home
            </NavLink>
         </NavItem>
         {isLogin && (
            <>
               <NavItem>
                  <NavLink
                     tag={Link}
                     to="/recipes?field=name_recipe&limit=11"
                     active={location.pathname === '/recipes'}
                  >
                     list recipe
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink
                     tag={Link}
                     to="/recipes/add"
                     active={location.pathname === '/recipe/add'}
                  >
                     add recipe
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink
                     tag={Link}
                     to="/profile"
                     active={location.pathname === '/profile'}
                  >
                     my profile
                  </NavLink>
               </NavItem>
            </>
         )}
      </Nav>
   );
}

export default Main;
