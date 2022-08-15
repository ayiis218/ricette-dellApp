import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import AuthStyles from './style/AuthStyles';

import background from '../assets/img/cook.jpg';
import logo from '../assets/icons/icon.png';

function Picture() {
   return (
      <>
         <AuthStyles />
         <Col
            lg="6"
            md="4"
            className="h-100 position-relative d-none d-md-block p-0"
         >
            <img
               src={background}
               alt="background"
               className="w-100 full banner"
               height={600}
            />
            <div className="mask h-100 w-100 d-flex justify-content-center align-items-center">
               <Link to="/">
                  <img src={logo} alt="Logo" height={90} />
               </Link>
            </div>
         </Col>
      </>
   );
}

export default Picture;
