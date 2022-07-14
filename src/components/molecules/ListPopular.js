import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Default from '../../assets/img/foodone.webp';
import Bakso from '../../assets/img/bakso.jpg';
import Nasgor from '../../assets/img/nasigoreng.jpg';
import Rawon from '../../assets/img/rawon.jpg';
import Pempek from '../../assets/img/pempek.jpg';

const Section = styled.section`
  margin-top: 80px;
  @media screen and (max-width: 576px) {
    margin-top: -10px;
  }
`;

const TitleSection = styled.h2`
  border-left: 12px solid var(--secondary-color);
  margin: 0 0 0 50px;
  padding: 15px;
  display: flex;
  font-family: 'Airbnb Cereal App Medium';
  color: var(--color-3);

  @media screen and (max-width: 576px) {
    margin-left: 10px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
  gap: 28px;

  @media screen and (max-width: 576px) {
    margin-left: 0;
    gap: 10px;
    justify-content: center;
  }
`;

const Card = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  min-height: 300px;
  max-height: 500px;
  border-radius: 20px;
  transition: ease-in-out 150ms;

  &:hover {
    box-shadow: 0 0 12px -2px;
    transition: ease-in-out 150ms;
    cursor: pointer;
  }

  @media screen and (max-width: 576px) {
    width: 350px;
    height: 100px;
  }
`;

const Title = styled.h2`
  text-transform: capitalize;
  border-radius: 5px;
  padding: 0 5px;
  color: var(--color-3);
`;

const Image = styled.img`
  position: absolute;
  width: 240px;
  height: 230px;
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

function ListPopular() {
  /* const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

    useEffect(() => {

        fectData();

    }, [recipes]);

    const fectData = async () => {
      const response = await axios.get('localhost:8120/recipe/all');
      const data = await response.data.data;

      setPosts(data);
  } */

  return (
    <Section data-aos="zoom-in-down">
      <TitleSection className="mb-4 mb-md-5">Popular Recipe</TitleSection>
      <Item>
      {/* {loading ? (
        <div />
      ) : (
        recipes.data.map((item) => ( */}
          <div className="justify-content-center" >
            <Link to={`/recipe/detail`} style={{ textDecoration: 'none' }}>
              <Row>
                <Card lg='3'>
                <div className="w-100 h-100 p-4 d-flex align-items-end">
                  <Title>Bakso</Title>
                  <Image
                    src={Bakso}
                    alt='popular recipe'
                    onError={(e) => {
                      e.target.src = Default;
                    }}
                  />
                </div>
              </Card>
              <Card lg='3'>
                <div className="w-100 h-100 p-4 d-flex align-items-end">
                  <Title>Pempek</Title>
                  <Image
                    src={Pempek}
                    alt='popular recipe'
                    onError={(e) => {
                      e.target.src = Default;
                    }}
                  />
                </div>
              </Card>
              <Card lg='3'>
                <div className="w-100 h-100 p-4 d-flex align-items-end">
                  <Title>Rawon</Title>
                  <Image
                    src={Rawon}
                    alt='popular recipe'
                    onError={(e) => {
                      e.target.src = Default;
                    }}
                  />
                </div>
              </Card>
              <Card lg='3'>
                <div className="w-100 h-100 p-4 d-flex align-items-end">
                  <Title>Nasgor</Title>
                  <Image
                    src={Nasgor}
                    alt='popular recipe'
                    onError={(e) => {
                      e.target.src = Default;
                    }}
                  />
                </div>
              </Card>
              <Card lg='3'>
                <div className="w-100 h-100 p-4 d-flex align-items-end">
                  <Title>Rawon</Title>
                  <Image
                    src={Rawon}
                    alt='popular recipe'
                    onError={(e) => {
                      e.target.src = Default;
                    }}
                  />
                </div>
              </Card>
              </Row>
            </Link>
          </div>
       {/*  ))
      )} */}
    </Item>
    </Section>
  );
}

export default ListPopular;