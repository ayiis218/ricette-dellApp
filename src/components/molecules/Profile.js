import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
// import Alert from 'sweetalert';

import ButtonProfile from '../atoms/ButtonProfile';
import NavProfile from '../molecules/NavProfile';

// import icon from '../../assets/icons/edit.svg';
import Default from '../../assets/img/user.png';

const Section = styled.section`
  display: flex;
  margin: auto;
  align-items: center;
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

function Profile() {

  return (
    <Section>
      <Container>
        <Row className="align-items-center">
          <Photo
            src={Default}
            alt='Profile'
            /* onError={(e) => {
              e.target.src = User;
            }} */
          />

        <input
          type="file"
        />
      {/* <Username>Ayiis</Username>
      <ButtonProfile /> */}
          <NavProfile />
        </Row>
        
      </Container>
    </Section>
  );
}

export default Profile;
