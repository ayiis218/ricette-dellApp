/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
   Container,
   Row,
   Col,
   Form,
   FormGroup,
   Label,
   Input,
   Button,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import alert from 'sweetalert2';
import jwt_decode from 'jwt-decode';
import Banner from '../PictureSlide';
import { getDetailUser, updateProfile } from '../../redux/action/user';

import AuthStyles from '../style/AuthStyles';
// import toastr from '../../utils/toastr';

function EditProfile() {
   const token = localStorage.getItem('token');
   const decoded = jwt_decode(token);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { detailUser } = useSelector((state) => state);
   const [name, setName] = useState({ name: detailUser.data.name });
   const [email, setEmail] = useState({ email: detailUser.data.email });
   const [password, setPassword] = useState('');
   const [phone, setPhone] = useState({ phone: detailUser.data.phone });
   const [repass, setRePass] = useState('');
   const [photo, setPhoto] = useState({ photo: detailUser.data.photo });
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      document.title = `${process.env.REACT_APP_APP_NAME} - Edit Profile Page`;

      dispatch(getDetailUser(decoded.id));
   }, []);

   const onChangePhoto = (e) => {
      setPhoto(e.target.files[0]);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      // formData.append('id_users', id_users);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('password', password);
      formData.append('repass', repass);
      if (photo) {
         formData.append('photo', photo);
      }

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
         updateProfile(formData, decoded.id_users)
            .then((res) => {
               alert.fire({
                  icon: 'success',
                  title: `Update data success`,
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
         <AuthStyles />
         <Container fluid>
            <Row>
               <Banner />
               <Col
                  md="8"
                  lg="6"
                  className="full d-flex justify-content-center align-items-center"
               >
                  <div className="col-10 col-md-8 col-xl-6 d-flex flex-column justify-content-center align-items-center p-0">
                     <h2 className="main-color title">Edit Profile</h2>
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
                           <Label
                              htmlFor="passwordConfirmation"
                              className="mb-2"
                           >
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
                        <FormGroup className="mb-3 label">
                           <Label for="photo" className="mb-2">
                              Photo Profile
                           </Label>
                           <Input
                              type="file"
                              onChange={onChangePhoto}
                              required
                           />
                        </FormGroup>
                        {loading ? (
                           <Button
                              className="w-100 btn-main pt-3 pb-3"
                              disabled
                           >
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
                              Update
                           </Button>
                        )}
                     </Form>
                  </div>
               </Col>
            </Row>
         </Container>
      </>
   );
}

export default EditProfile;
