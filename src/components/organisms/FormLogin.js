import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import Alert from 'sweetalert2';

import { login } from '../../redux/action/auth';

import AuthStyles from '../../assets/style/AuthStyles';

import Picture from '../PictureSlide';
import Field from "../atoms/Field";
import Cb from '../atoms/CheckBox';

const FormLogin = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const onChangeInput = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    }

    login(body)
      .then((response) => {
        if (response.data.code === 500) {
          Alert.fire({
            icon: 'error',
            title: 'Oops....',
            text: response.data.message
          })
        } else {
          Alert.fire({
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            time: 1500
          })
          navigate('/Home')
        }
      })
      .catch((err) => {
        Alert.fire({
          icon: 'error',
          title: 'incorrect....',
          text: err.message
        })
      })
  }

  return (
    <>
        <AuthStyles />
          <Container>
            <Row>
              <Picture />
              <Col lg="6" className="custom d-flex justify-content-center align-items-center">
                <div className="col-10 d-flex flex-column justify-content-center align-items-center p-0">
                  <h2 className="main-color title">Welcome</h2>
                  <span className="secondary-color description mt-4 mb-4">Log in into your exiting account</span>
                  <hr className="separator w-100 mb-0 mt-1" />
                    <Form
                      className="w-100 mb-3 mt-3"
                      method="post"
                      encType="multipart/form-data"
                      action="/profile"
                      onSubmit= {onSubmit}
                    >

                      <Field 
                        type="email" 
                        id="inputEmail" 
                        label="E-mail" 
                        placeholder="examplexxx@gmail.com" 
                        onChange = {onChangeInput}
                      />
                      <Field 
                        type="password" 
                        id="inputPassword" 
                        label="Password" 
                        placeholder="Password"
                        onChange = {onChangeInput} 
                      />
                      <Cb 
                        label="I agree to terms & conditions" 
                        required
                      />
                      <Button 
                        variant="warning" 
                        className="w-100 btn-main pt-3 pb-3"
                        onClick={onSubmit}
                      >Log in</Button>

                    </Form>
                    <div className="w-100 d-flex flex-column">
                      <div className="w-100 d-flex justify-content-center align-items-center">
                        <span className="alternative">
                          Don&apost have account?
                          <Link to="/register" className="main-color clicked text-decoration-none">
                            Sign Up
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

export default FormLogin;