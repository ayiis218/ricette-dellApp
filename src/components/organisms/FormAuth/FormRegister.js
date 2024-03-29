import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import alert from 'sweetalert2';

import { register } from '../../../redux/action/auth';
import AuthStyles from '../../style/AuthStyles';
import Picture from '../../PictureSlide';

const FormRegister = () => {
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [phone, setPhone] = useState('');
   const [repass, setRePass] = useState('');

   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - Register Page`;
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      const data = name || email || phone || password || repass;

      if (!data) {
         alert.fire({
            title: 'Error!',
            text: 'All field must be filled!',
            icon: 'error',
         });
      } else if (password !== repass) {
         alert.fire({
            title: 'Error!',
            text: 'Password incorrect, please check again!',
            icon: 'error',
         });
      } else {
         setLoading(true);
         register({ name, email, password, phone, repass })
            .then((res) => {
               if (res.data.code === 500) {
                  alert.fire({
                     icon: 'error',
                     title: 'Oops..',
                     text: res.message,
                  });
               } else {
                  alert.fire({
                     icon: 'success',
                     title: `Register success`,
                  });
                  navigate('/login');
               }
            })
            .catch((err) => {
               alert.fire({
                  title: 'Error',
                  text: 'Duplicate Email',
                  icon: 'error',
               });
            })
            .finally(() => {
               setLoading(false);
            });
      }
   };
   return (
      <>
         <AuthStyles />
         <Row>
            <Picture />
            <Col
               lg="6"
               className="custom d-flex justify-content-center align-items-center"
            >
               <div className="col-10 d-flex flex-column justify-content-center align-items-center p-0">
                  <h2 className="main-color title">Let&apos;s Get Started !</h2>
                  <span className="secondary-color description mt-0 mb-0">
                     {' '}
                     Create new account to access all features
                  </span>
                  <hr className="separator" />
                  <Form className="w-100 mb-1 mt-0" onSubmit={handleSubmit}>
                     <FormGroup className="mb-2 label">
                        <Label for="name" className="mb-1">
                           Name
                        </Label>
                        <Input
                           type="text"
                           placeholder="Name"
                           id="name"
                           className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                           onChange={(e) => setName(e.target.value)}
                           required
                        />
                     </FormGroup>
                     <FormGroup className="mb-3 label">
                        <Label for="email" className="mb-2">
                           Email Address*
                        </Label>
                        <Input
                           type="email"
                           placeholder="Enter email address"
                           id="email"
                           className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                           onChange={(e) => setEmail(e.target.value)}
                           required
                        />
                     </FormGroup>
                     <FormGroup className="mb-3 label">
                        <Label for="phone" className="mb-2">
                           Phone Number
                        </Label>
                        <Input
                           type="text"
                           placeholder="08xxxxxxxxxx"
                           id="phone"
                           className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                           onChange={(e) => setPhone(e.target.value)}
                           required
                        />
                     </FormGroup>
                     <FormGroup className="mb-3 label">
                        <Label htmlFor="password" className="mb-2">
                           Create New Password
                        </Label>
                        <Input
                           type="password"
                           placeholder="Create New Password"
                           id="password"
                           className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                           onChange={(e) => setPassword(e.target.value)}
                           required
                        />
                     </FormGroup>
                     <FormGroup className="mb-3 label">
                        <Label htmlFor="passwordConfirmation" className="mb-2">
                           New Password
                        </Label>
                        <Input
                           type="password"
                           placeholder="New Password"
                           id="passwordConfirmation"
                           className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                           onChange={(e) => setRePass(e.target.value)}
                           required
                        />
                     </FormGroup>
                     <FormGroup className="mb-4 terms">
                        <Input
                           type="checkbox"
                           className="checkbox"
                           id="checkbox"
                           required
                        />
                        <Label for="checkbox" className="label">
                           I agree to terms & conditions
                        </Label>
                     </FormGroup>
                     {loading ? (
                        <Button className="w-100 btn-main pt-3 pb-3" disabled>
                           Loading..
                           <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                           />
                        </Button>
                     ) : (
                        <Button
                           type="submit"
                           className="w-100 btn-main pt-3 pb-3"
                        >
                           Register Account
                        </Button>
                     )}
                  </Form>
                  <div className="w-100 mb-1 d-flex flex-column">
                     <div className="w-100 d-flex justify-content-center align-items-center">
                        <span className="alternative">
                           Already have account?{' '}
                           <Link
                              to="/login"
                              className="main-color clicked text-decoration-none"
                           >
                              Log in Here
                           </Link>
                        </span>
                     </div>
                  </div>
               </div>
            </Col>
         </Row>
      </>
   );
};

export default FormRegister;
