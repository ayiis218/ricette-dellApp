import React, { useState, useEffect, useRef } from 'react';
import jwt_decode from 'jwt-decode';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container, Form } from 'reactstrap';
import alert from 'sweetalert2';
// import toastr from '../../../utils/toastr';
import { createRecipe } from '../../../redux/action/recipe';
import Navbar from '../../atoms/Navbar';
import File from '../../atoms/File';
import Text from '../../atoms/Text';
import Textarea from '../../atoms/Textarea';
import Footer from '../../Footer';

const Section = styled.div`
   margin: 0 auto;
   margin-top: 150px;
   max-width: 1000px;

   @media screen and (max-width: 576px) {
      margin-top: 90px;
   }
`;

const Button = styled.button`
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

const Add = () => {
   const navigate = useNavigate();
   const hiddenFileInput = useRef(null);
   const [loading, setLoading] = useState(false);
   const [name, setName] = useState('');
   const [ingredients, setIngredients] = useState('');
   const [video, setVideo] = useState('');
   const [images, setImage] = useState(null);
   const token = localStorage.getItem('token');
   const decoded = jwt_decode(token);
   const id_user = decoded.id_users;

   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - Add Recipe Page`;
   }, []);

   const handleClick = () => {
      hiddenFileInput.current.click();
   };

   const handleChange = (event) => {
      const fileUploaded = event.target.files[0];
      document.getElementById('customBtn').innerHTML = fileUploaded.name;
      setImage(fileUploaded);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('name', name);
      formData.append('ingredients', ingredients);
      formData.append('video', video);
      formData.append('id_user', id_user);
      if (images) {
         formData.append('images', images);
      }

      const data = !name || !ingredients || !video;

      if (data) {
         alert.fire({
            title: 'Error!',
            text: 'All field must be filled!',
            icon: 'error',
         });
      } else {
         setLoading(true);
         createRecipe(formData)
            .then((res) => {
               alert.fire({
                  icon: 'success',
                  title: `success`,
               });
               navigate('/profile');
            })
            .catch((err) => {
               alert.fire({
                  icon: 'Error',
                  title: `Failed ${err}`,
               });
            })
            .finally(() => {
               setLoading(false);
            });
      }
   };

   return (
      <>
         <Navbar />

         <Container fluid>
            <Section>
               <Form
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
               >
                  <File
                     handleChange={handleChange}
                     hiddenFileInput={hiddenFileInput}
                     handleClick={handleClick}
                     required
                  />
                  <Text
                     name="Title"
                     id="title"
                     onChange={(e) => setName(e.target.value)}
                     required
                  />
                  <Textarea
                     id="ingredients"
                     onChange={(e) => setIngredients(e.target.value)}
                     required
                  />
                  <Text
                     name="Video"
                     id="video"
                     onChange={(e) => setVideo(e.target.value)}
                     required
                  />
                  <div className="d-flex justify-content-center align-items-center pl-5">
                     {loading ? (
                        <Button type="submit" disabled>
                           <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                           />
                        </Button>
                     ) : (
                        <Button type="submit">Post</Button>
                     )}
                  </div>
               </Form>
            </Section>
         </Container>

         <Footer />
      </>
   );
};

export default Add;
