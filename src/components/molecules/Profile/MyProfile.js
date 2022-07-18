import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import icon from '../../assets/icons/edit.svg';
import Default from '../../../assets/icons/user.jpg';

const Section = styled.section`
  margin: 0 auto;
  margin-top: 150px;
  max-width: 800px;

  @media screen and (max-width: 576px) {
    margin-top: 90px;
  }
`;

const Photo = styled.img`
  height: 150px;
  width: 150px;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

const Icon = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;

  &:hover {
    cursor: pointer;
  }
`;

const Username = styled.p`
  font-size: 24px;
  font-family: 'Airbnb Cereal App Medium';
  font-weight: 500;
  text-align: center;
  margin-top: 15px;
`;
const Action = styled.div`
  margin: 0 auto;
  width: 320px;
  height: 80px;
  border-radius: 15px;
  position: relative;
  transition: 0.5s;
`;

const Btn = styled.button`
position: center;
  border: none;
  width: 300px;
  height: 40px;
  font-size: 15px;
  border-radius: 105px;
  margin-top:10px;
`;

function Profile() {

  return (
      <Container fluid>
        <Section>
        <div className="d-flex justify-content-center">
          <div className="position-relative">
            <Photo
              src={Default}
              alt='Profile'
              /* onError={(e) => {
                e.target.src = User;
              }} */
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="position-relative">
            <Action >
              <Link to="/profile/edit" style={{ textDecoration: 'none' }}>
                <Btn className="d-block">Edit Profile</Btn>
              </Link>
              <Link to="/profile/password" style={{ textDecoration: 'none' }}>
                <Btn className="d-block">Change Password</Btn>
              </Link>
          </Action>
          </div>  
        </div>
        </Section>
              
      </Container>
  );
}

export default Profile;
