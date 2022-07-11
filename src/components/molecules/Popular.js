import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
// import AOS from 'aos';

import Default from '../../assets/img/foto1.png';

const Section = styled.section`
  margin-top: 80px;

  @media screen and (max-width: 576px) {
    margin-top: -80px;
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

const Image = styled.img`
  position: absolute;
  width: 500px;
  height: 500px;
  margin: 40px 0 0 50px;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;

  @media screen and (max-width: 576px) {
    margin: 30px 0 0 40px;
    width: 300px;
    height: 300px;
  }
`;

const Box = styled.div`
  position: absolute;
  margin-top: -10px;
  width: 500px;
  height: 500px;
  background-color: var(--secondary-color);

  @media screen and (max-width: 576px) {
    width: 300px;
    height: 300px;
  }
`;

const TitleNew = styled.h1`
  margin-left: 50px;
  font-family: 'Airbnb Cereal App Medium';
  color: var(--color-3);
  width: 70%;

  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow-black-100);
  border-radius: 15px;
  animation: bounceTop_01 3s ease infinite;
  @media screen and (max-width: 1110px) {
    width: 350px;
    height: 350px;
  }
  @media screen and (max-width: 991px) {
    margin-left: 55px;
  }
  @media screen and (max-width: 845px) {
    margin: 0 20px;
  }
  @media screen and (max-width: 772px) {
    margin-top: 70px;
    width: 300px;
    height: 300px;
  }
`;

const DetailRecipe = styled.p`
  margin-left: 50px;
  font-family: 'Airbnb Cereal App Light';
  color: var(--color-3);
  width: 65%;
  font-size: 18px;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
    width: 75%;
  }

  @media screen and (max-width: 940px) {
    font-size: 14px;
  }

  @media screen and (max-width: 576px) {
    text-align: center;
  }
`;

const Border = styled.hr`
  width: 100px;
  border: 1.5px solid var(--color-5);
  margin-left: 50px;

  @media screen and (max-width: 576px) {
    width: 50%;
    margin-left: 25% !important;
    margin-right: 25% !important;
  }
`;

const Button = styled.button`
background-color: var(--secondary-color);
color: var(--color-1);
padding: 12px 30px;
border: none;
border-radius: 7px;
font-size: 16px;
text-transform: capitalize;
transition: all 0.5 ease;
font-weight: 500;
text-decoration: none;
width: 150px;
text-align: center;
margin: 10px 0 0 50px;

&:focus {
  box-shadow: var(--shadow-black-300);
}

&:hover {
  cursor: pointer;
  color: var(--main-color);
  background-color: #cea905;
}

@media screen and (max-width: 576px) {
  margin: 0 auto;
  display: block;
}
`;

function Slider() {
  /* const [loading, setLoading] = useState(true);
  const recipe = recipes.data[0];

  useEffect(() => {
    AOS.init();
    if (recipe) {
      setLoading(false);
    }
  }, [recipe]); */

  return (
    <Section data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <TitleSection className="mb-4 mb-md-5">Popular For You ! </TitleSection>
        <Container>
        <Row>
        <Col md="6" className="position-relative">
            <Box />
            <Image
              src={Default}
              alt='{recipe.title}'
            />
          </Col>
          <Col md="6" className="d-flex flex-column justify-content-center full">
            <TitleNew>Healthy Bone Broth Ramen (Quick & Easy)</TitleNew>
            <Border />
            <DetailRecipe>
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!
            </DetailRecipe>
            <Button text="learn more" link={`/recipe/`} />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Slider;