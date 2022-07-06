import React from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Banner from '../../components/atoms/PictureSlide';
import AuthStyles from '../../assets/style/AuthStyles';

import Field from "../atoms/Field";
import Cb from '../atoms/CheckBox'

function FormLogin() {
  return (
    <>
        <AuthStyles />
          <Container>
            <Row>
              <Banner />
              <Col lg="6" className="custom d-flex justify-content-center align-items-center">
                <div className="col-10 d-flex flex-column justify-content-center align-items-center p-0">
                  <h2 className="main-color title">Welcome</h2>
                  <span className="secondary-color description mt-4 mb-4">Log in into your exiting account</span>
                  <hr className="separator w-100 mb-0 mt-1" />
                    <Form
                      className="w-100 mb-3 mt-3"
                      method="post"
                      encType="multipart/form-data"
                      onSubmit=''>

                      <Field label="E-mail" placeholder="examplexxx@gmail.com" />
                      <Field label="Password" placeholder="Password" />
                      <Cb label="I agree to terms & conditions" />
                      <Button variant="warning" className="w-100 btn-main pt-3 pb-3">Log in</Button>

                    </Form>
                    <div className="w-100 d-flex flex-column">
                      <div className="w-100 d-flex justify-content-center align-items-center">
                        <span className="alternative">
                          Don't have account?{' '}
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