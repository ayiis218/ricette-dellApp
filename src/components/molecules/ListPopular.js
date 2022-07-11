import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Default from '../../assets/img/default.jpg';

const Section = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 100px 0;
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
  width: 400px;
  height: 400px;
  min-height: 300px;
  max-height: 500px;
  border-radius: 15px;
  overflow: hidden;
  transition: ease-in-out 150ms;

  &:hover {
    box-shadow: 0 0 12px -2px #000000a0;
    transition: ease-in-out 150ms;
    cursor: pointer;
  }

  @media screen and (max-width: 576px) {
    width: 350px;
    height: 350px;
  }
`;

const CardTitle = styled.h2`
  color: var(--color-3);
  /* width: 59%; */
  text-transform: capitalize;
  background-color: var(--secondary-color);
  border-radius: 5px;
  padding: 0 5px;
`;

const Images = styled.img`
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
`;

function Slider({ recipes }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (recipes) {
        setLoading(false);
      }
    }, [recipes]);

  return (
    <Section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
      <TitleSection className="mb-4 mb-md-5">Popular Recipe</TitleSection>
        <Item>
        {loading ? (
          <div />
        ) : (
          recipes.data.map((item) => (
            <div className="d-flex justify-content-center" key={item.id}>
              <Link to={`/recipe/${item.id}`} style={{ textDecoration: 'none' }}>
                <Card>
                  <div className="w-100 h-100 p-4 d-flex align-items-end">
                    <CardTitle>{item.title}</CardTitle>
                      <Images
                        src={`https://drive.google.com/uc?export=view&id=${item.image}`}
                        alt={item.title}
                        className="w-100 h-100"
                        onError={(e) => {
                          e.target.src = Default;
                        }}
                      />
                  </div>
                </Card>
              </Link>
            </div>
          ))
        )}
      </Item>
    </Section>
  );
}

export default Slider;