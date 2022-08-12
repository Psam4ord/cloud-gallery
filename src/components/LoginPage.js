import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  return (
   
      <Row style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='m-0 p-0'>
        <Col xs={10} md={6} lg={4}> 
          <Form className="login" validated>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Username or email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="remember-me-forgot-password">
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <Link to={"/forgotpassword"}>
                <a href="#" className="forgot-password-link">Forgot password</a>
              </Link>
            </div>

            <Link to={"/home"}>
              <Button variant="primary" type="submit">
                login
              </Button>
            </Link>

            <h6 className="d-block text-center">Don't have an account? </h6>
            <Link to={"/register"}>
              <Button className="d-block text-center text-decoration-none fw-bold mx-auto">
                Signup
              </Button>
            </Link> 
          </Form>
        </Col>
      </Row>
   
  );
};

export default Login;
