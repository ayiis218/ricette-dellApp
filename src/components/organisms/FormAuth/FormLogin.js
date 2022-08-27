import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import alert from 'sweetalert2';

import { login } from '../../../redux/action/auth';
import AuthStyles from '../../style/AuthStyles';
import Picture from '../../PictureSlide';

const FormLogin = (props) => {
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - Login Page`;
   }, []);

   const handleLogin = (e) => {
      e.preventDefault();

      if (!email || !password) {
         alert.fire({
            title: 'Error!',
            text: 'All field must be filled!',
            icon: 'error',
         });
      } else {
         setLoading(true);
         login({ email, password })
            .then((res) => {
               localStorage.setItem('token', res?.data?.token);
               if (res.data.token === undefined) {
                  alert.fire({
                     title: 'Failed!',
                     text: 'incorrect Email',
                     icon: 'error',
                  });
               } else {
                  alert.fire({
                     title: 'Success!',
                     text: 'Login Success',
                     icon: 'success',
                  });
                  navigate('/');
               }
            })
            .catch((err) => {
               alert.fire({
                  title: 'Error',
                  text: `incorrect Password`,
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
                  <h2 className="main-color title">Welcome</h2>
                  <span className="secondary-color description mt-0 mb-0">
                     Log in into your exiting account
                  </span>
                  <hr className="separator" />
                  <Form className="w-100 mb-1 mt-5" onSubmit={handleLogin}>
                     <FormGroup className="mb-3">
                        <Label for="email" className="mb-2 label">
                           E-mail
                        </Label>
                        <Input
                           type="email"
                           placeholder="examplexxx@gmail.com"
                           id="email"
                           className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                           onChange={(e) => setEmail(e.target.value)}
                           required
                        />
                     </FormGroup>
                     <FormGroup className="mb-1">
                        <Label for="password" className="mb-2 label">
                           Password
                        </Label>
                        <Input
                           type="password"
                           placeholder="Password"
                           id="password"
                           className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
                           onChange={(e) => setPassword(e.target.value)}
                           required
                        />
                     </FormGroup>
                     <FormGroup className="mb-4 terms">
                        <Input
                           type="checkbox"
                           className="checkbox"
                           id="terms"
                           required
                        />
                        <Label htmlFor="terms" className="label">
                           I agree to terms & conditions
                        </Label>
                     </FormGroup>
                     {loading ? (
                        <Button className="w-100 btn-main pt-3 pb-3" disabled>
                           {' '}
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
                           Login
                        </Button>
                     )}
                  </Form>
                  <div className="w-100 d-flex flex-column">
                     <div className="w-100 d-flex justify-content-center align-items-center">
                        <span className="alternative">
                           Don&apos;t have account?{' '}
                           <Link
                              to="/register"
                              className="main-color clicked text-decoration-none"
                           >
                              Sign Up
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

export default FormLogin;
