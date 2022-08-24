import styled from 'styled-components';

export const Section = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  max-width: 1000px;

  @media screen and (max-width: 576px) {
    margin-top: 90px;
  }
`;

export const Button = styled.button`
  margin-top: 100px;
  margin-bottom: 20px;
  height: 64px;
  width: 426px;
  border-radius: 6px;
  border: none;
  background-color: var(--secondary-color);
  color: var(--color-1);
  font-family: 'Inter', sans-serif;

  &:hover {
    background-color: #cea905;
  }

  @media screen and (max-width: 576px) {
    margin-top: 50px;
    margin-bottom: 0;
  }
`;

export const Custom = styled.div`
display: flex;
justify-content: center;
height: 70px;
background-color: #f6f5f4;
font-family: 'Airbnb Cereal App Medium';
border-radius: 15px;
margin-top: 40px;
padding-left: 30px;

@media screen and (max-width: 576px) {
  margin-top: 20px;
}
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  height: 480px;
  background-color: #f6f5f4;
  border-radius: 15px;

  @media screen and (max-width: 576px) {
    height: 280px;
  }
`;

export const Custom2 = styled.div`
  background-color: transparent;
  font-family: 'Airbnb Cereal App Medium';
  width: 150px;
  padding: 10px;
  text-align: center;
  color: #666666;
  font-size: 20px;
  cursor: pointer;
`;