/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form } from 'reactstrap';
import alert from 'sweetalert2';
/* 
import toastr from '../../../utils/toastr'; */
/*  */
import { useSelector, useDispatch } from 'react-redux';
import { getDetailRecipe, updateRecipe } from '../../../redux/action/recipe';
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

const Edit = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const dispatch = useDispatch();
   const { detailRecipe } = useSelector((state) => state);
   const hiddenFileInput = useRef(null);
   const [loading, setLoading] = useState(false);
   const [form, setForm] = useState({
      name: '',
      ingredients: '',
      video: '',
   });
   const [images, setImage] = useState(null);
   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - Edit Recipe Page`;

      dispatch(getDetailRecipe(id, navigate));
   }, []);

   useEffect(() => {
      if (detailRecipe.data) {
         setForm({
            ...form,
            name: detailRecipe.data.name,
            ingredients: detailRecipe.data.ingredients,
            video: detailRecipe.data.video,
         });
      }
   }, [detailRecipe]);

   const handleClick = () => {
      hiddenFileInput.current.click();
   };

   const handleChange = (event) => {
      const fileUploaded = event.target.files[0];
      document.getElementById('customBtn').innerHTML = fileUploaded.name;
      setImage(fileUploaded);
   };

   const handleInput = (e) => {
      setForm({
         ...form,
         [e.target.id]: e.target.value,
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();

      formData.append('name', form.name);
      formData.append('ingredients', form.ingredients);
      formData.append('video', form.video);

      if (images) {
         formData.append('image', images);
      }

      if (!form.name || !form.ingredients || !form.video) {
         alert.fire({
            title: 'Error!',
            text: 'All field must be filled!',
            icon: 'error',
         });
      } else {
         updateRecipe(formData, id)
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
                  />
                  <Text
                     name="name"
                     id="name"
                     value={form.name}
                     onChange={handleInput}
                  />
                  <Textarea
                     id="ingredients"
                     value={form.ingredients}
                     onChange={handleInput}
                  />
                  <Text
                     name="Video"
                     id="video"
                     value={form.video}
                     onChange={handleInput}
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
                        <Button type="submit">Edit</Button>
                     )}
                  </div>
               </Form>
               {/* 
          
         */}
            </Section>
         </Container>

         <Footer />
      </>
   );
};

export default Edit;
