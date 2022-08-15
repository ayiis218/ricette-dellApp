/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';
import jwt_decode from 'jwt-decode';
import alert from 'sweetalert2';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getDetailUser, updateProfile } from '../../../redux/action/user';

import icon from '../../../assets/icons/edit.svg';

// import icon from '../../assets/icons/edit.svg';
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

function Profile({ users, me }) {
   const hiddenFileInput = useRef(null);
   const [loading, setLoading] = useState(false);
   const dispatch = useDispatch();
   const token = localStorage.getItem('token');
   const decoded = jwt_decode(token);
   const user = users?.data[0];

   useEffect(() => {
      Aos.init();
      if (user) {
         setLoading(false);
      }
   }, [user]);

   const handleClick = () => {
      hiddenFileInput.current.click();
   };

   const handleChange = (e) => {
      const photo = e.target.file[0];
      const formData = new FormData();
      if (photo) {
         formData, append('image', photo);
      }

      setLoading(true);
      updateProfile(formData, decoded.id)
         .then((res) => {
            alert
               .fire({
                  title: 'Success!',
                  text: res.message,
                  icon: 'success',
               })
               .then(() => {
                  dispatch(getDetailUser(decoded.id));
               });
         })
         .catch((err) => {
            alert.fire({
               title: 'Error!',
               text: err.message,
               icon: 'error',
            });
         })
         .finally(() => {
            setLoading(false);
         });
   };
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
                     src={`https://ricette-dellapp.herokuapp.com/${user.photo}`}
                     alt={user.name}
                     onError={(e) => {
                        e.target.src = Default;
                     }}
                  />

                  {me && <Icon src={icon} alt="Icon" onClick={handleClick} />}

                  <input
                     type="file"
                     ref={hiddenFileInput}
                     onChange={handleChange}
                     style={{ display: 'none' }}
                  />
               </div>
               <Username>{user.name}</Username>
               <div className="d-flex justify-content-center">
                  <Action>
                     <Link to="/update" style={{ textDecoration: 'none' }}>
                        <Btn className="d-block">Edit Profile</Btn>
                     </Link>
                     <Link
                        to="/profile/password"
                        style={{ textDecoration: 'none' }}
                     >
                        <Btn className="d-block">Change Password</Btn>
                     </Link>
                  </Action>
               </div>
            </Section>
         )}
      </Container>
   );
}

export default Profile;
