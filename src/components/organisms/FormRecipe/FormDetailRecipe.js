import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import User from '../../../assets/icons/user.jpg';
import Default from '../../../assets/icons/default.jpg';
import saved from '../../../assets/icons/save.png';
import liked from '../../../assets/icons/liked.png';
import play from '../../../assets/icons/play.png';
// import Default from '../../assets/img/bakso.jpg';

const Section = styled.section`
  margin: 0 auto;
  margin-top: 150px;
  max-width: 800px;

  @media screen and (max-width: 576px) {
    margin-top: 90px;
  }
`;

const Title = styled.h1`
  font-family: 'Airbnb Cereal App Medium';
  color: var(--color-2);
  text-align: center;
  margin-bottom: 60px;

  @media screen and (max-width: 576px) {
  }
`;

const Image = styled.img`
  min-width: 70%;
  max-width: 200px;
  min-height: 200px;
  max-height: 300px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  border-radius: 15px !important;
  margin-top: 40px;
`;

const Icon = styled.div`
  z-index: 2;
  right: 130px;
  bottom: 5px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 576px) {
    right: 65px;
    bottom: 10px;
  }
`;

const Saved = styled.div`
  border-radius: 7px !important;
  padding: 5px;
  width: 30px;
  background-color: var(--secondary-color);

  &:hover {
    cursor: pointer;
    color: #cea905;
  }
`;

const Liked = styled.div`
  border-radius: 7px !important;
  padding: 2px;
  width: 37px;
  background-color: var(--main-color);

  &:hover {
    cursor: pointer;
  }
`;

const Item = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  max-width: 900px;
`;

const Heading = styled.h3`
  font-family: 'Airbnb Cereal App Medium';
  color: var(--color-3);
  margin-bottom: 20px;
`;

const Ingredients = styled.p`
  margin: 0;
  font-family: 'Airbnb Cereal App Light';
  white-space: pre-line;
  text-transform: capitalize;
`;

const Video = styled.button`
  width: 30%;
  height: 50px;
  border: 0;
  border-radius: 10px;
  background-color: #efc81a;
  color: #ffffff;

  &:hover {
    color: #cea905;
    box-shadow: var(--shadow-black-300);
  }

  @media screen and (max-width: 576px) {
    width: 60%;
  }
`;

const Play = styled.img`
  width: 15px;
  height: auto;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -25px;
`;

const Profile = styled.img`
  max-width: 60px;
  min-width: 60px;
  max-height: 60px;
  min-height: 60px;
  object-fit: cover;
  object-position: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
`;

function Detail() {
  return (
    <>
      <Section>
        <Title>Mie Ayam Bakso</Title>
        <Author>
          <Profile
            src={User}
            alt='{user}'
            className="rounded-circle"
            /* onError={(e) => {
              e.target.src = User;
            }} */
          />
          <Info className="h-100">
            <h6>
              <Link
                to={`/profile/`}
                style={{ color: '#000', textDecoration: 'none' }}>
                
              </Link>
            </h6>
            <span title='{dami}'></span>
          </Info>
        </Author>
        <div className="position-relative mb-7 text-center">
          <Image
            src={Default}
            alt='{defaultr}'
            /* onError={(e) => {
              e.target.src = Default;
            }} */
          />
          <Icon>
            <Saved>
              <img src={saved} alt="Bookmark" />
            </Saved>
            <Liked>
              <img src={liked} alt="Like" />
            </Liked>
          </Icon>
        </div>
      </Section>

      <Item>
        <Heading>Ingredients</Heading>
        <Ingredients>dami</Ingredients>
      </Item>
      <Item>
        <Heading>Video Step</Heading>
        <Link to={`/recipe/video/`}>
          <Video>
            <Play src={play} alt="Play" />
          </Video>
        </Link>
      </Item>
    </>
  );
}

export default Detail;
