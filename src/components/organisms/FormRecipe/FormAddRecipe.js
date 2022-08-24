import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Input } from 'reactstrap';
import Swal from 'sweetalert2';
import toastr from '../../../utils/toastr';
import { createRecipe } from '../../../redux/action/recipe';
import { Section, Button, Custom, Custom2, Image } from '../style/createStyle';
import icon from '../../../assets/img/image.png';

function FormAddRecipe() {
   /*    const navigate = useNavigate();
   const hiddenFileInput = useRef(null);
   const [loading, setLoading] = useState(false);
   const [form, setForm] = useState({
      title: '',
      ingredients: '',
      video: '',
   });
   const [image, setImage] = useState(null);

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

   const handleInput = (e) => {
      setForm({
         ...form,
         [e.target.id]: e.target.value,
      });
   };

   const onSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();

      formData.append('title', form.title);
      formData.append('ingredients', form.ingredients);
      formData.append('video', form.video);

      if (image) {
         formData.append('image', image);
      }

      if (!form.title || !form.ingredients || !form.video) {
         Swal('Failed!', 'All data must be filled', 'warning');
      } else {
         createRecipe(formData)
            .then((res) => {
               Swal('Success!', res.message, 'success').then(() => {
                  navigate('/profile');
               });
            })
            .catch((err) => {
               if (err.response.data.code === 422) {
                  const { error } = err.response.data;
                  error.map((el) => toastr(el, 'error'));
               } else {
                  Swal('Error!', err.response.data.message, 'error');
               }
            })
            .finally(() => {
               setLoading(false);
            });
      }
   }; */
   return (
      <Section>
         <Form
            method="post"
            encType="multipart/form-data"
            //  onSubmit={onSubmit}
         >
            <Image>
               <img src={icon} alt="Icon" />
               <Custom2
                  id="customBtn"
                  // onClick={handleClick}
               >
                  Add Photo
               </Custom2>
               <input
                  type="file"
                  //  ref={hiddenFileInput}
                  //  onChange={handleChange}
                  style={{ display: 'none' }}
               />
            </Image>
            <Input
               type="text"
               className="form-control"
               style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
               }}
               placeholder="Title"
               //  onChange={onChange}
               required
            />
            <textarea
               className="form-control"
               placeholder="Ingredients"
               style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
               }}
               //  onChange={onChange}
               required
            />
            <Input
               type="text"
               className="form-control"
               style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
               }}
               placeholder="Foto"
               //  onChange={onChange}
               required
            />
            <div className="d-flex justify-content-center align-items-center pl-5">
               {/* {loading ? ( */}
               <Button type="submit" disabled>
                  <span
                     className="spinner-border spinner-border-sm"
                     role="status"
                     aria-hidden="true"
                  />
               </Button>
               {/* ) : ( */}
               <Button type="submit">Post</Button>
               {/* )} */}
            </div>
         </Form>
      </Section>
   );
}

export default FormAddRecipe;
