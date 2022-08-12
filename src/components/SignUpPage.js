import React from 'react'
import Layout from '../navigation/index';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


import '../styles/SignUp.css';

const SignUp = () => {
  return (
    <Layout navItem={''}>
    <Row>
    <Col className='main-Signup-form'> 
    <Form  className='Sign-up' validated>
       <p className='lead fw-bold'> SIGN UP </p>
          <Form.Group className="my-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="email" />
      </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password"  />
              </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Confirm password" />
              </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button variant="primary" type="submit">SignUp</Button>

        <h6  className='d-block text-center'>
         Already a member? </h6>
         <Link to={'/login'}>
         <a className='d-block text-center fw-bold text-decoration-none'>Login</a>
         </Link>
        </Form>
       <Col className='right-section'><h1> WELCOME </h1> </Col>
  
        </Col>
    </Row>
   
    </Layout>
  )
}

export default SignUp;