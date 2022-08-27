import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Default from '../../../assets/icons/user.jpg';
import Aos from 'aos';

const Section = styled.section`
   margin: 0 auto;
   margin-top: 150px;
   max-width: 800px;

   @media screen and (max-width: 576px) {
      margin-top: 90px;
   }
`;

const Username = styled.p`
   font-size: 24px;
   font-family: 'Airbnb Cereal App Medium';
   font-weight: 500;
   text-align: center;
   margin-top: 15px;
`;
const Image = styled.img`
   margin: auto;
   height: 150px;
   width: 150px;
   background-size: cover;
   border-radius: 50%;
`;
const Action = styled.div`
   margin: auto;
   width: 185px;
   height: 80px;
   border-radius: 15px;
   transition: 0.5s;
`;

const Btn = styled.button`
   position: center;
   border: none;
   width: 200px;
   height: 40px;
   font-size: 15px;
   border-radius: 105px;
   margin-top: 10px;
`;

function Profile({ users }) {
   const [loading, setLoading] = useState(false);
   const user = users?.data[0];

   useEffect(() => {
      Aos.init();
      if (user) {
         setLoading(false);
      }
   }, [user]);

   return (
      <Container>
         {loading ? (
            <div className="spinner-border text-warning" role="status">
               <span className="sr-only">Loading...</span>
            </div>
         ) : (
            <Section>
               <div className="d-flex justify-content-center">
                  <Image
                     src={`${process.env.REACT_APP_API_URL}${user.photo}`}
                     alt={user.name}
                     onError={(e) => {
                        e.target.src = Default;
                     }}
                  />
               </div>
               <Username>{user.name}</Username>
               <div className="d-flex justify-content-center">
                  <Action>
                     <Link
                        to={`/profile/update/${user.id_users}`}
                        style={{ textDecoration: 'none' }}
                     >
                        <Btn className="d-block">Edit Profile</Btn>
                     </Link>
                  </Action>
               </div>
            </Section>
         )}
      </Container>
   );
}

export default Profile;
