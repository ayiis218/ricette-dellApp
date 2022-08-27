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
   console.log(detailRecipe);
   const hiddenFileInput = useRef(null);
   const [loading, setLoading] = useState(false);
   const [name, setName] = useState({ name: detailRecipe.data.name_recipe });
   const [ingredients, setIngredients] = useState({
      ingredients: detailRecipe.data.ingredients,
   });
   const [video, setVideo] = useState({ video: detailRecipe.data.video });
   const [images, setImage] = useState({ images: detailRecipe.data.images });
   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - Edit Recipe Page`;

      dispatch(getDetailRecipe(id, navigate));
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
      if (images) {
         formData.append('images', images);
      }

      setLoading(true);
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
                     o
                     onChange={(e) => setName(e.target.value)}
                  />
                  <Textarea
                     id="ingredients"
                     onChange={(e) => setIngredients(e.target.value)}
                  />
                  <Text
                     name="Video"
                     id="video"
                     onChange={(e) => setVideo(e.target.value)}
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
