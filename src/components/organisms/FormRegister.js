import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import Alert from 'sweetalert2';

import { register } from '../../redux/action/auth';

import AuthStyles from '../../assets/style/AuthStyles';

import Picture from '../PictureSlide';
import Field from "../atoms/Field";
import Cb from '../atoms/CheckBox'

const FormRegister = () => {
  const navigate = useNavigate()

  // const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: ' ',
    email: ' ',
    phone: ' ',
    password: ' ',
    newPassword:' ',
    image: ' '
  })

  const [image, setImage] = useState(null)

  useEffect(() => {
    document.title = `${process.env.FRONTEND_NAME} - Register Page`;
  }, [])

  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }
  const onChangeImage = (e) => {
    setImage({ image: e.target.files[0] })
  }
    const onSubmit = (e) => {
      e.preventDefault()
      const { name, email, phone, password, newPassword } = form
      const data = !name || !email || !phone || !password || !newPassword

      if (data) {
        Alert('Data must be filled')
      } else if (form.password !== form.newPassword) {
        Alert('Password incorrect, please check again!')
      } else {
        // setLoading(true)

        const formData = new FormData()
        formData.append('name', form.name)
        formData.append('email', form.email)
        formData.append('phone', form.phone)
        formData.append('password', form.password)
        formData.append('newPassword', form.newPassword)
        formData.append('image', image.image)

        register(formData)
          .then((res) => {
            if (res.data.code === 500 ) {
              Alert.fire({
                icon: 'error',
                title: 'Oops..',
                text: res.data.message
              })
            } else {
              Alert.fire({
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500
              })
              navigate('auth/login')
            }
          })
          .catch((err) => {
            Alert.fire({
              icon: 'error',
              title: 'incorrect..',
              text: err.message
            })
          })
      }
    }
  return (
    <>
        <AuthStyles />
          <Container>
            <Row>
              <Picture />
              <Col lg="6" className="custom d-flex justify-content-center align-items-center">
                <div className="col-10 d-flex flex-column justify-content-center align-items-center p-0">
                  <h2 className="main-color title">Let&apos;s Get Started !</h2>
                  <span className="secondary-color description mt-4 mb-4"> Create new account to access all features</span>
                  <hr className="separator" />
                    <Form
                      className="w-100 mb-3 mt-3"
                      method="post"
                      encType="multipart/form-data"
                      onSubmit= {onSubmit}
                    >

                      <Field 
                        id='name'
                        label="Name" 
                        placeholder="Name"
                        onChange = {onChangeInput}
                      />
                      <Field 
                        id='email'
                        label="Email Address*" 
                        placeholder="Enter Email Address"
                        onChange = {onChangeInput}
                      />
                      <Field 
                        id='phone'
                        label="Phone Number" 
                        placeholder="08xxxxxx"
                        onChange = {onChangeInput}
                      />
                      <Field 
                        id='password'
                        type='password'
                        label="Create New Password" 
                        placeholder="Create New Password"
                        onChange = {onChangeInput}
                      />
                      <Field 
                        id='newPassword'
                        type='password'
                        label="New Password" 
                        placeholder="New Password" 
                        onChange = {onChangeInput}
                      />
                      <input
                        id='image'
                        type="file"
                        onChange={onChangeImage}
                        className="form-control"
                      />
                      <Cb 

                        label="I agree to terms & conditions" 
                        required
                      />
                      <Button 
                        variant="warning" 
                        className="w-100 btn-main pt-3 pb-3"
                        onClick={onSubmit}
                      >Register Account</Button>

                    </Form>
                    <div className="w-100 d-flex flex-column">
                      <div className="w-100 d-flex justify-content-center align-items-center">
                        <span className="alternative">
                          Already have account?{' '}
                          <Link to="/login" className="main-color clicked text-decoration-none">
                            Log In Here
                          </Link>
                        </span>
                      </div>
                    </div>
                </div>
              </Col>
            </Row>
          </Container>
    </>
  );
}

export default FormRegister;