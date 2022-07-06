import React from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Banner from '../../components/atoms/PictureSlide';
import AuthStyles from '../../assets/style/AuthStyles';

import Field from "../atoms/Field";
import Cb from '../atoms/CheckBox'

function FormRegister() {
  return (
    <>
        <AuthStyles />
          <Container>
            <Row>
              <Banner />
              <Col lg="6" className="custom d-flex justify-content-center align-items-center">
                <div className="col-10 d-flex flex-column justify-content-center align-items-center p-0">
                  <h2 className="main-color title">Let&apos;s Get Started !</h2>
                  <span className="secondary-color description mt-4 mb-4"> Create new account to access all features</span>
                  <hr className="separator w-100 mb-0 mt-1" />
                    <Form
                      className="w-100 mb-3 mt-3"
                      method="post"
                      encType="multipart/form-data"
                      onSubmit=''>

                      <Field label="Name" placeholder="Name" />

                      <Field label="Email Address*" placeholder="Enter Email Address" />

                      <Field label="Phone Number" placeholder="08xxxxxx" />

                      <Field label="Create New Password" placeholder="Create New Password" />

                      <Field label="New Password" placeholder="New Password" />
                      <Cb label="I agree to terms & conditions" />
                      <Button variant="warning" className="w-100 btn-main pt-3 pb-3">Register Account</Button>

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