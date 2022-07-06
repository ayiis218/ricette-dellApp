import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AuthStyles from '../../assets/style/AuthStyles';
// Import images
import banner from '../../assets/img/cook.jpg'
import logo from '../../assets/icons/icon.png';

function Banner() {
  return (
    <>
      <AuthStyles />
      <Col lg="6" md="4" className="position-relative d-none d-md-block p-0">
        <img src={banner} alt="Banner" className="w-100 full banner" />
        <div className="mask h-100 w-100 d-flex justify-content-center align-items-center">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </Col>
    </>
  );
}

export default Banner;