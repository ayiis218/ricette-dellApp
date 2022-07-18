import styled from 'styled-components';

const Section = styled.footer`
  height: auto;
  background-color: #EFC81A
  padding-top: 200px;
  fontFamily: 'Airbnb Cereal App Light',
  margin-top: 80px;
  position: relative;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 64px;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 22px;
  color: #707070;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const List = styled.div`
  margin-top: 150px;
  padding-left: 6vw;
`;

const Item = styled.a`
  display: inline-block;
  color: #707070;
  margin-right: 15px;
  font-size: 16px;
  margin-bottom: 25px;
  text-decoration: none;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  color: var(--color-5);
  float: right;
  @media screen and (max-width: 500px) {
    text-align: center;
    float: none;
  }
`;

export { FooterS, Title, Description, Item, Copyright, List }